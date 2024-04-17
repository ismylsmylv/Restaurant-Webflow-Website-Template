import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  const navigate = useNavigate();
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        about
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </button>
      {/* <Link to={"/"}>home</Link>
      <Link to={"/about"}>about</Link> */}
    </div>
  );
}

export default Navbar;
