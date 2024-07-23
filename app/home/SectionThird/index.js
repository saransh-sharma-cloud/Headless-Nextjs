"use client";
import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import "swiper/css";

const SectionThird = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} sx={{ marginTop: "100px" }}>
        <Grid
          item
          xs={12}
          md={6}
          container
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            src="banner-1.jpg"
            layout="fill"
            alt="Elevate Your Space"
            className="img-fluid hover:shake"
            style={{
              objectFit: "cover",
              overflow:"hidden",
              borderRadius:"25px"
            }}
          />
          <Typography
            variant="h4"
            component="div"
            sx={{
              position: "absolute",
              color: "black",
              textAlign: "center",
            }}
          >
            Elevate Your Space
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: "25px",
                }}
              >
                <img
                  src="banner-2.jpg"
                  layout="fill"
                  objectfit="cover"
                  alt="Harmony in Design"
                  className="img-fluid hover:shake"
                />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    position: "absolute",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Harmony in Design
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: "25px",
                }}
              >
                <img
                  src="banner-3.jpg"
                  layout="fill"
                  objectfit="cover"
                  alt="Curated Living"
                  className="img-fluid hover:shake"
                />
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    position: "absolute",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Curated Living
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SectionThird;