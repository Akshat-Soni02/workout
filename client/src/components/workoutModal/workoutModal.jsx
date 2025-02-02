import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/button/CustomButton.jsx";
import '../../pages/workoutPlans/WorkoutPlans.css';

const WorkoutModal = ({ workoutName, setWorkoutName, handleAddPlan, setShowModal }) => {
    const navigate = useNavigate();

    const handleSave = () => {
        handleAddPlan();
        //navigate("/editexercise");
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Add Workout Plan</h2>
                <input
                    type="text"
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    placeholder="Enter workout name"
                />
                <div className="modal-buttons">
                    <CustomButton onClick={handleSave}>Save</CustomButton>
                    <CustomButton onClick={() => setShowModal(false)}>Cancel</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default WorkoutModal;
