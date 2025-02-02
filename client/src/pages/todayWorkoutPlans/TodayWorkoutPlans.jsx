import React from "react";

import ExerciseCard from "../../components/exerciseCard/ExerciseCard.jsx";
import { Title, Heading}from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import '../workoutPlans/WorkoutPlans.css';
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";


const TodayWorkoutPlans = () => {


    const plans = [{name : "Exercise 1",sets : 3,reps : 4},{name : "Exercise 2",sets : 2,reps : 4},{name : "Exercise 3",sets : 3,reps : 2},{name : "Exercise 4",sets : 3,reps : 4}]
                return (
                    <>
                    <CustomHeader />
                    <div className="workoutpage">
                    <Heading>{ "Today's Exercise Plan" }</Heading>
                    <div className="workoutplans">
                        {plans.map((plan, index) => (  
                            <ExerciseCard
                                key={index}
                                setsAndReps = {plan}
                                btnText="Record logs"
                            />
                        ))}
                    </div>
                    </ div>
                    <CustomFooter />
                    </>
                );
};

export default TodayWorkoutPlans;