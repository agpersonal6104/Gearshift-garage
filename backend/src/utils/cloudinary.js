import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET, // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localfilepath) => {
  try {
    console.log('in cloudinary')
    if (!localfilepath) {
      return null;
    }

    // we need url of this uploaded file
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    console.log("File uploaded on cloudinary successfully", response.url);
    // file has been successfully uploaded
    fs.unlinkSync(localfilepath)
    return response;
  } catch (e) {
    fs.unlinkSync(localfilepath); //removes the local file path
  }
};

export { uploadOnCloudinary };
