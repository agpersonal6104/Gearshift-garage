import { asyncHandler } from "../utils/asyncHandler.js";
import { Car } from "../models/car.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const addCar = asyncHandler(async (req, res) => {
  const { name, brand, category, price, description } = req.body;
  const image = req.file?.path; // Image uploaded via multer

  if (!name || !brand || !category || !price || !image) {
    throw new ApiError(400, "All fields are required");
  }

  const car = await Car.create({ name, brand, category, price, description, image });

  return res
    .status(201)
    .json(new ApiResponse(201, car, "Car added successfully"));
});

const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find().populate("brand category");
  return res
    .status(200)
    .json(new ApiResponse(200, cars, "Cars fetched successfully"));
});

const getCarById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const car = await Car.findById(id).populate("brand category");

  if (!car) {
    throw new ApiError(404, "Car not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, car, "Car fetched successfully"));
});

const updateCar = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, brand, category, price, description } = req.body;
  const image = req.file?.path;

  const updatedCar = await Car.findByIdAndUpdate(
    id,
    { name, brand, category, price, description, ...(image && { image }) },
    { new: true }
  );

  if (!updatedCar) {
    throw new ApiError(404, "Car not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedCar, "Car updated successfully"));
});

const deleteCar = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Car.findByIdAndDelete(id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Car deleted successfully"));
});

export { addCar, getAllCars, getCarById, updateCar, deleteCar };
