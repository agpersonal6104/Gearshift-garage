import mongoose, { Schema } from "mongoose";

const brandSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    logo: {
      type: String,
    },
    description: {
      type: String,
    },
    country_of_origin: {
      type: String,
    },
    founded:{
      type: Date,
    }
  },
  { timestamps: true }
);

export const Brand = mongoose.model("Brand", brandSchema);
