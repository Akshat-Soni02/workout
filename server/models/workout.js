import mongoose, { Schema } from "mongoose";

const workoutSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        exercises: [{
            type: Types.ObjectId
        }]
    },
    {
        timestamps: true
    }
);

const workout = mongoose.model("workout", workoutSchema);
export default workout;