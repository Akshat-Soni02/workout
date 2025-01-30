import React from "react";
import WorkoutCard from "../../components/workoutCard/WorkoutCard.jsx";
import RecordLogParent from "../../components/recordLog/RecordLogParent.jsx";



import "./style.css"

const HomePage = () => {
    // const weeklyData = [50, 55, 53, 60, 58, 62, 65];
    // const monthlyData = [200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310];
    const temp = ['item1','item2','item3','item4'];



    return (
        <>
            <div className="home">
                {/* <WorkoutCard title={"Workout plan 1"} exercises = {temp} btnText={"Edit"}>Too much content</WorkoutCard> */}
                {/* <CustomStrengthGraph weeklyData={weeklyData} monthlyData={monthlyData} /> */}
                <RecordLogParent/>
            </div>
        </>
    );
}

export default HomePage;