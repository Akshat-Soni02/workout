import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title, LightText } from "../customTypo/CustomTypo.jsx";
import CustomButton from "../button/CustomButton.jsx";
import NumberField from "../numberField/NumberField.jsx";
import { EditSetsAndReps } from "../numberField/NumberField.jsx";
import MultiDaySelector from "../days/DaySelector.jsx";

const EditExerciseCard = ({ sx = {},id,plan}) => {
  return (
    <Card
      sx={{
        backgroundColor: "#E5EEFF",
        borderRadius: "12px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
        width: "40vw",
        height: "25vh",
        margin: "20px",
        ...sx,
      }}
    >
      <CardContent>
        <Title sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>
          {"Exercise " + id}
        </Title>

        <EditSetsAndReps label="Total Sets" initialValue={plan.sets}/>
        <EditSetsAndReps label="Total Reps" initialValue={plan.reps}/>

        <MultiDaySelector selectedDays={plan.selectedDays} />
        
      </CardContent>
    </Card>
  );
};

export default EditExerciseCard;
