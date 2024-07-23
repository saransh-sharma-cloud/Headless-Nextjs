import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Grid, Typography, Drawer, Rating, TextField } from "@mui/material";

export default function Review() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [rating, setRating] = useState(4);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1">Reviews</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ color: "#8a8a8a" }}>
            There are no reviews yet.
          </Typography>
        </Grid>
        <Grid item xs={12} mt={4}>
          <Button
            size="small"
            variant="contained"
            className="view-all-button"
            onClick={toggleDrawer(true)}
          >
            Write A Review
          </Button>
        </Grid>
      </Grid>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 800, padding: 2 }}
          role="presentation"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
        >
          <Grid container mt={4} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body4" sx={{ color: "#8a8a8a" }}>
                Your email address will not be published. Required fields are
                marked
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body4">
                Your rating
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                />
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder="Your Reviews *"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={6}>
              <TextField placeholder="Name *" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField placeholder="Email *" variant="outlined" fullWidth />
            </Grid>

            <Grid item xs={12} mt={2}>
              <Button
                size="large"
                variant="outlined"
                className="view-all-button"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Drawer>
    </Box>
  );
}
