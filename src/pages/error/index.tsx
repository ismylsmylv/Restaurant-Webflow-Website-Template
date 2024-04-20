import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import NotFound from "../../components/notfound";
type Props = {};

function ErrorPage({}: Props) {
  return (
    <div className="ErrorPage">
      <Navbar />
      <NotFound />
      <Footer />
    </div>
  );
}

export default ErrorPage;
