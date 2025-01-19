import { Brand } from "../models/brands.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addBrand = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, description, country_of_origin } = req.body;
  if (!name) {
    throw new ApiError(400, "Brand details are required");
  }

  const existingBrand = await User.findOne({
    $or: [{ name }],
  });

  if (existingBrand) {
    throw new ApiError(409, "Brand already exists");
  }

  const logo = req.file?.path;

  if (!logo) {
    throw new ApiError(400, "Logo is required");
  }

  const brand = await Brand.create({
    name,
    logo,
    description,
    country_of_origin,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, brand, "Brand added successfully"));
});

const removeBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;

  // Validate brand name
  if (!name) {
    throw new ApiError(400, "Brand name is required");
  }

  // Check if the brand exists
  const brand = await Brand.findOne({ name });
  if (!brand) {
    throw new ApiError(404, "Brand not found");
  }

  // Delete the brand
  await brand.deleteOne({brand:brand});

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Brand removed successfully"));
});


// Similar to cars: CRUD operations for Brands
export { addBrand, removeBrand };
