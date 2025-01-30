import React from "react";
import CustomCard from "../../components/card/CustomCard.jsx";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import CustomForm from "../../components/customForm/CustomForm.jsx";
import ShadowCard from "../../components/shadowCard/ShadowCard.jsx";
import WorkoutCard from "../../components/workoutCard/WorkoutCard.jsx";
import RecordLogParent from "../../components/recordLog/RecordLogParent.jsx";


const temp = ['item1','item2','item3','item4'];

const HomePage = () => {
    return (
        <>
            <div className="home">
                <WorkoutCard title={"Workout plan 1"} exercises = {temp} btnText={"Edit"}>Too much content</WorkoutCard>
                {/* <CustomInput id={"aaa"} label={"aaa"}/> */}
                {/* <ShadowCard/> */}
                <RecordLogParent/>
            </div>
        </>
    );
}

export default HomePage;