import React, { useState } from "react";
import Box from "@mui/material/Box";
import { TabContext, TabPanel } from "@mui/lab";
import { Button, Grid } from "@mui/material";
import AdditionalInformation from "./AdditionalInformation";
import Review from "./Reviews";

export default function ProductDetailTab({product}) {
  const [value, setValue] = useState("1");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ typography: "body1" }} mt="100px">
      <TabContext value={value}>
        <Grid container gap={2} justifyContent={"center"} alignItems={"center"}>
          <Button
            variant="text"
            sx={{
              fontWeight: value === "1" ? "bold" : "normal",
              color: value === "1" ? "#fff" : "#666",
              backgroundColor: value === "1" ? "#000000" : "transparent",
            }}
            className="tabButton"
            onClick={() => handleChange("1")}
          >
            Description
          </Button>

          <Button
            variant="text"
            sx={{
              fontWeight: value === "2" ? "bold" : "normal",
              color: value === "2" ? "#fff" : "#666",
              backgroundColor: value === "2" ? "#000000" : "transparent",
            }}
            className="tabButton"
            onClick={() => handleChange("2")}
          >
            Additional Information
          </Button>

          <Button
            variant="text"
            sx={{
              fontWeight: value === "3" ? "bold" : "normal",
              color: value === "3" ? "#fff" : "#666",
              backgroundColor: value === "3" ? "#000000" : "transparent",
            }}
            className="tabButton"
            onClick={() => handleChange("3")}
          >
            Reviews (0)
          </Button>
        </Grid>
        <TabPanel value="1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </TabPanel>
        <TabPanel value="2">
          <AdditionalInformation product={product} />
        </TabPanel>
        <TabPanel value="3">
          <Review />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
