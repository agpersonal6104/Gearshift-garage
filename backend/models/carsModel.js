import mongoose, { Schema } from "mongoose";
import { Brand } from "./brands.model.js";
import {Category} from "./categories.model.js"
const carSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: String,
    },
    specifications: {
      type: String,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand_id: {
      type: Schema.Types.ObjectId,
      ref: Brand,
    },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: Category,
    },
    images: [
      {
        type: String, //cloudinary
      },
    ],
  },
  { timestamps: true }
);

export const Car = mongoose.model("Car", carSchema);
