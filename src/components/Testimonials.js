import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { testimonials } from "../data"; // Assuming you're importing the data from a file

function Testimonials() {
  return (
    <Container className="py-4">
      <Row className="gy-4">
        <Col
          md={4}
          className="d-flex flex-column justify-content-center text-center text-md-left"
          style={{ backgroundColor: "#F0FBF6" }}
        >
          <h1 className="text-center" style={{ color: "#333333" }}>
            What People Say About Us
          </h1>

          <div className="mt-3 d-flex justify-content-center">
            <button
              className="arrowButton"
              style={{
                marginRight: "10px",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              &lt;
            </button>
            <button
              className="arrowButton"
              style={{
                marginLeft: "10px",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              &gt;
            </button>
          </div>
        </Col>

        <Col md={8}>
          <Row className="d-flex justify-content-start">
            {testimonials.map((testimonial, i) => (
              <Col xs={12} sm={6} md={4} key={i} className="mb-4">
                <Card className="h-100">
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Text className="mb-3" style={{ fontSize: "16px" }}>
                      {testimonial.description}
                    </Card.Text>

                    <hr className="my-3" />

                    <div className="mt-auto d-flex align-items-center">
                      <Card.Img
                        src={testimonial.image}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                        alt="User"
                      />
                      <div>
                        <Card.Subtitle className="text-muted">
                          {testimonial.name}
                        </Card.Subtitle>
                        <small className="text-muted">
                          {testimonial.location}
                        </small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimonials;
