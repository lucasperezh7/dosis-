// src/components/Home.jsx
import React from "react";
import Header from "../components/Header";
import Introsection from "../components/IntroSection";
import TicketSection from "../components/TicketSection";
import ImageCarousel from "../components/Carrusel";
import ContactSection from "../components/Contact";

function Home() {
  return (
    <div>
      <Header />
      <Introsection />
      <ImageCarousel />
      <ContactSection />
    </div>
  );
}

export default Home;
