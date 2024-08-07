import React from "react";
import { Box, Grid, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "80px",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
  p: 4,
};

const imageContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
};

const HoverMenu = ({ open, handleClose }) => {
  
    const images = [
    { src: "/home-1.png", label: "Home 1" },
    { src: "/home-1.png", label: "Home 2" },
    { src: "/home-1.png", label: "Home 3" },
    { src: "/home-1.png", label: "Home 4" },
    { src: "/home-1.png", label: "Home 5" },
    { src: "/home-1.png", label: "Home 6" },
    { src: "/home-1.png", label: "Home 7" },
    { src: "/home-1.png", label: "Home 8" },
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="hover-menu-title"
      aria-describedby="hover-menu-description"
    >
      <Box sx={style} onMouseLeave={handleClose}>
        <Grid container spacing={2}>
          {images?.map((image, index) => (
            <Grid item xs={3} key={index}>
              <Box sx={imageContainerStyle}>
                <img src={image?.src} alt={image?.label} width="100%"/>
                <Typography variant="body2">{image?.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  );
};

export default HoverMenu;
