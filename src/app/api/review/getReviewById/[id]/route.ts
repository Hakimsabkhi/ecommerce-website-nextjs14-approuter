import connectToDatabase from "@/lib/db";
import Review from "@/models/Review";
import { NextRequest, NextResponse } from "next/server";

// GET function to handle GET requests
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
  ) {
    await connectToDatabase();
  
    const { id } = params;
  
    if (!id) {
      return NextResponse.json(
        { message: "Invalid or missing brand ID" },
        { status: 400 }
      );
    }
  
    try {
      const review = await Review.findById(id);
      if (!review) {
        return NextResponse.json({ message: "Review not found" }, { status: 404 });
      }
      return NextResponse.json(review, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Error fetching review" },
        { status: 500 }
      );
    }
  }
  