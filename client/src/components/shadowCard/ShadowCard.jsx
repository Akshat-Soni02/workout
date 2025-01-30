import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// import "./style.css"


const ShadowCard = ({
  sx = {},
  children
}) => {
    return (
        <Card
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.36)",
          width: "500px",
          ...sx
        }}
      >
        <CardContent
        sx={{
        //   display: "flex",
        //   flexDirection: "column",
        //   gap: "1rem",
        }}
        >
          {children}
        </CardContent>
      </Card>
    );
}

export default ShadowCard;