// /app/api/order/route.ts

import { NextRequest, NextResponse } from "next/server";
import Order from "@/models/order"; // Adjust path to where your Order model is located
import  connectDB  from "@/lib/db"; // MongoDB connection utility
import User from "@/models/User";
import { getToken } from "next-auth/jwt";
// POST - Create a new order
export async function POST(req: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();
    const body = await req.json();
    const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET});
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const user = await User.findOne({ email:token.email});
    // Parse the request body
    if (!user){
        return NextResponse.json({ success: false, message: "Missing required connect" }, { status: 505 });
    }

    const { address, order, paymentMethod } = body;
    console.log( paymentMethod)
    // Validate required fields
    if (!user || !address || !order || !paymentMethod) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }
   console.log(order)
   const py={
    status:paymentMethod,
    amountPaid:order.totalPrice
   }
   const items={
    ref:order.items.ref,
    name:order.items.name,
    quantity:order.items.quantity,
    image:order.items.imageUrl,
    price:order.items.price,
   }
    // Create a new order
    const newOrder = new Order({
      user,
      address,
      orderItems:items,
      paymentMethod,
      totalorder:py.amountPaid,
      ref: `ORDER-${Math.random().toString(36).substring(2, 10).toUpperCase()}`, // Example ref generation
      orderStatus: 'Processing',
    });

    // Save the order to the database
     const savedOrder = await newOrder.save();

    // Return success response
    return NextResponse.json({ success: true, order: savedOrder }, { status: 201 });
  }  catch (error) {
    // Cast error as Error type to access its message property
    const err = error as Error;

    console.error("Error creating order:", err.message);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
