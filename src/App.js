import { createTheme, ThemeProvider } from "@mui/material";
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import OurApps from "./components/OurApps";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2196f3",
      },
      secondary: {
        main: "#12005e",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
        <Hero />
      {/* <Routes /> */}
        <AboutUs />
        <Services />
        <OurApps />
        <Testimonial />
        <Blog />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
