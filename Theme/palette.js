"use client";
import { createTheme } from "@mui/material/styles";

const typography = {
  fontFamily: '"Plus Jakarta Sans", sans-serif',
  h1: {
    fontSize: "30px",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: "35px",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: "22px",
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.2,
  },
  h6: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: 1.2,
  },
  body1: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body3: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: 1.5,
  },
  body4: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
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
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#000",
        },
        thumb: {
          color: "#000",
        },
        rail: {
          color: "#d6d6d6", 
        },
        track: {
          color: "#000", 
        },
        valueLabel: {
          backgroundColor: "#000", 
          color: "#fff",
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
            backgroundColor: "#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              border: `1px solid #fff`,
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
        thumb: {
          color: "#fff",
        },
        rail: {
          color: "#888",
        },
        track: {
          color: "#fff",
        },
        valueLabel: {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
