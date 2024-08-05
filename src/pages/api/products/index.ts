import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/db";
import Products from "@/models/Product";
import cloudinary from "@/lib/cloudinary";
import upload from "@/lib/multer";
import stream from "stream";
import { promisify } from "util";
import User from "@/models/User";
import Category from "@/models/Category";
export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we will handle it manually
  },
};

const uploadSingle = promisify(upload.single('image'));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  try {
    await uploadSingle(req as any, res as any);
    switch (req.method) {
      case 'GET':
        try {
          await User.find();
          await Category.find();
          const products = await  Products.find({}).populate("user").populate("category");
          ;
          res.status(200).json(products);
        } catch (error) {
          console.error('Error fetching products:', error);
          res.status(500).json({ message: 'Error fetching products', error });
        }
        break;
      


     case 'POST':
          try {
            
            const { name,description,ref,category,stock,price,discount,user} = req.body;
            const file = (req as any).file;
  
            if (!name || !description || !ref || !category || !stock || !price || !user) {
              return res.status(400).json({ message: 'All required fields must be filled' });
            }
            
            const existingCategory = await Products.findOne({ ref });
            if (existingCategory) {
              return res.status(400).json({ message: 'Product with this name already exists' });
            }
  
            let imageUrl = '';
           if (file) {
              
                // Use a buffer stream to convert the file buffer into a readable stream
                const bufferStream = new stream.PassThrough();
                bufferStream.end(file.buffer);
                //bufferStream.pipe(uploadStream);
    
                // Wait for the upload stream to finish and get the result
                const result = await new Promise<any>((resolve, reject) => {
                  const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: 'Products' },
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
          
            const newProduct = new Products({ name, description,ref,category,stock,price,discount,user, imageUrl });
            await newProduct.save();
            res.status(201).json(newProduct);
          } catch (error) {
            res.status(500).json({ message: 'Error creating product' });
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
