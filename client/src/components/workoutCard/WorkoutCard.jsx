import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Heading, Title, LightText, ExerciseText } from "../customTypo/CustomTypo.jsx";
import CustomButton from "../button/CustomButton.jsx";

const WorkoutCard = ({
  sx = {},
  exercises,
  btnText,
  id,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "#E5EEFF",
        borderRadius: "12px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
        width: "40vw",
        height: "25vh",
        margin: "20px",
        ...sx
      }}
    >
      <CardContent>
        <Title sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>
          {"Workout plan " + id}
        </Title>


        <div
          style={{
            maxHeight: "130px",
            overflowY: "auto",
            scrollbarWidth: "thin", // Firefox
            scrollbarColor: "rgb(210, 220, 240) #E5EEFF", // Thumb color & track color (Firefox)
          }}
        >
          {Array.isArray(exercises) &&
            exercises.map((exercise, index) => (
              <ExerciseText key={index}>{exercise}</ExerciseText>
            ))}
        </div>

        {btnText && (
          <div className="buttonContainer">
            <CustomButton>{btnText}</CustomButton>
          </div>
        )}
      </CardContent>

    </Card>
  );
}

export default WorkoutCard;