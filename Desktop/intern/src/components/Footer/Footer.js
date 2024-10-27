import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import location from "./location.jpeg";
import telephone from "./telephone.jpeg";
import email from "./email.jpeg";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">


<Container>
        <div className="dotted-line"></div>
      </Container>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={true} className="text-center text-md-left">
            <h4 className="ml-4 grey-text">Connect With Us</h4>
          </Col>
          <Col xs={12} md className="text-center">
            <a href="goto.com" className="mx-2">
              Facebook
            </a>
            <a href="goto.com" className="mx-2">
              LinkedIn
            </a>
            <a href="goto.com" className="mx-2">
              Twitter
            </a>
            <a href="goto.com" className="mx-2">
              Instagram
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="dotted-line"></div> <br /><br />
      </Container>

     
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={2} lg={2} className="footer-col">
            <h5 className="footer-title">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Why Us</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2} lg={2} className="footer-col">
            <h5 className="footer-title">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2} lg={2} className="footer-col">
            <h5 className="footer-title">Service</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="./components/WebTechnology/WebDevelopment">Web Development</Link>
              </li>
              <li>
                <a href="/">Software Development</a>
              </li>
              <li>
                <a href="/">App Development</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} lg={3} className="footer-col">
            <h5 className="footer-title">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <img src={telephone} alt="Telephone" style={{ width: "20px", height: "20px" }} className="mr-2" />
                <a href="tel:9818364596585">9818364596585</a>&nbsp; &nbsp;
                <a href="tel:9818364596585">9818364596585</a>
              </li>
              <li>
                <img src={email} alt="Email" style={{ width: "20px", height: "20px" }} className="mr-2" />
                <a href="mailto:highTe@gmail.com">highTe@gmail.com</a>
              </li>
            </ul>
          </Col>
         <Col xs={12} md={3} lg={3} className="footer-col">
  <h5 className="footer-title">Location</h5>
  <ul className="list-unstyled">
    <li>
      <img src={location} alt="Location" style={{ width: "20px", height: "20px", marginRight: "10px" }} />
      Putalisadak, Kathmandu
    </li>
  </ul>
</Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <p className="footer-copyright">
             <br /><br />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;