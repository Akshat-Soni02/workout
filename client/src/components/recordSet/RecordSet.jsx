import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../customInput/CustomInput.jsx";
import CustomButton from "../button/CustomButton.jsx";
import { Heading, Title, LightText } from "../customTypo/CustomTypo.jsx";

import "./style.css";

const RecordSet = () => {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="recordSetForm">
        <Title style = {{fontSize: "2rem"}}>Set 1</Title>
        <CustomInput
          name="reps"
          control={control}
          rules={{
            required: "Reps are required",
          }}
          label="Total Reps"
          type="reps"
          sx={{
            width: "350px"
          }}
        />


        <CustomInput
          name="weight"
          control={control}
          label="Weight Lifted"
          type="weight"
          sx={{
            width: "350px"
          }}
        />

        <CustomInput
          name="duration"
          control={control}
          label="Duration"
          type="duration"
          sx={{
            width: "350px"
          }}
        />

        {/* <CustomButton
        type="submit"
        sx={{
            width: "250px",
            fontSize: "1.2rem"
        }}
        >
        Submit
        </CustomButton> */}
      </form>
  );
}

export default RecordSet;