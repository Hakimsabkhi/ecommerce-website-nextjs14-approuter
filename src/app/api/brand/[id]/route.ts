import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Brand from "@/models/Brand"; // Import Brand model
import cloudinary from "@/lib/cloudinary";
import upload from "@/lib/multer"; // Adjust the path according to your project structure
import stream, { Readable } from "stream";
import { promisify } from "util";

// Middleware function for uploading files
const uploadFiles = promisify(
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "logo", maxCount: 1 },
  ])
);

// Utility function to extract public ID from the image URL
const extractPublicId = (url: string): string => {
  const matches = url.match(/\/([^\/]+)\.(jpg|jpeg|png|gif|webp)$/);
  if (matches) {
    return matches[1];
  }
  const segments = url.split("/");
  const lastSegment = segments.pop();
  return lastSegment ? lastSegment.split(".")[0] : "";
};
const fileToBuffer = async (file: File): Promise<Buffer> => {
  return new Promise<Buffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(Buffer.from(reader.result as ArrayBuffer));
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};

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
    const brand = await Brand.findById(id);
    if (!brand) {
      return NextResponse.json({ message: "Brand not found" }, { status: 404 });
    }
    return NextResponse.json(brand, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching brand" },
      { status: 500 }
    );
  }
}

// PUT function to handle PUT requests
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectToDatabase();

  try {
    // Handle form data
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const place = formData.get("place") as string;
    const imageFile = formData.get("image") as File | null;
    const logoFile = formData.get("logo") as File | null;

    const id = params.id; // Get ID from params
    console.log("barnd id:", id);
    if (!id) {
      return NextResponse.json(
        { message: "ID  are required" },
        { status: 400 }
      );
    }

    const existingBrand = await Brand.findById(id);
    if (!existingBrand) {
      return NextResponse.json({ message: "Brand not found" }, { status: 404 });
    }

    if (existingBrand.name !== name) {
      const duplicatebrand = await Brand.findOne({ name });
      if (duplicatebrand) {
        return NextResponse.json(
          { message: "Brand with this name already exists" },
          { status: 400 }
        );
      }
    }

    // Initialize URLs with existing values
    let imageUrl = existingBrand.imageUrl;
    let logoUrl = existingBrand.logoUrl;

    // Handle image file upload
    if (imageFile) {
      const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
      const imageStream = new stream.PassThrough();
      imageStream.end(imageBuffer);

      const { secure_url: newImageUrl } = await new Promise<any>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "brands/images" },
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

    // Handle logo file upload
    if (logoFile) {
      const logoBuffer = Buffer.from(await logoFile.arrayBuffer());
      const logoStream = new stream.PassThrough();
      logoStream.end(logoBuffer);

      const { secure_url: newLogoUrl } = await new Promise<any>(
        (resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            { folder: "brands/logos" },
            (error, result) => {
              if (error)
                return reject(
                  new Error(`Logo upload failed: ${error.message}`)
                );
              resolve(result);
            }
          );
          logoStream.pipe(uploadStream);
        }
      );

      logoUrl = newLogoUrl; // Update logoUrl with the uploaded URL
    }

    // Update category with new values
    existingBrand.name = name;
    existingBrand.logoUrl = logoUrl;
    existingBrand.imageUrl = imageUrl;
    existingBrand.place = place;
    await existingBrand.save();

    return NextResponse.json(existingBrand, { status: 200 });
  } catch (error) {
    console.error(error); // Log error for debugging
    return NextResponse.json(
      { message: "Error updating brand", error },
      { status: 500 }
    );
  }
}

// DELETE function to handle DELETE requests
export async function DELETE(
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
    const brand = await Brand.findById(id);
    if (!brand) {
      return NextResponse.json({ message: "Brand not found" }, { status: 404 });
    }

    if (brand.imageUrl) {
      const publicId = extractPublicId(brand.imageUrl);
      if (publicId) {
        await cloudinary.uploader.destroy(`brands/${publicId}`);
      }
    }

    if (brand.logoUrl) {
      const publicId = extractPublicId(brand.logoUrl);
      if (publicId) {
        await cloudinary.uploader.destroy(`brands/${publicId}`);
      }
    }

    await Brand.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Brand deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error deleting brand" },
      { status: 500 }
    );
  }
}
