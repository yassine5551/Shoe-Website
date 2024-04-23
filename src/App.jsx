import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  })
  return (
    <>

      <Navbar />
      <Hero />
     
    </>
  );
}

export default App;
