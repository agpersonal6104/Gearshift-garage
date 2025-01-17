import { Brand } from "../models/brands.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addBrand = asyncHandler(async (req, res) => {
  const { name, description, country_of_origin } = req.body;
  if (!name) {
    throw new ApiError(400, "Brand details are required");
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

// Similar to cars: CRUD operations for Brands
export { addBrand };
