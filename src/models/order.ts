import mongoose, { Document, Model, Schema } from 'mongoose';
import { IUser } from './User';
import { IAddress } from './Address';
import crypto from 'crypto';  // You can use this for generating random strings

export interface IOrder extends Document {
  _id: string;
  ref:string;
  user: IUser | string;
  address: IAddress| string;
  orderItems: Array<{
    product: Schema.Types.ObjectId;
    name: string;
    quantity: number;  // Changed to number
    image: string;
    price: number;     // Changed to number
  }>;
  paymentInfo: {
    id: string;
    status: string;
    taxPaid: number;
    amountPaid: number;
  };
  orderStatus: string;
  createdAt: Date;
  updatedAt: Date;
}



const OrderSchema : Schema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ref:{type: String},
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' },
    orderItems: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
          },
          name: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,  // Changed to Number
            required: true,
          },
          image: {
            type: String,
            required: true,
          },
          price: {
            type: Number,  // Changed to Number
            required: true,
          },
        },
      ],
      paymentMethod: { // Optional field for payment method
        type: String,
      },
      total: {
        type: Number,
        required: true,
      },
      orderStatus: {
        type: String,
        default: 'Processing',
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },

});
OrderSchema.pre('save', function (next) {
    const order = this as IOrder;
  
    // Generate a random 8-character ref if not provided
    if (!order.ref) {
      const randomRef = crypto.randomBytes(4).toString('hex');  // 8-character hex string
      order.ref = `ORDER-${randomRef}`;
    }
  
    next();
  });
const Order: Model<IOrder> = mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;
