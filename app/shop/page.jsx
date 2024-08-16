"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import ProductPage from "./ProductPage";

export default function Page() {
  return (
      <Box>
        <img
          src="/bg-breadcrumb.jpg"
          alt="Background Image"
          style={{ width: "100%" }}
        />
        <ProductPage />
      </Box>
  );
}
