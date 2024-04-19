import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import UpperAbout from "../../components/upperabout";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <UpperAbout />
      home
    </div>
  );
}

export default Home;
