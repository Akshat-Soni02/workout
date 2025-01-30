import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Heading, Title, LightText, ExerciseText } from "../customTypo/CustomTypo.jsx";
import CustomButton from "../button/CustomButton.jsx";
import EditSetsAndReps from "../numberField/NumberField.jsx"

const EditExerciseCard = ({
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
          {"Exercise " + id}
        </Title>

        <EditSetsAndReps>{ "Total Sets" }</EditSetsAndReps>
        <EditSetsAndReps>{ "Total Reps" }</EditSetsAndReps>

        {btnText && (
          <div className="buttonContainer">
            <CustomButton>{btnText}</CustomButton>
          </div>
        )}
      </CardContent>

    </Card>
  );
}

export default EditExerciseCard;