"use client";
import React from "react";
import { Typography, Container, Box } from "@mui/material";
import "swiper/css";

const Quotes = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        paddingTop: "100px",
      }}
    >
      <Container maxWidth="xl" justifyContent="center">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{ mb: 4, color: "#ffffff", textAlign: "start" }}
            gutterBottom
          >
            &ldquo;The furniture selection here is exceptional! I found <br />
            exactly what I needed for my home renovation. The
            <br />
            quality and design surpassed my expectations.&rdquo;
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ffffff", paddingBottom: "50px" }}
          >
            ANN SMITH - CEO & Founder
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Quotes;
