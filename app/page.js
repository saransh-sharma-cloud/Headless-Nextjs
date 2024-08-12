"use client"
import React from "react";
import {Grid } from "@mui/material";
import CarouselComponent from "./home/Carousel";
import Categories from "./home/Categories";
import Bestseller from "./home/BestSeller";
import Comfort from "./home/Comfort";
import Quotes from "./home/Quotes";
import SectionThird from "./home/SectionThird";
import { GET_PRODUCT_ITEM } from "@/lib/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
    const { data, loading } = useQuery(GET_PRODUCT_ITEM);

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
          <Bestseller data={data} loading={loading} />
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
