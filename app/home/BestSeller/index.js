"use client";
import React, { useState } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import CustomSkeleton from "@/app/components/CustomSkeleton";
import ProductGrid from "./ProductGridItem";
import ProductSlide from "./ProductSlide";
import { calculateDiscountPercentage, getInitialPrice } from "@/app/utils";

const Bestseller = ({ data, loading, showHeader = true, useSwiper = true }) => {
  const [selectedImages, setSelectedImages] = useState({});
  const [selectedPrices, setSelectedPrices] = useState({});

  console.log(data,"data")

  const products = data?.products?.edges?.map((edge) => edge?.node);
  const productsWithDiscount = products?.map((item) => ({
    ...item,
    initialPrice: getInitialPrice(item),
  }));

  const handleColorChange = (
    productId,
    imageUrl,
    price,
    regularPrice,
    onSale
  ) => {
    setSelectedImages((prevState) => ({ ...prevState, [productId]: imageUrl }));
    const discountPercentage = onSale
      ? calculateDiscountPercentage(regularPrice, price)
      : null;
    setSelectedPrices((prevState) => ({
      ...prevState,
      [productId]: { price, regularPrice, onSale, discountPercentage },
    }));
  };

  return (
    <Container maxWidth="xl">
      <Box>
        {showHeader && (
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h1" gutterBottom>
                Bestseller
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginBottom: "3rem" }}
              >
                Experience the best products at our store!
              </Typography>
            </Grid>
            <Button className="view-all-button">View All</Button>
          </Grid>
        )}
        {useSwiper ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            modules={[Navigation]}
            rewind
          >
            {loading ? (
              <Grid container direction="row" spacing={2} pb={13}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <CustomSkeleton />
                  </Grid>
                ))}
              </Grid>
            ) : (
              productsWithDiscount.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductSlide
                    item={item}
                    selectedImages={selectedImages}
                    selectedPrices={selectedPrices}
                    handleColorChange={handleColorChange}
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        ) : (
          <Grid container spacing={2}>
            {loading ? (
              <Grid container direction="row" spacing={2} m={0}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <CustomSkeleton height={365} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              productsWithDiscount?.map((item) => (
                <ProductGrid
                  key={item.id}
                  item={item}
                  selectedImages={selectedImages}
                  selectedPrices={selectedPrices}
                  handleColorChange={handleColorChange}
                />
              ))
            )}
          </Grid>
        )}
      </Box>
    </Container>
  );
};
export default Bestseller;

