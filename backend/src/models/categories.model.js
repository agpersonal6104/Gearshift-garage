import mongoose, { Schema } from "mongoose";

const carCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true,
      index:true
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", carCategorySchema);
