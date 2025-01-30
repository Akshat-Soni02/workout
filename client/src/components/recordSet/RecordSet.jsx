import React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../customInput/CustomInput.jsx";
import CustomButton from "../button/CustomButton.jsx";
import { Heading, Title, LightText } from "../customTypo/CustomTypo.jsx";

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
    <div className="signupPage">
      <form onSubmit={handleSubmit(onSubmit)} className="signupForm">
        <Heading>Create an account</Heading>
        <CustomInput
          name="username"
          control={control}
          rules={{
            required: "Username is required",
          }}
          label="Username"
          type="username"
          sx={{
            width: "350px"
          }}
        />


        <CustomInput
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
          }}
          label="Email"
          type="email"
          sx={{
            width: "350px"
          }}
        />

        <CustomInput
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          }}
          label="Password"
          type="password"
          sx={{
            width: "350px"
          }}
        />

        <CustomButton
        type="submit"
        sx={{
            width: "250px",
            fontSize: "1.2rem"
        }}
        >
        Submit
        </CustomButton>
        <LightText>Already have an account? <span className="logRed">Log in</span></LightText>
      </form>
    </div>
  );
}

export default RecordSet;