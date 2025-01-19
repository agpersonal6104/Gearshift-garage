import { Category } from "../models/categories.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Add a new category
const addCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  // Validate input
  if (!name) {
    throw new ApiError(400, "Category name is required");
  }

  // Check for duplicate category
  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    throw new ApiError(409, "Category already exists");
  }

  // Create new category
  const category = await Category.create({ name, description });

  return res
    .status(201)
    .json(new ApiResponse(201, category, "Category added successfully"));
});

// Remove a category by name
const removeCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  // Validate category name
  if (!name) {
    throw new ApiError(400, "Category name is required");
  }

  // Check if the category exists
  const category = await Category.findOne({ name });
  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  // Delete the category
  await category.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Category removed successfully"));
});

const searchCategories = asyncHandler(async (req, res) => {
  const { query } = req.query;

  // Validate query
  if (!query) {
    throw new ApiError(400, "Search query is required");
  }

  // Search categories by name (case-insensitive)
  const categories = await Category.find({
    name: { $regex: query, $options: "i" },
  });

  if (categories.length === 0) {
    return res
      .status(404)
      .json(new ApiResponse(404, [], "No matching categories found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, categories, "Search results retrieved successfully"));
});

export { addCategory, removeCategory, searchCategories };
