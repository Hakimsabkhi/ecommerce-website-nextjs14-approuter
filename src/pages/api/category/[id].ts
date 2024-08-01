import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/db";
import Category from "@/models/Category";
import Product from "@/models/Product"; // Import Product model
import cloudinary from "@/lib/cloudinary";
import upload from "@/lib/multer"; // Adjust the path according to your project structure
import stream from "stream";
import { promisify } from "util";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we will handle it manually
  },
};

const uploadSingle = promisify(upload.single('image'));
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
        await uploadSingle(req as any, res as any);

        const { name } = req.body;
        const file = (req as any).file;

        const category = await Category.findById(id);
        if (!category) {
          return res.status(404).json({ message: "Category not found" });
        }

        let imageUrl = category.imageUrl;

        if (file) {
          if (category.imageUrl) {
            const publicId = extractPublicId(category.imageUrl);
            if (publicId) {
              await cloudinary.uploader.destroy(`categories/${publicId}`);
            }
          }

          const bufferStream = new stream.PassThrough();
          bufferStream.end(file.buffer);

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

        const updatedData: any = {};
        if (name) updatedData.name = name;
        if (imageUrl) updatedData.imageUrl = imageUrl;

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
