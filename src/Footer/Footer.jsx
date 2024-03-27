import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import logo from "../assets/evangadi-logo-footer.png";
import "./style.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid"
        style={{
          backgroundColor: "#3b455a",
          color: "rgba(213, 213, 213, 0.6)",
          lineHeight: "1.4em",
          fontSize: "14px",
          marginRight:'auto',
          marginLeft:'auto'
        }}
      >
        <div style={{maxWidth:'95%',marginRight:'0',
          marginLeft:'150px'}} className="container-fluid">

        <Container>
          <Row>
            <Col sm={12} md={4} className="my-3">
              <Row>
                <Col sm={12}>
                  <img src={logo} alt="" />
                </Col>
                <Row
                  style={{
                    width: "70%",
                    margin: "30px 0",
                    fontSize: "25px",
                  }}
                  className="footer_icons"
                >
                  <Col sm={4}>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-telegram text-white"></i>
                      <FaFacebookF className="mx-2" />
                    </Link>
                  </Col>

                  <Col sm={4}>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-linkedin text-white"></i>
                      <FaInstagram className="mx-2"/>
                    </Link>
                  </Col>
                  <Col sm={4}>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <i className="fa-brands fa-whatsapp text-white"></i>
                      <FaYoutube className="mx-2"/>
                    </Link>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col sm={12} md={4} className="my-3">
              <h5 className="text-white">Useful Link</h5>
              <ul 
                style={{
                  listStyle: "none",
                  marginLeft: "-25px",
                  lineHeight: "30px",
                  textDecoration: "none",
                }}
              >
                <li>
                  <Link href="">How it works</Link>
                </li>
                <li>
                  <Link href="">Terms of Service</Link>
                </li>
                <li>
                  <Link href="">Privacy policy</Link>
                </li>
              </ul>
            </Col>
            <Col sm={12} md={4} className="my-3">
              <h5 className="text-white">Contact Info </h5>

              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "-25px",
                  lineHeight: "30px",
                }}
              >
                <li>
                  <Link href="">Evangadi Networks</Link>
                </li>
                <li>
                  <Link href="">contact@ibrahimwondimu.com</Link>
                </li>
                <li>
                  <Link href="">+251-93-313-7590</Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
