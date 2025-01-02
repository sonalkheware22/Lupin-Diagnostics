import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import { BsFillDropletFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { MdNoFood } from "react-icons/md";
import { testData } from "../data";

const BookedTest = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 576);
      setIsTablet(width > 576 && width <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="d-flex flex-column align-items-center py-4">
      <Row className="w-100 mb-3">
        <Col md={6}>
          <h2
            style={{
              fontSize: isTablet ? "1.75rem" : "2rem",
              fontWeight: "bold",
              color: "#333333",
            }}
          >
            Frequently Booked Tests
          </h2>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Button variant="outline-success" style={{ fontWeight: "bold" }}>
            View All Tests
          </Button>
        </Col>
      </Row>

      <Row className="w-100 d-flex justify-content-start overflow-auto">
        {testData.map((test, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <Card className="h-100">
              <Card.Body
                className="d-flex flex-column flex-md-row"
                style={{ backgroundColor: "#6c4675", color: "white" }}
              >
                <Col className="p-0">
                  <h6 className="text-white">{test.description1}</h6>
                  <h6 className="text-white">{test.description2}</h6>
                  <h6 className="text-white">{test.description3}</h6>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <h5
                    style={{
                      fontWeight: "700",
                      fontSize: isMobile ? "1.5rem" : "2rem",
                    }}
                  >
                    {test.rate}
                  </h5>
                </Col>
              </Card.Body>

              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center">
                    <BsFillDropletFill className="me-2" />
                    {test.detail1}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <FaClock className="me-2" />
                    {test.detail2}
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <MdNoFood className="me-2" />
                    {test.detail3}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-between">
                <Button
                  variant="outline-success"
                  size="sm"
                  style={{ borderStyle: "none", fontWeight: "bold" }}
                >
                  Know More
                </Button>
                <Button
                  variant="outline-success"
                  size="sm"
                  style={{ fontWeight: "bold" }}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookedTest;
