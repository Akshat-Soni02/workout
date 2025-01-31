import React, { useState } from "react";
import WorkoutCard from "../../components/workoutCard/WorkoutCard";
import "./WorkoutPlans.css";
import { Heading } from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import WorkoutModal from "../../components/workoutModal/workoutModal.jsx"

const WorkoutPage = () => {
    const [plans, setPlans] = useState([
        { name: "Chest", exercises: ["item1", "item2", "item3", "item4"] },
        { name: "Back", exercises: ["item1", "item2", "item3", "item4"] },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [workoutName, setWorkoutName] = useState("");

    const handleAddPlan = () => {
        if (workoutName.trim()) {
            setPlans([...plans, { name: workoutName, exercises: [] }]);
            setWorkoutName("");
            setShowModal(false);
        }
    };

    return (
        <div className="workoutpage">
            <Heading>{"All Workout Plans"}</Heading>
            <div className="workoutplans">
                {plans.map((plan, index) => (
                    <WorkoutCard
                        key={index}
                        id={index + 1}
                        name={plan.name}
                        exercises={plan.exercises}
                        btnText="Edit"
                    />
                ))}
            </div>
            <CustomButton sx={{ width: "30vw", fontSize: "20px" }} onClick={() => setShowModal(true)}>
                {"Add Workout Plan"}
            </CustomButton>

            {showModal && (
                <WorkoutModal 
                    workoutName={workoutName}
                    setWorkoutName={setWorkoutName}
                    handleAddPlan={handleAddPlan}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default WorkoutPage;
