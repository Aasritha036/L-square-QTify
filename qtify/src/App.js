import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./Section/Section";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";


const theme = createTheme({
  palette: {
    primary: {
      main: "#34C94B",   // Figma green
    },
    background: {
      default: "#121212", // Figma black
    },
  },
});

function App() {
  return (
    
       <ThemeProvider theme={theme}>   
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Section />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;