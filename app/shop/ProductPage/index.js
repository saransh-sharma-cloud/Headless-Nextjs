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
} from "@mui/material";

function App() {
  const products = [
    {
      id: 1,
      name: "About a Chair AAC 22 - Oak Base",
      price: "100.00",
      originalPrice: "120.00",
      discount: 17,
      imageUrl: "/chair.jpg",
    },
    {
      id: 2,
      name: "Bouquet Flower Vase",
      price: "189.00",
      imageUrl: "/vase.jpg",
    },
    { id: 3, name: "Cubic Plinth", price: "200.00", imageUrl: "/plinth.jpg" },
  ];

   const [selectedCategory, setSelectedCategory] = useState("");

   const categories = [
     { label: "Bathroom (9)", value: "bathroom" },
     { label: "Chair (14)", value: "chairs" },
     { label: "Decor (5)", value: "decor" },
     { label: "Lamp (8)", value: "lamps" },
     { label: "Table (6)", value: "tables" },
   ];

   const handleChangeCategory = (event) => {
     setSelectedCategory(event.target.value);
   };

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1, p: 2, margin: "0rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* Filters Section */}
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
                    label={category?.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
