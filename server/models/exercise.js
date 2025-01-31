import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sets: {
      type: Types.ObjectId,
    }
  }
);

const exercise = mongoose.model("exercise", exerciseSchema);
export default exercise;
