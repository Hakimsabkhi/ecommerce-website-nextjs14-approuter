import mongoose, { Schema, Document,Model} from 'mongoose';
import { IUser } from './User'; // Import the IUser interface
export interface ICategory extends Document {
  name: string;
  imageUrl?: string;
  user: IUser | string; // Reference to a User document or User ID
  createdAt?: Date;
  updatedAt?: Date;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});



const Category: Model<ICategory> = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

export default Category;