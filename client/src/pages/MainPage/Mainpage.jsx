import React from "react";
import ImageBox from "../../components/main_page_box/ImageBox";
import CustomHeader from "../../components/header/CustomHeader";
import firstimg from "../../assets/firstimg.avif";
import secondimg from "../../assets/secondimg.webp";
import thirdimg from "../../assets/thirdimg.webp";
import fourthimg from "../../assets/fourthimg.webp";
import fifthimg from "../../assets/fifthimg.webp";
import sixthimg from "../../assets/sixthimg.webp";
import seventhimg from "../../assets/seventhimg.webp"
import CustomFooter from "../../components/footer/CustomFooter";
import backimg from "../../assets/backimg.avif";
import "./MainPage.css";
import SideImage from "../../components/gridimage/sideimage";
import { Heading } from "../../components/customTypo/CustomTypo";

const MainPage = () => {
  return (
    <div className="main-page">
  {/* Background Image with Blur */}
  <div
    // style={{
    //   backgroundImage: `url(${backimg})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100%",
    //   height: "100%",
    //   filter: "blur(8px)", 
    //   zIndex: -1 ,
    // }}
  />
  
  {/* Content Section */}
  <CustomHeader />
  <main className="content">
    <Heading style={{ margin: "20px" }}>
      <center>Today's Workout Plan</center>
    </Heading>
    <div className="image-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <ImageBox imgSrc={firstimg} />
    </div>
    <Heading style={{ margin: "20px" }}>
      <center>Want To Know More!</center>
    </Heading>
    <div className="image-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", alignItems: "center", width: "100%", maxWidth: "1800px" }}>
      <SideImage imgSrc={secondimg}/>
      <SideImage imgSrc={thirdimg}/>
      <SideImage imgSrc={fourthimg}/>
      <SideImage imgSrc={fifthimg}/>
      <SideImage imgSrc={sixthimg}/>
      <SideImage imgSrc={seventhimg}/>
    </div>
  </main>
  <CustomFooter />
</div>

  );
};

export default MainPage;
