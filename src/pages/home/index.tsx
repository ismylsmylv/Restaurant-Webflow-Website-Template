import Blog from "../../components/blog";
import Feedback from "../../components/feedback";
import Footer from "../../components/footer";
import Hero from "../../components/hero";
import LowerAbout from "../../components/lowerabout";
import Menu from "../../components/menu";
import Navbar from "../../components/navbar";
import Offers from "../../components/offers";
import Placeholder from "../../components/placeholder";
import Populars from "../../components/populars";
import Reserve from "../../components/reserve";
import Services from "../../components/services";
import UpperAbout from "../../components/upperabout";

function Home() {
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
      <Footer />
    </div>
  );
}

export default Home;
