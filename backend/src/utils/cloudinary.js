import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_SECRET,
  api_secret: process.env.CLOUDINARY_API_KEY, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) {
      return null;
    }

    // we need url of this uploaded file
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    console.log("File uploaded on cloudinary successfully", response.url);
    // file has been successfully uploaded
    return response;
  } catch (e) {
    fs.unlinkSync(localfilepath); //removes the local file path
  }
};

export { uploadOnCloudinary };
