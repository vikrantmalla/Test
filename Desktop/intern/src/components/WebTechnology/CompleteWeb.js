import React from 'react';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function CompleteWeb() {
  return (
    <div>
      <h1 className="text-center mb-5">Complete Web Solutions</h1>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={4} className="mb-4">
            <div className="border rounded  d-flex flex-column h-100 justify-content-between">
              <p><h5 >Custom Website Development</h5></p>
              <p className='small'>We design and develop custom websites tailored to your requirements.</p>
            </div>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <div className="border rounded  d-flex flex-column  h-100 justify-content-between">
              <p><h5 >Web Application Development</h5></p>
              <p className='small'>We build scalable, secure applications that enhance operations and drive user engagement, from interactive tools to complex systems.</p>
            </div>
          </Col>

          <Col xs={12} md={4} className="mb-4">
            <div className="border rounded  d-flex flex-column h-100 justify-content-between">
             <p><h5>Responsive Design</h5></p> 
              <p className='small'>We ensure your website looks and performs flawlessly on any device, providing a seamless experience for your users.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
