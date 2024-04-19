import React from "react";
import Navbar from "../../components/navbar";
import Reserve from "../../components/reserve";
import Footer from "../../components/footer";
import AboutHero from "../../components/aboutHero";

type Props = {};

function About({}: Props) {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Reserve />
      <Footer />
    </div>
  );
}

export default About;
