import { NextRequest, NextResponse } from "next/server"; // Use the new Next.js 13 API route types
import dbConnect from "@/lib/db";
import Product from "@/models/Product";
import cloudinary from "@/lib/cloudinary";
import upload from "@/lib/multer";
import stream from "stream";
import User from "@/models/User";
import Category from "@/models/Category";
import Brand from "@/models/Brand";
import { getToken } from "next-auth/jwt";



const extractPublicId = (url: string): string => {
  // Match the public ID from the URL
  const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);

  // If the format includes folders, split and get the last part
  if (matches) {
    return matches[1];
  }

  // Handle cases with folder paths
  const segments = url.split("/");
  const lastSegment = segments.pop();
  return lastSegment ? lastSegment.split(".")[0] : "";
};

const uploadSingle = (req: any, res: any) => {
  return new Promise((resolve, reject) => {
    upload.single('image')(req, res, (err: any) => {
      if (err) return reject(err);
      resolve(req.file);
    });
  });
};

// Handler for GET requests
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params; // Get `id` from params

    if (!id) {
      return new NextResponse(JSON.stringify({ message: "Invalid or missing product ID" }), { status: 400 });
    }
    await User.find();
    await Category.find();
    await Brand.find();
    const product = await Product.findById(id)
      .populate("user")
      .populate("category")
      .populate("brand");

    if (!product) {
      return new NextResponse(JSON.stringify({ message: "Product not found" }), { status: 404 });
    }

    return new NextResponse(JSON.stringify(product), { status: 200 });

  } catch (error) {
    console.error("Error fetching product:", error);
    return new NextResponse(JSON.stringify({ message: "Error fetching product" }), { status: 500 });
  }
}

// Handler for PUT requests


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

    
    if (!user || user.role !== 'Admin' && user.role !== 'Rédacteur') {
      return NextResponse.json({ error: 'Forbidden: Access is denied' }, { status: 404 });
    }
  try {
    // Handle form data
    const formData = await req.formData();
    const name = formData.get('name')as string;
      const description = formData.get('description')as string;
      const ref = formData.get('ref')as string;
      const category = formData.get('category')as string;
      const brand = formData.get('brand')as string;
      const stock = formData.get('stock');
      const price = formData.get('price');
      const discount = formData.get('discount');
      const user = formData.get('user') as string;
    
    const imageFile = formData.get("image") as File | null;
    const id = params.id; // Get ID from params

    if (!id) {
      return NextResponse.json(
        { message: "ID  are required" },
        { status: 400 }
      );
    }

    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 }
      );
    }

   

    // Initialize URLs with existing values
    let imageUrl = existingProduct.imageUrl;
    

    // Handle image file upload
    if (imageFile) {
      if (existingProduct.imageUrl) {
        const publicId = extractPublicId(existingProduct.imageUrl);
        if (publicId) {
          
          
          await cloudinary.uploader.destroy('Products/' + publicId);
        }
      }

      const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
      const imageStream = new stream.PassThrough();
      imageStream.end(imageBuffer);

      const { secure_url: newImageUrl } = await new Promise<any>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "Products" ,
              format: 'webp' 
            },
            (error, result) => {
              if (error)
                return reject(
                  new Error(`Image upload failed: ${error.message}`)
                );
              resolve(result);
            }
          );
          imageStream.pipe(uploadStream);
        }
      );

      imageUrl = newImageUrl; // Update imageUrl with the uploaded URL
    }

    
    // Update category with new values
    // Ensure proper type conversions and default values
    if (name !== undefined && name !== null) {
      existingProduct.name = name;
    }
    if (description !== undefined && description !== null) {
      existingProduct.description = description;
    }
    if (ref !== undefined && ref !== null) {
      existingProduct.ref = ref;
    }
    if (category !== undefined && category !== null) {
      existingProduct.category = category;
    }
    if (brand !== undefined && brand !== null) {
      existingProduct.brand = brand;
    }
    if (stock !== undefined && stock !== null && !isNaN(Number(stock))) {
      existingProduct.stock = parseInt(stock as string, 10);
    }
    if (price !== undefined && price !== null && !isNaN(Number(price))) {
      existingProduct.price = parseFloat(price as string);
    }
    if (discount !== undefined && discount !== null && !isNaN(Number(discount))) {
      existingProduct.discount =  Number(discount);
    }
   
    if (imageUrl !== undefined && imageUrl !== null) {
      existingProduct.imageUrl = imageUrl;
    }
    
    // Optional: Update the updatedAt field if adding new information
    existingProduct.updatedAt = new Date();
    

    existingProduct.user = user;
    await existingProduct.save();

    return NextResponse.json(existingProduct, { status: 200 });
  } catch (error) {
    console.error(error); // Log error for debugging
    return NextResponse.json(
      { message: "Error updating product", error },
      { status: 500 }
    );
  }
}

  export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    await dbConnect();
    const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET});
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  //fatcg the user
  
      // Find the user by email
      const user = await User.findOne({ email:token.email});
  
      
      if (!user || user.role !== 'Admin' && user.role !== 'Rédacteur') {
        return NextResponse.json({ error: 'Forbidden: Access is denied' }, { status: 404 });
      }
    try {
      const { id } = params;
  
      // Find the product by ID
      const product = await Product.findById(id);
      if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }
  
      // If the product has an associated image, delete it from Cloudinary
      if (product.imageUrl) {
        const publicId = extractPublicId(product.imageUrl);
        if (publicId) {
          await cloudinary.uploader.destroy(`Products/${publicId}`);
        }
      }
  
      // Delete the product from the database
      await Product.findByIdAndDelete(id);
  
      return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Error deleting product' }, { status: 500 });
    }
}