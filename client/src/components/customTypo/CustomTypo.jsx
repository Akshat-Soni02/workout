import React from "react";
import { Typography } from "@mui/material";
import "@fontsource/poppins";


export const Heading = ({ children, level = "h1", ...props }) => (
  <Typography
    variant={level}
    sx={{
      fontWeight: 700,
      fontSize: level === "h1" ? "2.5rem" : level === "h2" ? "2rem" : "1.5rem",
      color: "#333",
      fontFamily: "'Poppins', sans-serif",
    //   marginBottom: 2,
    }}
    {...props}
  >
    {children}
  </Typography>
);


export const Title = ({ children, ...props }) => (
  <Typography
    variant="subtitle1"
    sx={{ color: "#333", fontWeight: 400, fontSize: "1.25rem", fontFamily: "'Poppins', sans-serif" }}
    {...props}
  >
    {children}
  </Typography>
);

 
export const LightText = ({ children, ...props }) => (
  <Typography
    variant="body2"
    sx={{ color: "#666", fontWeight: 300, fontSize: "1rem", fontFamily: "'Poppins', sans-serif" }}
    {...props}
  >
    {children}
  </Typography>
);
