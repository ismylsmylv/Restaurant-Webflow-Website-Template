import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import UpperAbout from "../../components/upperabout";
import LowerAbout from "../../components/lowerabout";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <UpperAbout />
      <LowerAbout />
      home
    </div>
  );
}

export default Home;
