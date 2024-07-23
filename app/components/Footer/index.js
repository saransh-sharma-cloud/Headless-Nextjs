"use client";
import React from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        color: "black",
        py: 8,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Box sx={{ mb: 2 }} />
            <Typography variant="body2" paragraph>
              Our Shops
            </Typography>
            <Typography variant="body2" paragraph>
              Contact
            </Typography>
            <Typography variant="body2" paragraph>
              Artists
            </Typography>
            <Typography variant="body2" paragraph>
              Local Giving
            </Typography>
            <Typography variant="body2" paragraph>
              Press
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Customer Services
            </Typography>
            <Box sx={{ mb: 2 }} />
            <Typography variant="body2" paragraph>
              FAQs
            </Typography>
            <Typography variant="body2" paragraph>
              Store Locator
            </Typography>
            <Typography variant="body2" paragraph>
              Returns
            </Typography>
            <Typography variant="body2" paragraph>
              Shipping Information
            </Typography>
            <Typography variant="body2" paragraph>
              Wholesale
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box display="flex" justifyContent="flex-start">
              <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; 2024. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
