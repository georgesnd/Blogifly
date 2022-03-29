import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer color fixed-bottom">
      <Row>
        <Col className="col-4  d-flex justify-content-center align-items-center">
          © 2022 Copyright:
          <Link className="footer-link" to="/home">Blinker.com</Link>
        </Col>
        <Col className="col-4 ">
          <div className=" p-4 pb-0">
            <section className="mb-4 text-center">
              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#3b5998" }}
                href="https://www.facebook.com/profile.php?id=100079474235070"
                role="button"
                target="blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#55acee" }}
                href="https://twitter.com/Blinker_VICT"
                role="button"
                target="blank"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/blinker_vict/"
                role="button"
                target="blank"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#0082ca" }}
                href="https://www.linkedin.com/in/blink-blinker-36a983234/"
                role="button"
                target="blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-primary btn-floating m-1"
                style={{ backgroundColor: "#333333" }}
                href="https://github.com/blinker-vict"
                role="button"
                target="blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </section>
          </div>
        </Col>
        <Col className="col-4  d-flex justify-content-center align-items-center">
          Designed by VICT
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;