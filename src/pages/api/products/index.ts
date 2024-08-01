import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db'; // Adjust path as needed
import Product from '@/models/Product'; // Adjust path as needed
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import cloudinary from '@/lib/cloudinary'; // Adjust path as needed

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Configure multer as needed

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we will handle it manually
  },
};

// Helper function to process form-data
const processFormData = async (req: NextApiRequest) => {
  return new Promise((resolve, reject) => {
    const fields: any = {};
    const files: any[] = [];

    const busboy = require('busboy');
    const bb = busboy({ headers: req.headers });

    bb.on('file', (name, file, info) => {
      const { filename, encoding, mimeType } = info;
      const saveTo = path.join('uploads', path.basename(filename));
      file.pipe(fs.createWriteStream(saveTo));
      file.on('end', () => {
        files.push({ path: saveTo, filename, encoding, mimeType });
      });
    });

    bb.on('field', (name, value) => {
      fields[name] = value;
    });

    bb.on('finish', () => {
      resolve({ fields, files });
    });

    bb.on('error', (error) => {
      reject(error);
    });

    req.pipe(bb);
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  try {
    switch (req.method) {
      case 'GET':
        try {
          const products = await Product.find({}).populate('category').populate('user');
          res.status(200).json(products);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching products', error });
        }
        break;

      case 'POST':
        try {
          const { fields, files } = await processFormData(req);

          // Handle file uploads to Cloudinary or another service
          const imageUrls = await Promise.all(files.map(async (file: any) => {
            const result = await cloudinary.uploader.upload(file.path);
            fs.unlinkSync(file.path); // Clean up the file after upload
            return result.secure_url;
          }));

          // Prepare product data with image URLs
          const productData = {
            ...fields,
            imageUrl: imageUrls,
          };

          // Create a new product instance and save it to the database
          const product = new Product(productData);
          await product.save();

          // Respond with the created product
          res.status(201).json(product);
        } catch (error) {
          console.error('Error creating product:', error);
          res.status(500).json({ error: 'Failed to create product' });
        }
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Internal Server Error:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

export default handler;
