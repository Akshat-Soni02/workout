import React, { useState } from "react";
import CustomButton from "../../components/button/CustomButton.jsx";
import EditExerciseCard from "../../components/editExerciseCard/EditExerciseCard.jsx";

const EditExerciseModal = ({ setShowModal, onAddExercise }) => {
    const [exerciseName, setExerciseName] = useState("");
    const [exercisePlan, setExercisePlan] = useState({ sets: 3, reps: 4, selectedDays: [] });

    const handleSave = () => {
        if (exerciseName.trim()) {
            onAddExercise({ name: exerciseName, ...exercisePlan });
            setShowModal(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add Exercise</h2>
                <input
                    type="text"
                    value={exerciseName}
                    onChange={(e) => setExerciseName(e.target.value)}
                    placeholder="Enter exercise name"
                />
                <EditExerciseCard plan={exercisePlan} onUpdate={setExercisePlan} />
                <div className="modal-buttons">
                    <CustomButton onClick={handleSave}>Save</CustomButton>
                    <CustomButton onClick={() => setShowModal(false)}>Cancel</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default EditExerciseModal;
