import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import UpperAbout from "../../components/upperabout";
import LowerAbout from "../../components/lowerabout";
import Menu from "../../components/menu";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <UpperAbout />
      <LowerAbout />
      <Menu />
      home
    </div>
  );
}

export default Home;
