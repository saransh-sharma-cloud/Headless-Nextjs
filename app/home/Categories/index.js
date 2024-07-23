"use client";
import React from "react";
import { Card, Typography, Container, Box, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GET_PRODUCT_CATEGORIES } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import client from "@/client";
import Link from "next/link";
import CustomSkeleton from "@/app/components/CustomSkeleton";

const Categories = () => {
  const { data, loading } = useQuery(GET_PRODUCT_CATEGORIES, {
    client: client,
  });

  const productCategories = data?.productCategories?.nodes;

  return (
    <div
      style={{
        backgroundColor: "#1d1d1d",
        paddingTop: "100px",
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <Typography variant="h1" sx={{ color: "#ffffff" }} gutterBottom>
            Our Categories
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#ffffff", marginBottom: "2rem" }}
            gutterBottom
          >
            From home to contract, get inspired and design!
          </Typography>
          {loading ? (
            <Grid container direction={"row"} spacing={2} pb={13}>
              {Array.from({ length: 4 }).map((_, index) => (
                <Grid item xs={3} sm={3} md={3} key={index}>
                  <CustomSkeleton />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
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
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
              }}
            >
              {productCategories?.map((category, index) => (
                <SwiperSlide key={index}>
                  <Box>
                    <Card sx={{ borderRadius: "15px" }}>
                      <Link
                        href={`/product-category/${category?.slug}`}
                        passHref
                      >
                        <img
                          src={category?.image?.mediaItemUrl}
                          alt={category?.image?.altText}
                          style={{
                            width: "100%",
                            objectFit: "cover",
                          }}
                          className="img-fluid hover:shake"
                        />
                      </Link>
                    </Card>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{
                        padding: "10px 0",
                        color: "#ffffff",
                        marginBottom: "4rem",
                      }}
                      margin="10px"
                    >
                      {category?.name}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Categories;
