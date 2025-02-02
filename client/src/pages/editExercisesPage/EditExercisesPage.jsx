import React, { useState } from "react";
import EditExerciseCard from "../../components/editExerciseCard/EditExerciseCard.jsx";
import { Heading } from "../../components/customTypo/CustomTypo.jsx";
import "../workoutPlans/WorkoutPlans.css";
import CustomButton from "../../components/button/CustomButton.jsx";
import EditExerciseModal from "../../components/editExerciseModal/EditExerciseModal.jsx";
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";

const EditExercisesPage = () => {
    const [plans, setPlans] = useState([
        { name : "Cheast", sets: 3, reps: 4, selectedDays: ["Mon", "Fri", "Tue"] },
        { name : "Cheast", sets: 2, reps: 4, selectedDays: ["Mon", "Wed", "Fri"] },
        { name : "Cheast", sets: 3, reps: 2, selectedDays: ["Mon", "Tue", "Sat"] },
        { name : "Cheast", sets: 3, reps: 4, selectedDays: ["Wed", "Sat", "Sun"] }
    ]);
    const [showModal, setShowModal] = useState(false);

    const updatePlan = (index, updatedPlan) => {
        setPlans((prevPlans) => prevPlans.map((plan, i) => (i === index ? updatedPlan : plan)));
    };

    const addExercise = (newExercise) => {
        setPlans([...plans, newExercise]);
    };

    return (
        <>
        <CustomHeader />
        <div className="workoutpage">
            <Heading>{"Edit Exercises "}</Heading>
            <div className="workoutplans">
                {plans.map((plan, index) => (
                    <EditExerciseCard
                        key={index}
                        plan={plan}
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
        <CustomFooter />
        </>
    );
};

export default EditExercisesPage;
