import React, { useContext, useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./context";
import logo from "../assets/logo.jpg";
//import "../features/features.scss";

const Header = () => {
  const [logoutClass, setLogoutClass] = useState("hide");
  const navigate = useNavigate();
  const { userData, setUserData, showClass, setShowClass, username } =
    useContext(UserContext);

  const handleLogout = () => {
    // clear the context
    setUserData(null);
    // redirect user to home
    navigate("/");
    setShowClass("hide");
  };

  return (
    <div className="navbar-logo fs-1 fw-bold mt-5 shadow-lg">
      <Row>
        <Col className="col-3  ps-5 ">
          <Nav className="container d-flex ">
            <Link to="/home">
              {" "}
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </Nav>
        </Col>
        <Col className="col-md-3 col-lg-6 main-title color font-family  d-flex justify-content-center align-items-center">
          You are the news
        </Col>

        <Col
          className="me-5  userloginout col-3  d-flex flex-column justify-content-center align-items-center shadow-lg "
          onMouseLeave={() => setLogoutClass("hide")}
        >
          <h2
            style={{ color: "#61B7DE" }}
            onMouseOver={() => setLogoutClass("show")}
            className={`${showClass} demo`}
          >
            {username}{" "}
          </h2>
          <div
            style={{
              backgroundColor: "#372075b9",
              width: "25%",
              border: "none",
              fontSize: "32px",
            }}
            onMouseLeave={() => setLogoutClass("hide")}
            className={logoutClass}
          >
            <Link className="text-decoration-none" to="/profile">
              <h3 className=" border-bottom">Profile</h3>
            </Link>
            <h3 className="border-bottom" onClick={handleLogout}>
              Logout{" "}
            </h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
