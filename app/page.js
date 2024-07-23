import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CarouselComponent from "./home/Carousel";
import Categories from "./home/Categories";
import Bestseller from "./home/BestSeller";
import Comfort from "./home/Comfort";
import Quotes from "./home/Quotes";
import SectionThird from "./home/SectionThird";
import ProductDetail from "./product/[slug]/page";

export default function Home() {
  return (
    <>
      <CarouselComponent
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        interval={5000}
        transitionTime={500}
      />
      <Categories />
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <SectionThird />
        </Grid>
        <Grid item xs={12}>
          <Bestseller />
        </Grid>
        <Grid item xs={12}>
          <Comfort />
        </Grid>
        <Grid item xs={12}>
          <Quotes />
        </Grid>
      </Grid>
    </>
  );
}
