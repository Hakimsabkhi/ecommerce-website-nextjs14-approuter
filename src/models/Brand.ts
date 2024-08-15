import mongoose, { Schema, Document,Model} from 'mongoose';

export interface IBrand extends Document {
  name: string;
  place:string;
  logoUrl?:string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const BrandSchema: Schema = new Schema({
  name: { type: String, required: true },
  place:{type: String, required: true },
  logoUrl: { type: String },
  imageUrl: { type: String },
},{ timestamps: true });



const Brand: Model<IBrand> = mongoose.models.Brand || mongoose.model<IBrand>('Brand', BrandSchema);

export default Brand;