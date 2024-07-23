'use client'
import React, { useState } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_ITEM } from "@/lib/queries";
import { calculateDiscountPercentage, mapColors } from "@/app/utils";
import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CustomSkeleton from "@/app/components/CustomSkeleton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


const Bestseller = () => {
  const { data, loading } = useQuery(GET_PRODUCT_ITEM);
  const [selectedImages, setSelectedImages] = useState({});
  const [selectedPrices, setSelectedPrices] = useState({});

  const products = data?.products?.edges?.map((edge) => edge?.node);

  const handleColorChange = (
    productId,
    imageUrl,
    price,
    regularPrice,
    onSale
  ) => {
    setSelectedImages((prevState) => ({
      ...prevState,
      [productId]: imageUrl,
    }));

    const discountPercentage = onSale
      ? calculateDiscountPercentage(regularPrice, price)
      : null;

    setSelectedPrices((prevState) => ({
      ...prevState,
      [productId]: { price, regularPrice, onSale, discountPercentage },
    }));
  };

  const getInitialPrice = (item) => {
    if (item?.type === "VARIABLE" && item?.variations?.edges.length > 0) {
      const firstVariation = item?.variations?.edges[0].node;
      return {
        price: firstVariation?.price,
        regularPrice: firstVariation?.regularPrice,
        onSale: firstVariation?.onSale,
        discountPercentage: firstVariation?.onSale
          ? calculateDiscountPercentage(
              firstVariation?.regularPrice,
              firstVariation?.price
            )
          : null,
      };
    }
    return {
      price: item?.price,
      regularPrice: item?.regularPrice,
      onSale: item?.onSale,
      discountPercentage: item?.onSale
        ? calculateDiscountPercentage(item?.regularPrice, item?.price)
        : null,
    };
  };

  const productsWithDiscount = products?.map((item) => ({
    ...item,
    initialPrice: getInitialPrice(item),
  }));

  return (
    <Container maxWidth="xl">
      <Box>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h1" gutterBottom>
              Bestseller
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: "3rem" }}>
              Experience the best products at our store!
            </Typography>
          </Grid>
          <Button className="view-all-button">View All</Button>
        </Grid>
        <Swiper spaceBetween={30} slidesPerView={4} modules={[Navigation]} rewind={true}>
          {loading ? (
            <Grid container direction={"row"} spacing={2} pb={13}>
              {Array.from({ length: 4 }).map((_, index) => (
                <Grid item xs={3} sm={3} md={3} key={index}>
                  <CustomSkeleton />
                </Grid>
              ))}
            </Grid>
          ) : (
            productsWithDiscount?.map((item) => {
              const currentPrice = selectedPrices[item?.id] || item?.initialPrice;
              return (
                <SwiperSlide key={item?.id}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box className="product-image-container">
                      {currentPrice?.onSale && (
                        <Grid className="discount-badge">
                          {currentPrice?.discountPercentage}% off
                        </Grid>
                      )}
                      <Link href={`/product/${item?.slug}`} passHref>
                        <img
                          src={
                            selectedImages[item?.id] ||
                            item?.featuredImage?.node?.mediaItemUrl
                          }
                          alt={item?.name}
                          className="normal-image"
                        />
                      </Link>
                      {item?.variations?.edges[1]?.node?.image
                        ?.mediaItemUrl && (
                        <Link href={`/product/${item?.slug}`} passHref>
                          <img
                            src={
                              item?.variations?.edges[1]?.node?.image
                                ?.mediaItemUrl
                            }
                            alt={item?.name}
                            className="hover-image"
                          />
                        </Link>
                      )}
                      {/* <Box className="wishlist-icon">
                        <FavoriteBorderOutlinedIcon />
                      </Box> */}
                      {item?.variations?.edges[1]?.node?.image
                        ?.mediaItemUrl && (
                        <Box className="hover-image">
                          <Button
                            variant="contained"
                            size="small"
                            className="add-to-cart-button"
                          >
                            Add To Cart
                            <ShoppingBagOutlinedIcon
                              sx={{ marginLeft: "5px" }}
                            />
                          </Button>
                        </Box>
                      )}
                    </Box>
                    <Typography variant="h6" sx={{ margin: "10px" }}>
                      {item?.name}
                    </Typography>
                    <Grid
                      container
                      justifyContent="center"
                      alignItems="center"
                      gap="10px"
                      marginBottom="10px"
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          textDecoration: currentPrice?.onSale
                            ? "line-through"
                            : "none",
                          color: currentPrice?.onSale ? "grey" : "inherit",
                        }}
                      >
                        {currentPrice?.regularPrice}
                      </Typography>
                      {currentPrice?.onSale && (
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: "bold", color: "red" }}
                        >
                          {currentPrice?.price}
                        </Typography>
                      )}
                    </Grid>
                    {/* variation logic */}
                    <Grid container justifyContent={"center"}>
                      {item?.variations?.edges.map((variationEdge, index) => (
                        <div key={index}>
                          {variationEdge?.node?.attributes?.nodes?.map(
                            (attribute, attributeIndex) => {
                              const color = mapColors(
                                attribute?.value?.replace(/"/g, "")
                              );
                              if (color) {
                                return (
                                  <Grid
                                    key={`${index}-${attributeIndex}`}
                                    className="color-swatch"
                                    sx={{ backgroundColor: color }}
                                    onClick={() =>
                                      handleColorChange(
                                        item?.id,
                                        variationEdge?.node?.image
                                          ?.mediaItemUrl,
                                        variationEdge?.node?.price,
                                        variationEdge?.node?.regularPrice,
                                        variationEdge?.node?.onSale
                                      )
                                    }
                                  />
                                );
                              }
                              return null;
                            }
                          )}
                        </div>
                      ))}
                    </Grid>
                  </Box>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Bestseller; 