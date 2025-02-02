import exercise from "../models/exercise.js";

export const getAllExercises = async (req, res) => {
  try {
    const { workoutId } = req.query;
    const exercises = await exercise.find({ workoutId });
    res.status(201).json({
      success: true,
      exercises,
    });
  } catch (err) {
    console.log("Error fetching all exercises:", err);
    res.status(500).json({
      success: false,
      message: "Error fetching exercises",
      error: err.message,
    });
  }
};

// export const getExerciseById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const currentTask = await task.findById(id);
//     res.status(200).json({
//       success: true,
//       task: currentTask,
//       message: "Task updated successfully",
//     });
//   } catch (err) {
//     console.log("Error getting task:", err);
//     res.status(500).json({
//       success: false,
//       message: "Error getting task",
//       error: err.message,
//     });
//   }
// };

export const createNewExercise = async (req, res) => {
  try {
    const { title, workoutId } = req.body;
    const newExercise = new exercise({
      title,
      workoutId,
    });
    await newExercise.save();
    const exercises = await exercise.find({ workoutId });

    res.status(201).json({
      success: true,
      exercise: newExercise,
      exercises,
    });
  } catch (err) {
    console.log("Error creating exercise:", err);
    res.status(500).json({
      success: false,
      message: "Error creating exercise",
      error: err.message,
    });
  }
};

export const updateExerciseById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDetails = req.body;
    const currentExercise = await exercise.findById(id);
    if (updatedDetails.title) {
      currentExercise.title = updatedDetails.title;
    }
    await currentExercise.save();
    const exercises = await exercise.find();
    res.status(200).json({
      success: true,
      exercises,
      message: "Exercise updated successfully",
    });
  } catch (err) {
    console.log("Error updating Exercise:", err);
    res.status(500).json({
      success: false,
      message: "Error updating Exercise",
      error: err.message,
    });
  }
};

export const deleteExerciseById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletingExercise = await exercise.findById(id);
    await deletingExercise.deleteOne();
    res.status(200).json({
      success: true,
      message: "Exercise removed",
    });
  } catch (err) {
    console.log("Error deleting Exercise:", err);
    res.status(500).json({
      success: false,
      message: "Error deleting Exercise",
      error: err.message,
    });
  }
};
