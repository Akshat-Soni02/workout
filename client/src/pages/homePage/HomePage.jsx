import React from "react";
import CustomCard from "../../components/card/CustomCard.jsx";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import CustomForm from "../../components/customForm/CustomForm.jsx";
import ShadowCard from "../../components/shadowCard/ShadowCard.jsx";
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";

import "./style.css"

const HomePage = () => {
    // const weeklyData = [50, 55, 53, 60, 58, 62, 65];
    // const monthlyData = [200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310];


    return (
        <>
            <div className="home">
                {/* <CustomCard title={"Workout plan 1"}>Too much content</CustomCard> */}
                {/* <CustomInput id={"aaa"} label={"aaa"}/> */}
                {/* <CustomHeader/> */}
                {/* <CustomFooter/> */}
                {/* <ShadowCard /> */}
                {/* <CustomStrengthGraph weeklyData={weeklyData} monthlyData={monthlyData} /> */}
                {/* <CustomBodyGraph weeklyData={weeklyData} monthlyData={monthlyData}/> */}
                {/* <DataCalendar/> */}
            </div>
        </>
    );
}

export default HomePage;