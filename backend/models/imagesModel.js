import mongoose, { Schema } from "mongoose";

const imageSchema = new Schema(
  {
    car_id: {
      type: String,
      ref: "Car",
      required: true,
    },
    resolution: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Image = mongoose.model("Image", imageSchema);
