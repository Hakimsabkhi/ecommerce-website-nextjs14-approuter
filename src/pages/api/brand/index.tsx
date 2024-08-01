import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import Brand from '@/models/Brand';
import cloudinary from '@/lib/cloudinary';
import upload from '@/lib/multer'; // Adjust the path according to your project structure
import stream from 'stream';
import { promisify } from 'util';

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we will handle it manually
  },
};

const uploadFiles = promisify(upload.fields([{ name: 'image', maxCount: 1 }, { name: 'logo', maxCount: 1 }]));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  try {
    // Handle file uploads using multer
    await uploadFiles(req as any, res as any);

    switch (req.method) {
      case 'GET':
        try {
          const brands = await Brand.find({});
          res.status(200).json(brands);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching brands' });
        }
        break;

      case 'POST':
        try {
          const { name, place } = req.body;
          const imageFile = (req as any).files?.image?.[0];
          const logoFile = (req as any).files?.logo?.[0];

          if (!name || !place) {
            return res.status(400).json({ message: 'Name and place are required' });
          }

          const existingBrand = await Brand.findOne({ name });
          if (existingBrand) {
            return res.status(400).json({ message: 'Brand with this name already exists' });
          }

          let imageUrl = '';
          let logoUrl = '';

          // Handle image upload
          if (imageFile) {
            const imageBufferStream = new stream.PassThrough();
            imageBufferStream.end(imageFile.buffer);

            const imageResult = await new Promise<any>((resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'brands/images' },
                (error, result) => {
                  if (error) {
                    return reject(error);
                  }
                  resolve(result);
                }
              );

              imageBufferStream.pipe(uploadStream);
            });

            imageUrl = (imageResult as any).secure_url;
          }

          // Handle logo upload
          if (logoFile) {
            const logoBufferStream = new stream.PassThrough();
            logoBufferStream.end(logoFile.buffer);

            const logoResult = await new Promise<any>((resolve, reject) => {
              const uploadStream = cloudinary.uploader.upload_stream(
                { folder: 'brands/logos' },
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

          const newBrand = new Brand({ name, place, imageUrl, logoUrl });
          await newBrand.save();
          res.status(201).json(newBrand);
        } catch (error) {
          res.status(500).json({ message: 'Error creating brand' });
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
