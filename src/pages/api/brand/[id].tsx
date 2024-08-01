import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/db";
import Brand from "@/models/Brand"; // Import Brand model
import cloudinary from "@/lib/cloudinary";
import upload from "@/lib/multer"; // Adjust the path according to your project structure
import stream from "stream";
import { promisify } from "util";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we will handle it manually
  },
};

const uploadFiles = promisify(upload.fields([{ name: 'image', maxCount: 1 }, { name: 'logo', maxCount: 1 }]));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const extractPublicId = (url: string): string => {
    const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);

    if (matches) {
      return matches[1];
    }

    const segments = url.split("/");
    const lastSegment = segments.pop();
    return lastSegment ? lastSegment.split(".")[0] : "";
  };

  const { id } = req.query; // Get `id` from query parameters

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid or missing brand ID" });
  }

  switch (req.method) {
    case "GET":
      try {
        const brand = await Brand.findById(id);

        if (!brand) {
          return res.status(404).json({ message: "Brand not found" });
        }
        res.status(200).json(brand);
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error fetching brand" });
      }
      break;

    case "PUT":
      try {
        // Handle multiple files with multer
        await uploadFiles(req as any, res as any);

        const { name, place } = req.body;
        const imageFile = (req as any).files?.image?.[0];
        const logoFile = (req as any).files?.logo?.[0];

        const brand = await Brand.findById(id);
        if (!brand) {
          return res.status(404).json({ message: "Brand not found" });
        }

        let imageUrl = brand.imageUrl;
        let logoUrl = brand.logoUrl;

        if (imageFile) {
          if (brand.imageUrl) {
            const publicId = extractPublicId(brand.imageUrl);
            if (publicId) {
              await cloudinary.uploader.destroy(`brands/${publicId}`);
            }
          }

          const bufferStream = new stream.PassThrough();
          bufferStream.end(imageFile.buffer);

          const result = await new Promise<any>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { folder: "brands/images" },
              (error, result) => {
                if (error) {
                  console.error("Cloudinary Upload Error:", error);
                  return reject(error);
                }
                resolve(result);
              }
            );
            bufferStream.pipe(uploadStream);
          });

          imageUrl = result?.secure_url || "";
        }

        if (logoFile) {
          if (brand.logoUrl) {
            const publicId = extractPublicId(brand.logoUrl);
            if (publicId) {
              await cloudinary.uploader.destroy(`brands/${publicId}`);
            }
          }

          const bufferStream = new stream.PassThrough();
          bufferStream.end(logoFile.buffer);

          const result = await new Promise<any>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { folder: "brands/logos", public_id: `logo_${id}` },
              (error, result) => {
                if (error) {
                  console.error("Cloudinary Upload Error:", error);
                  return reject(error);
                }
                resolve(result);
              }
            );
            bufferStream.pipe(uploadStream);
          });

          logoUrl = result?.secure_url || "";
        }

        const updatedData: any = {};
        if (name) updatedData.name = name;
        if (place) updatedData.place = place;
        if (imageUrl) updatedData.imageUrl = imageUrl;
        if (logoUrl) updatedData.logoUrl = logoUrl;

        const updatedBrand = await Brand.findByIdAndUpdate(id, updatedData, {
          new: true,
        });
        if (!updatedBrand) {
          return res.status(404).json({ message: "Failed to update brand" });
        }

        res.status(200).json(updatedBrand);
      } catch (error) {
        console.error("Error in PUT handler:", error);
        res.status(500).json({ error: "Error updating brand" });
      }
      break;

    case "DELETE":
      try {
        const brand = await Brand.findById(id);
        if (!brand) {
          return res.status(404).json({ message: "Brand not found" });
        }

        if (brand.imageUrl) {
          const publicId = extractPublicId(brand.imageUrl);
          if (publicId) {
            await cloudinary.uploader.destroy(`brands/${publicId}`);
          }
        }

        if (brand.logoUrl) {
          const publicId = extractPublicId(brand.logoUrl);
          if (publicId) {
            await cloudinary.uploader.destroy(`brands/${publicId}`);
          }
        }

        await Brand.findByIdAndDelete(id);

        res.status(200).json({ message: "Brand deleted successfully" });
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error deleting brand" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};

export default handler;
