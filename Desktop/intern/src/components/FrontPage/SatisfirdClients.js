import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Rating() {
  return (
    <div
      className="container text-white border border-dark w-100 h-100 p-3"
      style={{ backgroundColor: "purple" }} // Valid hexadecimal color
    >
      <Container>
        <Row>
      <Col>
      <h5>Satisfied Client</h5>
      <h5>0</h5>
      </Col>
            
         
          <Col>
            <h5>Project Done</h5>
            <h5>0</h5>
          </Col>
          <Col>
            <h5>Our Team</h5>
            <h5>0</h5>
          </Col>
          <Col>
            <h5>Experience Year</h5>
            <h5>0</h5>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}