import React from "react";
import Navbar from "../../components/navbar";
import Reserve from "../../components/reserve";
import Footer from "../../components/footer";
import AboutHero from "../../components/aboutHero";
import MenuTypes from "../../components/menuTypes";

type Props = {};

function About({}: Props) {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <MenuTypes />
      <Reserve />
      <Footer />
    </div>
  );
}

export default About;
