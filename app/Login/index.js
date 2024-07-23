'use client'
import  React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <Container maxWidth="xl">
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/sign-in.jpg"
        />
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <TextField
                fullWidth
                margin="normal"
                type="email"
                placeholder="Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                sx={{ p: 0, m: 0 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <CardActions>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button
                  size="large"
                  variant="contained"
                  className="view-all-button"
                  fullWidth
                >
                  REGISTER
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  size="large"
                  variant="contained"
                  className="view-all-button"
                  fullWidth
                >
                  ALREADY HAS AN ACCOUNT
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </CardContent>
      </Card>
    </Container>
  );
}
