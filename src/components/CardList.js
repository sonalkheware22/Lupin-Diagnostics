import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChartLine, FaStar, FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { cardData } from "../data";

const iconMapping = {
  "trending-up": <FaChartLine />,
  star: <FaStar />,
  "check-circle": <FaCheckCircle />,
  "file-text": <FaFileAlt />,
};

const CardList = () => {
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
    <Container
      fluid
      className="py-4"
      style={{
        backgroundColor: "#6C4675",
        textAlign: "left",
        marginTop: "20px",
        padding: "60px",
      }}
    >
      <Row className="justify-content-left mb-3">
        <Col xs={12} md={10}>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: isMobile ? "1.5rem" : isTablet ? "2rem" : "2rem",
              color: "white",
            }}
          >
            You Choose Best-in-Class Diagnostic Experience with Lupin
            Diagnostics
          </h4>
        </Col>
      </Row>

      <Row
        className="gx-3 gy-3"
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          paddingBottom: "20px",
        }}
      >
        {cardData.map((card, i) => (
          <Col
            key={i}
            xs={10}
            sm={6}
            md={4}
            lg={3}
            className="d-inline-block"
            style={{ flex: "0 0 auto" }}
          >
            <Card
              style={{
                background:
                  "linear-gradient(176deg, rgba(88,36,100,1) 0%, rgba(108,70,117,1) 35%, rgba(194,127,210,1) 100%)",
                height: isMobile ? "180px" : "200px",
                color: "white",
                border: "1px solid white",
              }}
            >
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <div
                  style={{
                    fontSize: isMobile ? "30px" : "35px",
                    marginBottom: "10px",
                  }}
                >
                  {iconMapping[card.Icon]}
                </div>
                <Card.Title
                  style={{
                    fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
                    fontWeight: "500",
                    margin: 0,
                  }}
                >
                  {card.description1}
                </Card.Title>
                <Card.Text
                  style={{
                    fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
                    fontWeight: "500",
                  }}
                >
                  {card.description2}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;
