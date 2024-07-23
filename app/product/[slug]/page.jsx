"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinearProgress from "@mui/material/LinearProgress";
import Image from "next/image";
import { mapColors } from "../../utils";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ProductDetailTab from "../ProductDetailTab";
import { GET_PRODUCT_DETAIL } from "@/lib/queries";
import { useQuery } from "@apollo/client";

const page = ({ params }) => {
  const slug = params?.slug;
  const [quantity, setQuantity] = useState(1);

  const { data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { slug },
  });

  const product = data?.product;
  const variations = data?.product?.variations?.edges?.map(
    (edge) => edge?.node
  );
  const [selectedVariation, setSelectedVariation] = useState(null);

  useEffect(() => {
    if (data?.product?.variations?.edges.length > 0) {
      setSelectedVariation(data?.product?.variations?.edges[0]?.node);
    }
  }, [data]);

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === "increment"
        ? prevQuantity + 1
        : prevQuantity - 1 > 0
        ? prevQuantity - 1
        : 1
    );
  };

  const handleColorSelection = (variation) => {
    setSelectedVariation(variation.node);
  };

    const handleThumbnailClick = (variation) => {
      setSelectedVariation(variation);
    };

  const defaultImageSrc = data?.product?.image?.sourceUrl;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} mt={2} columnGap={6}>
        <Grid item xs={1}>
          <Grid container gap={2}>
            {variations ? (
              variations?.map((variation, index) => (
                <Image
                  key={index}
                  src={variation?.image?.mediaItemUrl}
                  alt={`Product image ${index}`}
                  width={200}
                  height={200}
                  layout="fixed"
                  sx={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleThumbnailClick(variation)}
                />
              ))
            ) : (
              <Image
                src={defaultImageSrc}
                alt={`Product image`}
                width={200}
                height={200}
                layout="fixed"
                sx={{
                  cursor: "pointer",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Carousel
              autoPlay={false}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              swipeable={true}
              emulateTouch={true}
              interval={5000}
              transitionTime={500}
            >
              {variations ? (
                variations?.map((variation, index) => {
                  return (
                    <div key={index}>
                      <Image
                        src={
                          selectedVariation?.image?.mediaItemUrl ||
                          variation?.image?.mediaItemUrl ||
                          defaultImageSrc
                        }
                        alt={`Product image ${variation?.node?.slug}`}
                        width={500}
                        height={500}
                        style={{ borderRadius: "10px" }}
                        layout="responsive"
                      />
                    </div>
                  );
                })
              ) : (
                <Image
                  src={defaultImageSrc}
                  alt={`Product image`}
                  width={500}
                  height={500}
                  layout="fixed"
                  sx={{
                    cursor: "pointer",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                />
              )}
            </Carousel>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                {product?.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body3" gutterBottom>
                {selectedVariation?.price
                  ? selectedVariation?.price
                  : product?.price}
              </Typography>
            </Grid>

            <Divider />

            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                <VisibilityOutlinedIcon />{" "}
                {"31 people are viewing this right now"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#8a8a8a" }}
              >
                {product?.description ||
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}
              </Typography>{" "}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Only {product?.stock} item(s) left in stock!
              </Typography>{" "}
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#8a8a8a" }}
              >
                Color:
              </Typography>
            </Grid>
            <Grid container spacing={1}>
              {data?.product?.variations?.edges?.map((variation, index) => {
                const colorName =
                  variation?.node?.attributes?.nodes[0]?.value?.replace(
                    /"/g,
                    ""
                  );
                const color = mapColors(colorName);
                return (
                  <Grid item key={index}>
                    {color && (
                      <div
                        className="color-swatch"
                        style={{
                          backgroundColor: color,
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                        onClick={() => handleColorSelection(variation)}
                      />
                    )}
                  </Grid>
                );
              })}
            </Grid>

            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid item xs={3}>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{
                      border: "1px solid #000",
                      borderRadius: "20px",
                      p: "2px",
                    }}
                  >
                    <IconButton
                      type="button"
                      aria-label="search"
                      onClick={() => handleQuantityChange("decrement")}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <p>{quantity}</p>
                    <IconButton
                      onClick={() => handleQuantityChange("increment")}
                    >
                      <AddIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    className="view-all-button"
                  >
                    Add to Cart
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Grid container gap={2}>
                    <IconButton className="view-all-icon">
                      <FavoriteBorderIcon fontSize="medium" />
                    </IconButton>
                    <IconButton className="view-all-icon">
                      <CachedIcon fontSize="medium" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button fullWidth variant="contained" className="view-all-button">
                Buy Now
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ backgroundColor: "#f5f5f5", borderRadius: "10px" }}
              mt={4}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  backgroundColor: "#f5f5f5",
                  padding: {
                    paddingTop: 40,
                    paddingRight: 25,
                    paddingBottom: 25,
                    paddingLeft: 0,
                  },
                }}
              >
                <Image
                  src="/payment-product.png"
                  alt="Clearpay"
                  width={400}
                  height={23}
                />
              </Box>
              <Typography variant="body1" align="center">
                Guaranteed Checkout
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#8a8a8a" }}
              >
                <PublicIcon sx={{ color: "black", marginRight: "5px" }} />{" "}
                {"Free worldwide shipping on all orders over $100"}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: "#8a8a8a" }}
              >
                <AccessTimeIcon sx={{ color: "black", marginRight: "5px" }} />{" "}
                {"Delivers in: 3-7 Working Days Shipping & Return"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ProductDetailTab
        product={product}
        selectedVariation={selectedVariation}
      />
    </Container>
  );
};

export default page;
