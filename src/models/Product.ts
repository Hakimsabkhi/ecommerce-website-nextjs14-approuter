import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User'; // Import the IUser interface
import { ICategory } from './Category';  
export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  category: ICategory | string;
  stock: number;
  user: IUser | string; // Reference to a User document or User ID
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }, // Updated to reference Category
  stock: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
