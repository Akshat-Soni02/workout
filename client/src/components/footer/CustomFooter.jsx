import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "@fontsource/poppins"; // Ensure Poppins is imported

const CustomFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 3,
        px: 2,
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
        My Website
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1 }}>
        {["Home", "About", "Contact"].map((item) => (
          <Typography
            key={item}
            variant="body2"
            sx={{
              cursor: "pointer",
              transition: "opacity 0.3s ease",
              "&:hover": { opacity: 0.7 },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>

      <Box>
        {[FacebookIcon, TwitterIcon, InstagramIcon].map((Icon, index) => (
          <IconButton key={index} sx={{ color: "white", "&:hover": { opacity: 0.7 } }}>
            <Icon />
          </IconButton>
        ))}
      </Box>

      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} My Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default CustomFooter;
