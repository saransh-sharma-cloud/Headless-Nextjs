"use client";

import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  IconButton,
  Grid,
  Container,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";


const AddToCart = ({ open, onClose, selectedProduct, selectedImage }) => {

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === "increment"
        ? prevQuantity + 1
        : prevQuantity - 1 > 0
        ? prevQuantity - 1
        : 1
    );
  };

   const price = selectedProduct?.variations?.edges[0]?.node?.price || "0";
  const salePrice = selectedProduct?.variations?.edges[0]?.node?.salePrice || price;
  const totalPrice = (parseFloat(salePrice.replace('₹', '')) * quantity).toFixed(2);

  return (
    <Container maxWidth="xl">
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 500, padding: 2 }}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              Shopping Cart ({selectedProduct?.variations?.edges?.length})
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={2}>
            {selectedImage && (
              <Grid item xs={3}>
                <Image
                  alt="Selected Product"
                  src={selectedImage}
                  width={100}
                  height={100}
                  style={{ borderRadius: "10px" }}
                />
              </Grid>
            )}
            <Grid item xs={9} fontWeight="fontWeightBold">
              <Grid container gap={2}>
                <Grid item xs={12}>
                  <Typography variant="h5" fontWeight="bold">
                    {selectedProduct?.name || "Product Name"}
                  </Typography>
                </Grid>
                <Grid item xs={12} gap={2} display={"flex"}>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    sx={{
                      border: "1px solid #000",
                      borderRadius: "20px",
                      width: "30%",
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
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    ₹{totalPrice}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    sx={{ color: "#8a8a8a", cursor: "pointer" }}
                  >
                    {"Remove"}
                  </Typography>
                  <Divider sx={{width: "50px" }}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </Container>
  );
};

export default AddToCart;
