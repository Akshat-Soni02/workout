import React from "react";

import ExerciseCard from "../../components/exerciseCard/ExerciseCard.jsx";
import { Title, Heading}from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import '../workoutPlans/WorkoutPlans.css'


const TodayWorkoutPlans = () => {


    const plans = [{sets : 3,reps : 4},{sets : 2,reps : 4},{sets : 3,reps : 2},{sets : 3,reps : 4}]
                return (
                    <div className="workoutpage">
                    <Heading>{ "Today's Exercise Plan" }</Heading>
                    <div className="workoutplans">
                        {plans.map((plan, index) => (  
                            <ExerciseCard
                                key={index}
                                setsAndReps = {plan}
                                btnText="Record logs"
                                id = {index + 1}
                            />
                        ))}
                    </div>
                    </ div>
                );
};

export default TodayWorkoutPlans;