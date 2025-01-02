import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import { BsFillDropletFill } from "react-icons/bs";
import {
  FaClock,
  FaClipboardCheck,
  FaStethoscope,
  FaDownload,
} from "react-icons/fa";
import { MdNoFood } from "react-icons/md";
import { packagesData } from "../data";

const CheckupPackages = () => {
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
    <Container fluid>
      <Row className="text-center py-4" style={{ backgroundColor: "#6C4675" }}>
        <Col>
          <FaClipboardCheck size={isMobile ? "1.5rem" : "2rem"} color="white" />
          <h5 style={{ color: "white" }}>Book a Test</h5>
        </Col>
        <Col>
          <FaStethoscope size={isMobile ? "1.5rem" : "2rem"} color="white" />
          <h5 style={{ color: "white" }}>Health Packages</h5>
        </Col>
        <Col>
          <FaDownload size={isMobile ? "1.5rem" : "2rem"} color="white" />
          <h5 style={{ color: "white" }}>Download Report</h5>
        </Col>
      </Row>

      <Container className="d-flex flex-column align-items-center py-4">
        <Row className="w-100 mb-3 align-items-center">
          <Col md={6}>
            <h2
              style={{
                fontSize: isTablet ? "1.75rem" : "2rem",
                color: "#333333",
              }}
            >
              Popular Health Checkup Packages
            </h2>
          </Col>
          <Col
            md={6}
            className="d-flex flex-column flex-md-row justify-content-end gap-2"
          >
            <Button variant="outline-success" style={{ fontWeight: "bold" }}>
              Create Your Package
            </Button>
            <Button variant="outline-success" style={{ fontWeight: "bold" }}>
              Compare Packages
            </Button>
            <Button variant="outline-success" style={{ fontWeight: "bold" }}>
              View All
            </Button>
          </Col>
        </Row>

        <Row className="w-100 d-flex justify-content-start overflow-auto">
          {packagesData.map((packageItem, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card className="h-100">
                <Card.Body
                  className="d-flex flex-column flex-md-row"
                  style={{ backgroundColor: "#6c4675", color: "white" }}
                >
                  <Col className="p-0">
                    <h6 className="text-white">{packageItem.description1}</h6>
                    <h6 className="text-white">{packageItem.description2}</h6>
                    <h6 className="text-white">{packageItem.description3}</h6>
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <h5
                      style={{
                        fontWeight: "700",
                        fontSize: isMobile ? "1.5rem" : "2rem",
                      }}
                    >
                      {packageItem.rate}
                    </h5>
                  </Col>
                </Card.Body>

                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex align-items-center">
                      <BsFillDropletFill className="me-2" />
                      {packageItem.detail1}
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <FaClock className="me-2" />
                      {packageItem.detail2}
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-center">
                      <MdNoFood className="me-2" />
                      {packageItem.detail3}
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
    </Container>
  );
};

export default CheckupPackages;
