import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/hero";
import UpperAbout from "../../components/upperabout";
import LowerAbout from "../../components/lowerabout";
import Menu from "../../components/menu";
import Feedback from "../../components/feedback";
import Placeholder from "../../components/placeholder";
import Offers from "../../components/offers";
import Populars from "../../components/populars";
import Services from "../../components/services";
import Blog from "../../components/blog";
import Reserve from "../../components/reserve";

type Props = {};

function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Hero />
      <UpperAbout />
      <LowerAbout />
      <Menu />
      <Feedback />
      <Placeholder />
      <Offers />
      <Populars />
      <Services />
      <Blog />
      <Reserve />
    </div>
  );
}

export default Home;
