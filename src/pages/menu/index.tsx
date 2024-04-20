import Footer from "../../components/footer";
import Menu from "../../components/menu";
import Navbar from "../../components/navbar";
import Placeholder from "../../components/placeholder";
import Reserve from "../../components/reserve";

function MenuPage() {
  return (
    <>
      <Navbar />
      <Menu menuType={"Starters"} />
      <Placeholder imageLink="https://s3-alpha-sig.figma.com/img/e0b3/d3e8/2214541098ec070a3c69240eb0b06e30?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDQ~TD-wIWWjR0aYFfI10sgRH6TXDSeYECWTsBhL7IApFLd~6JFH1Sv8Sy7oij5NLoEg~1U2zoFimkqJIn3-0MhzntZ2TO4lKa5iofbHGOkGlSsVbkYE~OPLPXvcIzL2TuDX8JSLyH2KYbAVNlx6YQ6zwYQDo0G1h1hl2nfsRpd2sLXoXsqJ0OPV7YLofKHFQ~zyncllWZ0yyA~G6yBofv9MhtY0Xx-lmvtTeBUl4D7Zp35wWdf5NmmH3HZNCGBxOJHJOn4u6od0Ko9NWVf2t6zSrALkkDLUxADBnZyDxbW4QdTWLrkYCifQNoqhpHWG3kTqH9WR9Mo1pT4o-4U8rg__" />
      <Menu menuType={"Main Dish"} />
      <Placeholder imageLink="https://s3-alpha-sig.figma.com/img/5adf/9c61/a0755fec5c354f51001cf57cc9fb99f1?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WV8vGrAWl05-Zn9CIHuW3rJhS7zwM6PQuIDrbuTLJZyVW8zlx0jAsxT~sI0Zj8P8R63dnDzDd4fsglOiErcURLJ-0ymEZkZ7wXZyZb1LWzOGZc5ZfKVVgUa~1cnryFtO6RqQCuUJ3Q-HCEd3JDYGSQ6u1A1hX7IX1wiJl5ofFV3HE2ImOwptAwrHCmcQlzQGmplHD4e94wkjKxwsQoeq0viETBsNUNVmAi2oQccJ1K7HyX~NYda-mEUCIueFkQmlazKw-WSE0PqIcbJuDFIrx72mry6d~wZDO07pDnjgukfUa4cT0RmXY3bl6EgGP5LK8ps5ULEua6tA-D~6qpo4jA__" />
      <Menu menuType={"Dessert"} />

      <Reserve />
      <Footer />
    </>
  );
}

export default MenuPage;
