import mongoose from "mongoose";

const setSchema = new mongoose.Schema({
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
    },
    distance: {
        type: Number
    },
    duration: {
        type: String
    }
});

const set = mongoose.model("set", setSchema);
export default set;