import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db';
import Category from '@/models/Category';
import Product from '@/models/Product'; // Import Product model

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();

  const { id } = req.query; // Get `id` from query parameters

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: 'Invalid or missing category ID' });
  }

  switch (req.method) {
    case 'GET':
      try {
        // Fetch a single category by ID
        const category = await Category.findById(id);
        if (!category) {
          return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Error fetching category' });
      }
      break;

    case 'PUT':
      try {
        // Update an existing category by ID
        const { name } = req.body;
        if (!name) {
          return res.status(400).json({ message: 'Name is required' });
        }

        // Optional: Sanitize `name` here

        const updatedCategory = await Category.findByIdAndUpdate(
          id,
          { name },
          { new: true } // Return the updated document
        );
        if (!updatedCategory) {
          return res.status(404).json({ message: 'Category not found' });
        }

        res.status(200).json(updatedCategory);
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Error updating category' });
      }
      break;

    case 'DELETE':
      try {
        // Check for associated products
        const products = await Product.find({ category: id });
        console.log(products);
        if (products.length > 0) {
          return res.status(400).json({ message: 'Cannot delete category with associated products' });
        }

        // Delete the category
        const category = await Category.findById(id);
        if (!category) {
          return res.status(404).json({ message: 'Category not found' });
        }

        await Category.findByIdAndDelete(id);
        res.status(200).json({ message: 'Category deleted successfully' });
      } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Error deleting category' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};

export default handler;
