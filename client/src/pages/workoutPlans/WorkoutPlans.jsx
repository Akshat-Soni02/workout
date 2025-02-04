import React, { useState } from "react";
import WorkoutCard from "../../components/workoutCard/WorkoutCard";
import "./WorkoutPlans.css";
import { Heading } from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import WorkoutModal from "../../components/workoutModal/workoutModal.jsx";
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";
import { useGetWorkoutsQuery } from "../../store/WorkoutApi.jsx";

const WorkoutPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [workoutName, setWorkoutName] = useState("");

    const { data: response, isLoading, error } = useGetWorkoutsQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading workouts</p>;

    return (
        <>
            <CustomHeader />
            <div className="workoutpage">
                <Heading>{"All Workout Plans"}</Heading>
                <div className="workoutplans">
                    {response.workouts?.map((workout, index) => (
                        <WorkoutCard
                            key={index}
                            name={workout.title}
                            description={workout.description}
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
                        setShowModal={setShowModal}
                    />
                )}
            </div>
            <CustomFooter />
        </>
    );
};

export default WorkoutPage;
