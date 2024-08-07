import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/db";
import Category from "@/models/Category";
import Product from "@/models/Product"; // Import Product model
import cloudinary from "@/lib/cloudinary";
import upload from "@/lib/multer"; // Adjust the path according to your project structure
import stream from "stream";
import { promisify } from "util";
import User from "@/models/User";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we will handle it manually
  },
};

const uploadFiles = promisify(upload.fields([{ name: 'image', maxCount: 1 }, { name: 'logo', maxCount: 1 }]));
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const extractPublicId = (url: string): string => {
    // Match the public ID from the URL
    const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);

    // If the format includes folders, split and get the last part
    if (matches) {
      return matches[1];
    }

    // Handle cases with folder paths
    const segments = url.split("/");
    const lastSegment = segments.pop();
    return lastSegment ? lastSegment.split(".")[0] : "";
  };
  const { id } = req.query; // Get `id` from query parameters

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid or missing category ID" });
  }

  switch (req.method) {
    case "GET":
      try {

        await User.find();
        // Fetch a single category by ID
        const category = await Category.findById(id);

        if (!category) {
          return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error fetching category" });
      }
      break;
      case "PUT":
      try {
       // Handle multiple files with multer
       await uploadFiles(req as any, res as any);
        const { name } = req.body;
        const imageFile = (req as any).files?.image?.[0] ;
        const logoFile = (req as any).files?.logo?.[0];
        console.log(logoFile)
        const category = await Category.findById(id);
        if (!category) {
          return res.status(404).json({ message: "Category not found" });
        }

        let imageUrl = category.imageUrl;
        let logoUrl = category.logoUrl;
        if (imageFile) {
          if (category.imageUrl) {
            const publicId = extractPublicId(category.imageUrl);
            if (publicId) {
              await cloudinary.uploader.destroy(`categories/${publicId}`);
            }
          }

          const bufferStream = new stream.PassThrough();
          bufferStream.end(imageFile.buffer);

          const result = await new Promise<any>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { folder: 'categories' },
              (error, result) => {
                if (error) {
                  console.error('Cloudinary Upload Error:', error);
                  return reject(error);
                }
                resolve(result);
              }
            );
            bufferStream.pipe(uploadStream);
          });

          imageUrl = result.secure_url;
        }
           // Handle logo upload
    if (logoFile) {
      // Delete the old logo if it exists
      if (logoUrl) {
        const publicId = extractPublicId(logoUrl);
        if (publicId) {
          await cloudinary.uploader.destroy(`categories/logos/${publicId}`);
        }
      }

      const bufferStream = new stream.PassThrough();
      bufferStream.end(logoFile.buffer);

      const result = await new Promise<any>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: 'categories/logos', public_id: `logo_${id}` },
          (error, result) => {
            if (error) {
              console.error('Cloudinary Upload Error:', error);
              return reject(error);
            }
            resolve(result);
          }
        );
        bufferStream.pipe(uploadStream);
      });

      logoUrl = result.secure_url;
    }
        const updatedData: any = {};
        if (name) updatedData.name = name;
        if (imageUrl) updatedData.imageUrl = imageUrl;
        if (logoUrl) updatedData.logoUrl = logoUrl;

        const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedCategory) {
          return res.status(404).json({ message: 'Failed to update category' });
        }

        res.status(200).json(updatedCategory);
      } catch (error) {
        console.error('Error in PUT handler:', error);
        res.status(500).json({ error: 'Error updating category' });
      }
      break;
      

    case "DELETE":
      try {
        // Check for associated products
        const products = await Product.find({ category: id });

        if (products.length > 0) {
          return res
            .status(400)
            .json({
              message: "Cannot delete category with associated products",
            });
        }

        // find  the category
        const category = await Category.findById(id);
        console.log(category);
        if (!category) {
          return res.status(404).json({ message: "Category not found" });
        }
        //destroy image in cloud
        if (category.imageUrl) {
          const publicId = extractPublicId(category.imageUrl);

          if (category.imageUrl) {
            const publicId = category.imageUrl
              .split("/")
              .pop()
              ?.split(".")
              .shift();
            if (publicId) {
              await cloudinary.uploader.destroy(`categories/${publicId}`);
            }
          }
        }
        if (category.logoUrl) {
          const publicId = extractPublicId(category.logoUrl);

          if (category.logoUrl) {
            const publicId = category.logoUrl
              .split("/")
              .pop()
              ?.split(".")
              .shift();
            if (publicId) {
              await cloudinary.uploader.destroy(`categories/logos/${publicId}`);
            }
          }
        }
        //Delete the category
        await Category.findByIdAndDelete(id);

        res.status(200).json({ message: "Category deleted successfully" });
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Error deleting category" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};

export default handler;
