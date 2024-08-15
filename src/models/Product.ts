import mongoose ,{Model}from 'mongoose';
import { IUser } from './User'; // Import the IUser interface
import { ICategory } from './Category';  
import { IBrand } from './Brand';
export interface IProduct extends Document {
  name: string;
  description: string;
  ref:string;
  price: number;
  imageUrl?: string;
  category: ICategory | string;//Reference to a category document or category ID
  brand: IBrand | string;//Reference to a brand document or brand ID 
  stock: number;
  user: IUser | string; // Reference to a User document or User ID
  discount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  ref: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand' },
  stock: Number,
  price: Number,
  discount: { type: Number},
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  imageUrl: String,
},{ timestamps: true });


const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
  export default Product