import React from "react";
import CustomCard from "../../components/card/CustomCard.jsx";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import CustomForm from "../../components/customForm/CustomForm.jsx";
import ShadowCard from "../../components/shadowCard/ShadowCard.jsx";
import CustomHeader from "../../components/header/CustomHeader.jsx";
import CustomFooter from "../../components/footer/CustomFooter.jsx";

const HomePage = () => {
    return (
        <>
            <div className="home">
                {/* <CustomCard title={"Workout plan 1"}>Too much content</CustomCard> */}
                {/* <CustomInput id={"aaa"} label={"aaa"}/> */}
                <CustomHeader/>
                <CustomFooter/>
                <ShadowCard />
            </div>
        </>
    );
}

export default HomePage;