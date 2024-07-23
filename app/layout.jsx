"use client";
import { useState } from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import NavBar from "./components/NavBar";
import "./globals.css";
import { darkTheme, lightTheme } from "@/Theme/palette";
import { ApolloProvider } from "@apollo/client";
import Footer from "./components/Footer";
import client from "@/client";
import { ThemeProvider } from "@mui/material";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  

  return (
    <html lang="en">
      <body>
        <ApolloProvider client={client}>
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            {/* <CssBaseline /> */}
            <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            {children}
            <Footer />
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
