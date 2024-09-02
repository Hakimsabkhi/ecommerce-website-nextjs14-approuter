import mongoose, { Schema, Document, Model } from "mongoose";
import {IUser} from "./User";


export interface IReview extends Document {
product:string;
  rating: number;
  text?: string;
  email: string;
  name: string;
  reply:string;
  user: IUser | string;
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
    reply:{type:String,},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Review: Model<IReview> =
  mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);

export default Review;
