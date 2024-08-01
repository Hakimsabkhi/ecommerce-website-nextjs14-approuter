import mongoose, { Schema, Document,Model} from 'mongoose';

export interface ICategory extends Document {
  name: string;
  imageUrl?: string;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
});



const Category: Model<ICategory> = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

export default Category;