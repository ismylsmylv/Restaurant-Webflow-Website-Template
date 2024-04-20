import React from "react";
import "./style.scss";
import ErrorImg from "../../assets/img/error.png";
import { useNavigate } from "react-router-dom";
type Props = {};

function NotFound({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
      <div className="heading">
        <div className="subText">404</div>
      </div>
      <div className="body">
        <div className="errorText">
          <div className="big">4</div>
          <img src={ErrorImg} alt="" />
          <div className="big">4</div>
        </div>
        <div className="infos">
          <div className="head">Whoops, Nothing delicious to find here!</div>
          <div className="info">
            The page you are looking for doesn't exist or has been moved.
          </div>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
