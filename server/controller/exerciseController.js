import workout from "../models/exercise.js"

export const createWorkout = async (req, res, next) => {
    try {
        const {title, exercises} = req.body;
        const newWorkout = new workout({
            title,
            exercises
        });
        await newWorkout.save();
        const data = await workout.find();
        res.status(201).json({
            success: "true",
            
        })       
    } catch (error) {
        console.log("error creating exercise", error);
        res.status(500).json({
            success: "false",
            message: "error creating new workout",
            error: error
        });
    }


}