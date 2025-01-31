import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Heading, Title, LightText, ExerciseText, RepeationText } from "../customTypo/CustomTypo.jsx";
import CustomButton from "../button/CustomButton.jsx";

const ExerciseCard = ({
  sx = {},
  setsAndReps,
  btnText,
  id
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "#E5EEFF",
        borderRadius: "12px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
        width: "40vw",
        height: "20vh",
        margin: "20px",
        ...sx
      }}
    >
      <CardContent>
        <Title sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>
          {"Exercise " + id}
        </Title>

        <div style={{paddingLeft : "20px",paddingBottom: "5px"}}>
        <ExerciseText>{ "Number of sets : " + setsAndReps.sets }</ExerciseText>
        <RepeationText>{ "Number of reps : " +  setsAndReps.reps } </RepeationText>
        </div>


        {btnText && (
          <div className="buttonContainer">
            <CustomButton sx={{width : "200px"}}>{btnText}</CustomButton>
          </div>
        )}
      </CardContent>

    </Card>
  );
}

export default ExerciseCard;