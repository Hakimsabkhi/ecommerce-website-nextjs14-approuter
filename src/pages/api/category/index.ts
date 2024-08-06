import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import Category from '@/models/Category';
//import { v2 as cloudinary } from 'cloudinary';
import cloudinary from '@/lib/cloudinary';
import upload from '@/lib/multer'; // Adjust the path according to your project structure
import stream from 'stream';
import { promisify } from 'util';
import User from '@/models/User';

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we will handle it manually
  },
};

const uploadFiles = promisify(upload.fields([{ name: 'image', maxCount: 1 }, { name: 'logo', maxCount: 1 }]));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  // Handle file upload using multer
  try {
    await uploadFiles(req as any, res as any);

    switch (req.method) {
      case 'GET':
        try {
          await User.find();
          const categories = await Category.find({}).populate("user");
          res.status(200).json(categories);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching categories' });
        }
        break;

      case 'POST':
        try {
          const { name,user } = req.body;
          const imageFile = (req as any).files?.image?.[0];
          const logoFile = (req as any).files?.logo?.[0];


          if (!name || !user) {
            return res.status(400).json({ message: 'Name is required' });
          }

          const existingCategory = await Category.findOne({ name });
          if (existingCategory) {
            return res.status(400).json({ message: 'Category with this name already exists' });
          }

          
          let imageUrl = '';
          let logoUrl = '';
         if (imageFile) {
            
              // Use a buffer stream to convert the file buffer into a readable stream
              const bufferStream = new stream.PassThrough();
              bufferStream.end(imageFile.buffer);
              //bufferStream.pipe(uploadStream);
  
              // Wait for the upload stream to finish and get the result
              const result = await new Promise<any>((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                  { folder: 'categories' },
                  (error, result) => {
                    if (error) {
                      return reject(error);
                    }
                    resolve(result);
                  }
                );
  
                bufferStream.pipe(uploadStream);
              });
              
              
              imageUrl = (result as any).secure_url; // Extract the secure_url from the result
          }
          if (logoFile) {
            const logoBufferStream = new stream.PassThrough();
            logoBufferStream.end(logoFile.buffer);

            const logoResult = await new Promise<any>((resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'categories/logos' },
                (error, result) => {
                  if (error) {
                    return reject(error);
                  }
                  resolve(result);
                }
              );

              logoBufferStream.pipe(uploadStream);
            });

            logoUrl = (logoResult as any).secure_url;
          }
          const newCategory = new Category({ name,logoUrl, imageUrl,user });
          await newCategory.save();
          res.status(201).json(newCategory);
        } catch (error) {
          res.status(500).json({ message: 'Error creating category' });
        }
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  } catch (error) {
    res.status(500).json({ message: 'Error handling request' });
  }
};

export default handler;
