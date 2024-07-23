"use client";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      swipeable={true}
      emulateTouch={true}
      interval={5000}
      transitionTime={500}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            position: "relative",
          }}
        >
          <img src="/slider-1-1.jpg" alt="Image 1" style={{ width: "100%" }} />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#1d1d1d",
              color: "white",
              padding: "20px",
              textAlign: "center",
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            <Typography variant="h1">Elevate Your Space</Typography>
            <Typography variant="body1">
              Experience Choose a beautiful bed for you and <br />
              your family. In our daily life...
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          sx={{
            position: "relative"
          }}
        >
          <img src="/slider-1-2.jpg" alt="Image 2" style={{ width: "100%" }} />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#1d1d1d",
              color: "white",
              padding: "20px",
              textAlign: "center",
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            <Typography variant="h1">Comfort Redefined</Typography>
            <Typography variant="body1">
              Lets experience and see extremely beautiful sofa
              <br /> models...{" "}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={12} sx={{ position: "relative" }}>
          <img src="/slider-1-3.jpg" alt="Image 3" style={{ width: "100%" }} />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "30%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#1d1d1d",
              color: "white",
              padding: "20px",
              textAlign: "center",
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            <Typography variant="h1">Seating Statements</Typography>
            <Typography variant="body1">
              Feeling comfortable and airy when sitting all day. To
              <br />
              own space
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Carousel>
  );
};

export default CarouselComponent;
