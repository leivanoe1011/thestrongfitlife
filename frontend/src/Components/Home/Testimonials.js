import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Testimonials() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <h1>LOVE NOTES</h1>
          </div>
        </div>
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item className="carousel-item text-center p-4">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Item>
              <Carousel.Item className="carousel-item text-center p-4">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Item>
              <Carousel.Item className="carousel-item text-center p-4">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Testimonials;
