import { Brand } from "../models/brands.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addBrand = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const logo = req.file?.path;

  if (!name) {
    throw new ApiError(400, "Brand name is required");
  }

  const brand = await Brand.create({ name, logo });

  return res
    .status(201)
    .json(new ApiResponse(201, brand, "Brand added successfully"));
});

// Similar to cars: CRUD operations for Brands
export {
    addBrand
}
