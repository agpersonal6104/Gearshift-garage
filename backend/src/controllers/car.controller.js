import { Car } from "../models/cars.model.js";
import { Brand } from "../models/brands.model.js";
import { Category } from "../models/categories.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Add a new car
const addCar = asyncHandler(async (req, res) => {
  const { name, description, specifications, year, price, brand_name, category_name } = req.body;
  // Find brand by name
  const brand = await Brand.findOne({ name: brand_name });
  if (!brand) {
    throw new ApiError(404, "Brand not found");
  }

  // Find category by name
  const category = await Category.findOne({ name: category_name });
  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  // Extract brand_id and category_id
  const brand_id = brand._id;
  const category_id = category._id;

  // Validate required fields
  if (!name || !year || !price || !brand_id || !category_id) {
    throw new ApiError(400, "All required fields must be filled");
  }

  // Collect image paths
  const images = req.files?.map((file) => file.path) || [];

  // Create the car
  const car = await Car.create({
    name,
    description,
    specifications,
    year,
    price,
    brand_id,
    category_id,
    images,
  });
  return res.status(201).json(new ApiResponse(201, car, "Car added successfully"));
});

// Get all cars
const getCars = asyncHandler(async (req, res) => {
  const cars = await Car.find()
    .populate("brand_id", "name") // Populate brand name
    .populate("category_id", "name"); // Populate category name

  return res
    .status(200)
    .json(new ApiResponse(200, cars, "Cars retrieved successfully"));
});

// Get a single car by ID
const getCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const car = await Car.findById(id)
    .populate("brand_id", "name")
    .populate("category_id", "name");

  if (!car) {
    throw new ApiError(404, "Car not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, car, "Car details retrieved successfully"));
});

// Update a car
const updateCar = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const { brand_name, category_name, ...updates } = req.body;

  const car = await Car.findById(id);
  if (!car) {
    throw new ApiError(404, "Car not found");
  }

  // Update brand and category if names are provided
  if (brand_name) {
    const brand = await Brand.findOne({ name: brand_name });
    if (!brand) {
      throw new ApiError(404, "Brand not found");
    }
    updates.brand_id = brand._id;
  }

  if (category_name) {
    const category = await Category.findOne({ name: category_name });
    if (!category) {
      throw new ApiError(404, "Category not found");
    }
    updates.category_id = category._id;
  }

  if (req.files?.length > 0) {
    updates.images = req.files.map((file) => file.path);
  }

  Object.assign(car, updates);
  await car.save();

  return res
    .status(200)
    .json(new ApiResponse(200, car, "Car updated successfully"));
});

// Delete a car
const deleteCar = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const car = await Car.findOne({ name });

  if (!car) {
    throw new ApiError(404, "Car not found");
  }

  await car.deleteOne();

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Car deleted successfully"));
});


export { addCar, getCars, getCarById, updateCar, deleteCar };
