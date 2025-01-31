import React from "react";
import EditExerciseCard from "../../components/editExerciseCard/EditExerciseCard.jsx";
import { Title, Heading}from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx";
import '../workoutPlans/WorkoutPlans.css'


const EditExercisesPage = () => {


    const plans = [{sets : 3,reps : 4,selectedDays : ["Mon","Tue","Fri"]},{sets : 2,reps : 4, selectedDays : ["Mon","Wed","Fri"]},{sets : 3,reps : 2,selectedDays : ["Mon","Tue","Sat"]},{sets : 3,reps : 4,selectedDays : ["Wed","Sat","Sun"]}]
                return (
                    <div className="workoutpage">
                    <Heading>{ "Today's Exercise Plan" }</Heading>
                    <div className="workoutplans">
                        {plans.map((plan, index) => (  
                            <EditExerciseCard
                                key={index}
                                plan = {plan}
                                id = {index + 1}
                            />
                        ))}
                    </div>
                    </ div>
                );
};

export default EditExercisesPage;