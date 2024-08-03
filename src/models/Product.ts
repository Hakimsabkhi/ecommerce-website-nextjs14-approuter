import mongoose from 'mongoose';
import { IUser } from './User'; // Import the IUser interface
import { ICategory } from './Category';  
export interface IProduct extends Document {
  name: string;
  description: string;
  ref:string;
  price: number;
  imageUrl?: string;
  category: ICategory | string;
  stock: number;
  user: IUser | string; // Reference to a User document or User ID
  discount?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, // Updated to reference Category
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  ref: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  stock: Number,
  price: Number,
  discount: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  imageUrl: String,
});


export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
