import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import python from "./python.jpeg";
import net from "./asp.jpeg";
import laravel from "./laravel.jpeg";

export default function Services() {
  return (
    <div style={{ marginTop: "10vw" }}>
      <p>
        {" "}
        <h1 style={{ display: "inline-block" }}>Web Technology</h1>{" "}
        <h6 style={{ display: "inline-block" }}>Services</h6>
      </p>
      <p>
        Unlock the full potential of your online presence with our cutting-edge
        web technology solutions.
      </p>

      <div className="container justify-content-center flex-column">
        <div style={{ marginBottom: "5vw" }}>
          <Container>
            <Row className="justify-content-center">
              <Col
                xs={6}
                md={3}
                className="small-margin d-flex justify-content-center position-relative"
              >
                <div className="border rounded h-100 d-flex flex-column justify-content-between">
                  <Image src={python} rounded className="w-100 h-auto" />
                  <div className="overlay">
                    <p className="overlay-text">Our proficiency in Python enables us to develop versatile and efficient 
                      web applications. Python's clean syntax and powerful libraries, such as Django and Flask, allow us 
                      to create scalable and maintainable solutions quickly. <br /> <br />
                      Whether building robust backend systems or integrating with various APIs, Python's flexibility
                      and efficiency ensure that we deliver high-quality, customized web solutions that meet your business objectives.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                xs={6}
                md={3}
                className="small-margin d-flex justify-content-center position-relative"
              >
                <div className="border rounded h-100 d-flex flex-column justify-content-between">
                  <Image src={net} rounded className="w-100 h-auto" />
                  <div className="overlay">
                    <p className="overlay-text">With ASP.NET Core, we build modern, high-performance web applications that 
                      are both scalable and secure. Its cross-platform capabilities and robust framework allow us to create 
                      dynamic websites and complex enterprise solutions with speed and reliability. <br /> <br />
                      Leveraging ASP.NET Core's efficient architecture, including its powerful dependency injection and modularity,
                      we deliver innovative, responsive solutions tailored to meet your business requirements.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                xs={6}
                md={3}
                className="small-margin d-flex justify-content-center position-relative"
              >
                <div className="border rounded h-100 d-flex flex-column justify-content-between">
                  <Image src={laravel} rounded className="w-100 h-auto" />
                  <div className="overlay">
                    <p className="overlay-text">Our expertie in PHP Laravel allows us to develop sophisticated web applications with
                      efficiency and precision. <br /> <br />
                      Laravel's elegant syntax, combined with its robust features such as seamless routing, built-in authentication, and
                      powerful ORM, enables us to deliver scalable and secure solutions. From dynamic websites to complex enterprise systems, 
                      we utilize Laravel's capabilities to build high-performance applications tailored to meet your business needs.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
