import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import Category from '@/models/Category';


  const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDatabase();
    switch (req.method) {
        case 'GET':
          try {
            // Fetch all categories
            const categories = await Category.find({});
            res.status(200).json(categories);
          } catch (error) {
            res.status(500).json({ message: 'Error fetching categories' });
          }
          break;
    
        case 'POST':
          try {
            // Create a new category
            const { name } = req.body;
            if (!name) {
              return res.status(400).json({ message: 'Name is required' });
            }
            //check if the category already exists
            const existingCategory =await Category.findOne({name});
            if (existingCategory){
              return res.status(400).json({ message: 'Category with this name already exists' });
            }
            const newCategory = new Category({ name });
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
  };
  
  export default handler;