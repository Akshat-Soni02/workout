import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from "../customTypo/CustomTypo.jsx";
import CustomButton from "../button/CustomButton.jsx";

const WorkoutCard = ({ sx = {}, description, btnText, name }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#E5EEFF",
        borderRadius: "12px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
        width: "40vw",
        height: "245px",
        margin: "20px",
        ...sx
      }}
    >
      <CardContent>
        <Title sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>
          {name}
        </Title>

        <div
          style={{
            maxHeight: "130px",
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: "rgb(210, 220, 240) #E5EEFF",
          }}
        >
          {description && <div>{description}</div>}
        </div>

        {btnText && (
          <div className="buttonContainer">
            <CustomButton>{btnText}</CustomButton>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WorkoutCard;
