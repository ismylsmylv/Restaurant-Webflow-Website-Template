import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import NotFound from "../../components/notfound";

function ErrorPage() {
  return (
    <div className="ErrorPage">
      <Navbar />
      <NotFound />
      <Footer />
    </div>
  );
}

export default ErrorPage;
