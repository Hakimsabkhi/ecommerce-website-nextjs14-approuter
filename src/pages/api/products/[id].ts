import type { NextApiRequest,NextApiResponse } from "next";
import connectToDatabase from '@/lib/db';
import Product from "@/models/Product";
import User from "@/models/User";
const handler = async (req:NextApiRequest,res:NextApiResponse)=>{
    await connectToDatabase();
    const {id}=req.query;
    switch(req.method){
        case 'GET':
            try{
                //FATCH THE PRODUCT BY ID AN POPULATE USE DATA IF NEEDED
                const product = await Product.findById(id).populate('user');
                if (product){
                    res.status(200).json(product);
                }else{
                    res.status(404).json({message:'Product Not found'});
                }
            }catch(error){
                res.status(500).json({message:'Error featching product'});
            }
            break;
        case 'PUT':
            try{

                const {userId, ...updateData} = req.body;
                //validate user existence if needed
                if(userId){
                    const user= await User.findById(userId);
                    if(!user){
                        res.status(400).json({message:'User not found'});
                        return;
                    }
                }
                const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
                if (updatedProduct) {
                  res.status(200).json(updatedProduct);
                } else {
                  res.status(404).json({ message: 'Product not found' });
                }
            }catch(error){
                res.status(400).json({message:'Error updateing product'})
            }
            break;


        case 'DELETE':
            try{
                //Delete the product by ID
                const result = await Product.findByIdAndDelete(id);
                if(result){
                    res.status(204).end();//nop content to return
                } else{
                    res.status(404).json({message:'Product not found'});
                }
            }catch(error){
                res.status(500).json({message:"Error deleting product"});
            }
            break;
        default:
            res.setHeader('Allow',['GET','PUT','DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
};
export default handler;