import React, { useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { videoCards } from "../data";

const Videos = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Container className="py-4">
      <Row className="align-items-center mb-3">
        <Col xs={12} md={6} className="d-flex align-items-center">
          <h2 style={{ color: "#333333", fontSize: "1.5rem" }}>
            Explore Lupin Diagnostics Videos
          </h2>
        </Col>
        <Col
          xs={12}
          md={6}
          className="text-end d-flex justify-content-end align-items-center"
          style={{
            flexWrap: "wrap",
            gap: "8px",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Button
            variant="outline-secondary"
            className="me-2"
            size="sm"
            onClick={scrollLeft}
          >
            <ChevronLeft size={18} />
          </Button>
          <Button
            variant="outline-secondary"
            className="me-2"
            size="sm"
            onClick={scrollRight}
          >
            <ChevronRight size={18} />
          </Button>
          <Button
            variant="outline-success"
            size="sm"
            style={{
              fontWeight: "bold",
              padding: "6px 12px",
              fontSize: "0.875rem",
            }}
          >
            View All
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            ref={scrollRef}
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "16px",
              scrollBehavior: "smooth",
              padding: "10px 0",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {videoCards.map((card, i) => (
              <Card
                key={i}
                className="shadow-sm"
                style={{
                  minWidth: "300px",
                  maxWidth: "350px",
                  flexShrink: 0,
                  height: "400px",
                }}
              >
                <Card.Img
                  variant="top"
                  src={card.image}
                  alt={card.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Text
                    className="fw-semibold mb-2"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {card.description}
                  </Card.Text>
                  <hr />
                  <Card.Text className="text-muted">
                    {card.description1}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Videos;
