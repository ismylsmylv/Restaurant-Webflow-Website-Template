import React from "react";
import Navbar from "../../components/navbar";
import Reserve from "../../components/reserve";
import Footer from "../../components/footer";
import AboutHero from "../../components/aboutHero";
import MenuTypes from "../../components/menuTypes";
import Chiefs from "../../components/chiefs";

type Props = {};

function About({}: Props) {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <MenuTypes />
      <Chiefs />
      <Reserve />
      <Footer />
    </div>
  );
}

export default About;
