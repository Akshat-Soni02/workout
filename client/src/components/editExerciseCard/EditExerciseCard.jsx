import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "../customTypo/CustomTypo.jsx";
import { EditSetsAndReps } from "../numberField/NumberField.jsx";
import MultiDaySelector from "../days/DaySelector.jsx";

const EditExerciseCard = ({ sx = {}, id, plan, onUpdate }) => {
    const [updatedPlan, setUpdatedPlan] = useState(plan);

    const handleSetsChange = (sets) => {
        setUpdatedPlan((prev) => ({ ...prev, sets }));
        onUpdate({ ...updatedPlan, sets });
    };

    const handleRepsChange = (reps) => {
        setUpdatedPlan((prev) => ({ ...prev, reps }));
        onUpdate({ ...updatedPlan, reps });
    };

    const handleDaysChange = (selectedDays) => {
        setUpdatedPlan((prev) => ({ ...prev, selectedDays }));
        onUpdate({ ...updatedPlan, selectedDays });
    };

    return (
        <Card
            sx={{
                backgroundColor: "#E5EEFF",
                borderRadius: "12px",
                boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
                width: "40vw",
                height: "220px",
                margin: "20px",
                ...sx,
            }}
        >
            <CardContent>
                <Title sx={{ textAlign: "center", fontWeight: "bold", fontSize: "22px" }}>
                    {plan.name}
                </Title>
                <EditSetsAndReps label="Total Sets" initialValue={plan.sets} onChange={handleSetsChange} />
                <EditSetsAndReps label="Total Reps" initialValue={plan.reps} onChange={handleRepsChange} />
                <MultiDaySelector selectedDays={plan.selectedDays} onSelectionChange={handleDaysChange} />
            </CardContent>
        </Card>
    );
};

export default EditExerciseCard;