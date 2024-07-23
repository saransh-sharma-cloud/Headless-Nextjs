"use client";
import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  h1: {
    fontSize: "30px",
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  h2: {
    fontSize: "35px",
    fontWeight: 600,
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  h3: {
    fontSize: "22px",
    fontWeight: 500,
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  h6: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  body1: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
    marginBottom: "1rem",
  },
  body3: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: 1.5,
    marginBottom: "1rem",
  },
  body4: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    marginBottom: "1rem",
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
      contrastText: "#141313",
      contrastThreshold: 4.5,
    },
    secondary: {
      main: "#f50057",
      contrastThreshold: 4.5,
    },
  },
  typography: typography,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            border: `1px solid #d6d6d6`,
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: "#ff0000",
        },
        bar: {
          backgroundColor: "#fff",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
      contrastText: "#141313",
      contrastThreshold: 4.5,
    },
    secondary: {
      main: "#f50057",
      contrastThreshold: 4.5,
    },
  },
  typography: typography,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            backgroundColor:"#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid #fff`,
            },
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
