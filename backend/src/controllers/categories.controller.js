import { Category } from "../models/categories.model.js";

const addCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "Category name is required");
  }

  const category = await Category.create({ name });

  return res
    .status(201)
    .json(new ApiResponse(201, category, "Category added successfully"));
});

// Similar to cars: CRUD operations for Categories
