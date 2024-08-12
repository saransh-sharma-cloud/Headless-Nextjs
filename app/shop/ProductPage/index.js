"use client";
import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Divider,
  Slider,
  Chip,
} from "@mui/material";
import Bestseller from "@/app/home/BestSeller";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_ITEM } from "@/lib/queries";

function ProductPage() {
  const { data, loading } = useQuery(GET_PRODUCT_ITEM);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = useState([0, 250]);

  const categories = [
    { label: "Bathroom (9)", value: "bathroom" },
    { label: "Chair (14)", value: "chairs" },
    { label: "Decor (5)", value: "decor" },
    { label: "Lamp (8)", value: "lamps" },
    { label: "Table (6)", value: "tables" },
  ];

  const brands = [
    "Asoka(10)",
    "Interior Premium(2)",
    "Lavish Cuisine(7)",
    "Medd(4)",
    "Vetter(1)",
    "Virtups Coworking(2)",
  ]; 

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChange = (value,newValue) => {
    setValue(newValue);
  }; 

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Categories
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="categories"
                    name="category-radio-buttons-group"
                    value={selectedCategory}
                    onChange={handleChangeCategory}
                  >
                    {categories?.map((category, index) => (
                      <FormControlLabel
                        key={index}
                        value={category?.value}
                        control={<Radio />}
                        label={
                          <Typography
                            sx={{
                              color: "#8A8A8A",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            {category?.label}
                          </Typography>
                        }
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={8}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  Price
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={250}
                  // step={1}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5" gutterBottom>
                  Range:{" "}
                  <strong>
                    ${value[0]?.toFixed(2)} - ${value[1]?.toFixed(2)}
                  </strong>
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  Color
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  Brands
                </Typography>
              </Grid>
              <Grid
                sx={{ display: "flex", gap: 1, flexWrap: "wrap", m: 0 }}
                item
                xs={8}
              >
                {brands?.map((brand) => (
                  <Chip
                    key={brand}
                    label={brand}
                    clickable
                    variant="outlined"
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Bestseller data={data} loading={loading} showHeader={false} useSwiper={false}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductPage;