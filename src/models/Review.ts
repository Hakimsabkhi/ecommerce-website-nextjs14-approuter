import mongoose, { Schema, Document, Model } from "mongoose";


export interface IReview extends Document {
product:string;
  rating: number;
  text?: string;
  email: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ReviewSchema: Schema = new Schema(
  {
    product:{type:String,require:true},
    rating: { type: Number, required: true },
    text: { type: String, required: true },
    email: { type: String, require: true },
    name: { type: String, require: true },
  },
  { timestamps: true }
);

const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);

export default Review;
