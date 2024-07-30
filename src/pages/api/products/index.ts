import type { NextApiRequest,NextApiResponse } from "next";
import connectToDatabase from '@/lib/db';
import Product from "@/models/Product";
import User from "@/models/User";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDatabase();
  
    switch (req.method) {
      case 'GET':
        try {
          const products = await Product.find({}).populate('user');
          res.status(200).json(products);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching products' });
        }
        break;
  
      case 'POST':
        try {
          const { userId, ...productData } = req.body;
  
          // Validate user existence
          
          const user = await User.findById(userId);
          console.log(userId);
          if (!user) {
            res.status(400).json({ message: 'User not found' });
            return;
          }
  
          const newProduct = new Product({ ...productData, user: userId });
          await newProduct.save();
          res.status(201).json(newProduct);
        } catch (error) {
          res.status(400).json({ message: 'Error creating product' });
        }
        break;
  
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
        break;
    }
  };
  
  export default handler;