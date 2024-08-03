import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/db";
import Product from "@/models/Product";
import cloudinary from "@/lib/cloudinary";
import upload from "@/lib/multer";
import stream from "stream";
import { promisify } from "util";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we will handle it manually
  },
};

const uploadSingle = promisify(upload.single('image'));

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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  const { id } = req.query; // Get `id` from query parameters

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: "Invalid or missing product ID" });
  }

  switch (req.method) {
    case "GET":
      try {
        const product = await Product.findById(id).populate("user").populate("category");
        if (product) {
          res.status(200).json(product);
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Error fetching product" });
      }
      break;

    case "PUT":
      try {
        // Custom middleware to handle file upload without promisify
        const uploadSingle = (req: any, res: any) => {
          return new Promise((resolve, reject) => {
            upload.single('image')(req, res, (err: any) => {
              if (err) return reject(err);
              resolve(req.file);
            });
          });
        };
  
        // Handle file upload
        await uploadSingle(req as any, res as any);
        const file = (req as any).file;
        const { id } = req.query as { id: string };
        const { name, description, ref, category, stock, price, discount, user } = req.body;
  
        if (!id) {
          return res.status(400).json({ message: 'Product ID is required' });
        }
  
        // Find the product by ID
        const product = await Product.findById(id);
        if (!product) {
          return res.status(404).json({ message: 'Product not found' });
        }
  
        let imageUrl = product.imageUrl;
  
        if (file) {
          // Delete the existing image from Cloudinary if present
          if (product.imageUrl) {
            const publicId = extractPublicId(product.imageUrl);
            if (publicId) {
              await cloudinary.uploader.destroy(`Products/${publicId}`);
            }
          }
  
          // Upload the new image to Cloudinary
          const bufferStream = new stream.PassThrough();
          bufferStream.end(file.buffer);
  
          const result = await new Promise<any>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { folder: 'Products' },
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
  
        // Prepare the updated data
        const updatedData: Partial<typeof product> = {};
        if (name) updatedData.name = name;
        if (description) updatedData.description = description;
        if (ref) updatedData.ref = ref;
        if (category) updatedData.category = category;
        if (stock) updatedData.stock = stock;
        if (price) updatedData.price = price;
        if (discount) updatedData.discount = discount;
        if (user) updatedData.user = user;
        if (imageUrl) updatedData.imageUrl = imageUrl;
  
        // Update the product
        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Failed to update product' });
        }
  
        res.status(200).json(updatedProduct);
      } catch (error) {
        console.error('Error in PUT handler:', error);
        res.status(500).json({ message: 'Error updating product' });
      }
      break;

    case "DELETE":
      try {
        const product = await Product.findById(id);
        if (!product) {
          return res.status(404).json({ message: "Product not found" });
        }

        if (product.imageUrl) {
          const publicId = extractPublicId(product.imageUrl);
          if (publicId) {
            await cloudinary.uploader.destroy(`Products/${publicId}`);
          }
        }

        await Product.findByIdAndDelete(id);

        res.status(200).json({ message: "Product deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting product" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};

export default handler;
