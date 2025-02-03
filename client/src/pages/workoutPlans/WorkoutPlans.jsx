import React, { useState } from "react";
import WorkoutCard from "../../components/workoutCard/WorkoutCard";
import "./WorkoutPlans.css";
import { Heading } from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import WorkoutModal from "../../components/workoutModal/workoutModal.jsx";
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";
import {useGetWorkoutsQuery} from "../../store/WorkoutApi.jsx"
import {useGetExercisesQuery} from "../../store/ExerciseApi.jsx";

const WorkoutPage = () => {
    const [plans, setPlans] = useState([
        { name: "Chest", exercises: ["item1", "item2", "item3", "item4", "item3", "item4"] },
        { name: "Back", exercises: ["item1", "item2", "item3", "item4"] },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [workoutName, setWorkoutName] = useState("");
    const {data: response, isLoading, error} = useGetWorkoutsQuery();
    const {data: res, isLoading: loading, error: err} = useGetExercisesQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading workout</p>;

    const handleAddPlan = () => {
        if (workoutName.trim()) {
            setPlans([...plans, { name: workoutName, exercises: [] }]);
            setWorkoutName("");
            setShowModal(false);
        }
    };

    const exesTitles = res.exercises.map((exercise) => exercise.title);

    return (
        <>
        <CustomHeader />
        <div className="workoutpage">
            <Heading>{"All Workout Plans"}</Heading>
            <div className="workoutplans">
                {response.workouts.map((workout, index) => (
                    <WorkoutCard
                        key={index}
                        name={workout.name}
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
        <CustomFooter />
        </>
    );
};

export default WorkoutPage;
