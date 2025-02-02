import React, { useState } from "react";
import CustomButton from "../../components/button/CustomButton.jsx";
import { EditSetsAndReps } from "../numberField/NumberField.jsx";
import MultiDaySelector from "../days/DaySelector.jsx";

const EditExerciseModal = ({ setShowModal, onAddExercise }) => {
    const [exerciseName, setExerciseName] = useState("");
    const [exercisePlan, setExercisePlan] = useState({sets: 3, reps: 4, selectedDays: [] });

    // Function to handle updates in the exercise plan
    const handlePlanChange = (field, value) => {
        setExercisePlan((prev) => ({ ...prev, [field]: value }));
    };

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
                <EditSetsAndReps 
                    label="Total Sets" 
                    initialValue={exercisePlan.sets} 
                    onChange={(value) => handlePlanChange("sets", value)} 
                />
                <EditSetsAndReps 
                    label="Total Reps" 
                    initialValue={exercisePlan.reps} 
                    onChange={(value) => handlePlanChange("reps", value)} 
                />
                <MultiDaySelector 
                    selectedDays={exercisePlan.selectedDays} 
                    onSelectionChange={(value) => handlePlanChange("selectedDays", value)} 
                />
                <div className="modal-buttons">
                    <CustomButton onClick={handleSave}>Save</CustomButton>
                    <CustomButton onClick={() => setShowModal(false)}>Cancel</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default EditExerciseModal;
