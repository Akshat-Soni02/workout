import React from "react";
import ImageBox from "../../components/main_page_box/ImageBox";
import CustomHeader from "../../components/header/CustomHeader";
import firstimg from "../../assets/firstimg.jpg";
import secondimg from "../../assets/secondimg.jpg";
import thirdimg from "../../assets/thirdimg.jpg";
import fourthimg from "../../assets/fourthimg.jpg";
import fifthimg from "../../assets/fifthimg.jpg";
import sixthimg from "../../assets/sixthimg.jpg";
import CustomFooter from "../../components/footer/CustomFooter";
import "./MainPage.css";
import SideImage from "../../components/gridimage/sideimage";
import { Heading } from "../../components/customTypo/CustomTypo";

const MainPage = () => {
  return (
    <div className="main-page">
      <CustomHeader />
      <main className="content">
        {/* <h1 className="hi-champ"><center>Today's Workout Plan</center></h1> */}
        <Heading style={{
            margin:"20px",
        }}>
            <center>Today's Workout Plan</center>
        </Heading>
        <div
          className="image-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // gap:"20px",
          }}
        >
          <ImageBox imgSrc={firstimg} />
          </div>

          <Heading style={{
            margin:"20px",
          }}>
            <center>
                Want To Know More!
            </center>
          </Heading>

          <div className="image-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    alignItems: "center",
    width: "100%",
    maxWidth: "1800px" // Adjust based on `.image-container` width
  }}
>

          <SideImage imgSrc={secondimg}/>
          <SideImage imgSrc={thirdimg}/>
          <SideImage imgSrc={fourthimg}/>
          <SideImage imgSrc={fifthimg}/>
          <SideImage imgSrc={sixthimg}/>
          <SideImage imgSrc={sixthimg}/>
        </div>
      </main>
      <CustomFooter/>
    </div>
  );
};

export default MainPage;
