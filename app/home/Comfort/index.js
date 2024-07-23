'use client'
import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Comfort() {
  const images = [
    "banner-4.jpg",
    "banner-6.jpg",
    "banner-5.jpg",
    "banner-6.jpg",
  ];

  return (
    <Container maxWidth="xl">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h2" gutterBottom>
            Tailored Comfort:
          </Typography>
          <Typography variant="h2" gutterBottom>
            Customized Interior Styling
          </Typography>
          <Button variant="outlined">See More</Button>
        </Grid>
        <Grid item xs={12} md={8} m={0} p={0}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            modules={[Navigation]}
            rewind={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Decorative Item ${index + 1}`}
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    objectfit: "cover",
                  }}
                  className="img-fluid hover:shake"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Comfort;
