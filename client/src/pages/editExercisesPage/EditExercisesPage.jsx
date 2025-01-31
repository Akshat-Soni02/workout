import React, { useState } from "react";
import EditExerciseCard from "../../components/editExerciseCard/EditExerciseCard.jsx";
import { Heading } from "../../components/customTypo/CustomTypo.jsx";
import "../workoutPlans/WorkoutPlans.css";
import CustomButton from "../../components/button/CustomButton.jsx";
import EditExerciseModal from "../../components/editExerciseModal/EditExerciseModal.jsx";

const EditExercisesPage = () => {
    const [plans, setPlans] = useState([
        { sets: 3, reps: 4, selectedDays: ["Mon", "Fri", "Tue"] },
        { sets: 2, reps: 4, selectedDays: ["Mon", "Wed", "Fri"] },
        { sets: 3, reps: 2, selectedDays: ["Mon", "Tue", "Sat"] },
        { sets: 3, reps: 4, selectedDays: ["Wed", "Sat", "Sun"] }
    ]);
    const [showModal, setShowModal] = useState(false);

    const updatePlan = (index, updatedPlan) => {
        setPlans((prevPlans) => prevPlans.map((plan, i) => (i === index ? updatedPlan : plan)));
    };

    const addExercise = (newExercise) => {
        setPlans([...plans, newExercise]);
    };

    return (
        <div className="workoutpage">
            <Heading>{"Edit Exercises "}</Heading>
            <div className="workoutplans">
                {plans.map((plan, index) => (
                    <EditExerciseCard
                        key={index}
                        plan={plan}
                        id={index + 1}
                        onUpdate={(updatedPlan) => updatePlan(index, updatedPlan)}
                    />
                ))}
            </div>
            <CustomButton sx={{ width: "30vw", fontSize: "20px" }} onClick={() => setShowModal(true)}>
                {"Add Exercise"}
            </CustomButton>

            {showModal && (
                <EditExerciseModal setShowModal={setShowModal} onAddExercise={addExercise} />
            )}
        </div>
    );
};

export default EditExercisesPage;
