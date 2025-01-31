import React from "react";

import WorkoutCard from "../../components/workoutCard/WorkoutCard";
import "./WorkoutPlans.css";
import { Title, Heading}from "../../components/customTypo/CustomTypo.jsx";
import CustomButton from "../../components/button/CustomButton.jsx"


const WorkoutPage = () => {


    const plans = [{exercises : ["item1","item2","item3","item4","item1","item2","item3","item4"]}
                ,{exercises : ["item1","item2","item3","item4",]}
                ,{exercises : ["item1","item2","item3","item4"]}
                ,{exercises : ["item1","item2","item3","item4"]}
                ,{exercises : ["item1","item2","item3","item4"]}
                ,{exercises : ["item1","item2","item3","item4"]}]
                return (
                    <div className="workoutpage">
                    <Heading>{ "All Workout Plans" }</Heading>
                    <div className="workoutplans">
                        {plans.map((plan, index) => (  
                            <WorkoutCard
                                key={index}
                                id = {index + 1}
                                exercises={plan.exercises}  
                                btnText="Edit"
                            />
                        ))}
                    </div>
                    <CustomButton sx={{width :"30vw",fontSize : "20px"}}> { "Add Workout Plan"} </CustomButton>
                    </ div>
                );
};

export default WorkoutPage;