import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import CustomInput from "../../../components/customInput/CustomInput.jsx";
import CustomButton from "../../../components/button/CustomButton.jsx";
import { Heading, Title, LightText } from "../../../components/customTypo/CustomTypo.jsx";
import CustomModal from "../../../components/modal/CustomModal.jsx";
import RecordLogParent from "../../../components/recordLog/RecordLogParent.jsx";
import "./style.css"

const LoginPage = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);

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
      <CustomModal
      open={open}
      onClose={() => setOpen(false)}
      ><RecordLogParent/></CustomModal>
      <form onSubmit={handleSubmit(onSubmit)} className="signupForm loginForm">
        <Heading>Hi, Welcome Back!</Heading>
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
        onClick={openModal}
        >
        Submit
        </CustomButton>
        <LightText>Don't have an account? <span className="logRed">Sign up</span></LightText>
      </form>
    </div>
  );
}

export default LoginPage;