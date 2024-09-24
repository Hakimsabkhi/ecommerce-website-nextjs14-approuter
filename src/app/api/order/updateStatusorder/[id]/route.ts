import { NextRequest, NextResponse } from "next/server"; // Use the new Next.js 13 API route types
import dbConnect from "@/lib/db";
import Order from "@/models/order";
import User from "@/models/User";
import { getToken } from "next-auth/jwt";


export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
  ) {
    await dbConnect();
    const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET});
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  //fatcg the user
  
      // Find the user by email
      const user = await User.findOne({ email:token.email});
  
      
      if (!user || user.role !== 'Admin' && user.role !== 'Consulter'&& user.role !== 'SuperAdmin') {
        return NextResponse.json({ error: 'Forbidden: Access is denied' }, { status: 404 });
      }
    try {
      // Handle form data
      const formData = await req.formData();
      const status = formData.get('status')as string;
       
       
      const id = params.id; // Get ID from params
  
      if (!id) {
        return NextResponse.json(
          { message: "ID  are required" },
          { status: 400 }
        );
      }
  
      const existingOrder = await Order.findById(id);
      if (!existingOrder) {
        return NextResponse.json(
          { message: "Order not found" },
          { status: 404 }
        );
      }
 
  
      
      // Update category with new values
      // Ensure proper type conversions and default values
      if (status !== undefined && status !== null) {
        existingOrder.orderStatus = status;
      }
  
  
      
      await existingOrder.save();
  
      return NextResponse.json(existingOrder, { status: 200 });
    } catch (error) {
      console.error(error); // Log error for debugging
      return NextResponse.json(
        { message: "Error updating product status", error },
        { status: 500 }
      );
    }
  }