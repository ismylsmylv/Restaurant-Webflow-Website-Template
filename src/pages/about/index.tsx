import AboutHero from "../../components/aboutHero";
import Chiefs from "../../components/chiefs";
import FeedbackAbout from "../../components/feedbackAbout";
import Footer from "../../components/footer";
import Gallery from "../../components/gallery";
import MenuTypes from "../../components/menuTypes";
import Navbar from "../../components/navbar";
import Reserve from "../../components/reserve";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <MenuTypes />
      <Chiefs />
      <FeedbackAbout />
      <Gallery />
      <Reserve />
      <Footer />
    </div>
  );
}

export default AboutPage;
