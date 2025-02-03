import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  days: [{type: String, required: true}],
  workoutId: { type: mongoose.Types.ObjectId, required: true },
});

const exercise = mongoose.model("exercise", exerciseSchema);
export default exercise;
