import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function TopHeader() {
  return (
    <div
      style={{
        backgroundColor: "#dff2eb",
        fontSize: "16px",
        color: "green",
        padding: "10px 0",
        width: "100%", // Ensure it spans the full width
      }}
    >
      <Container
        fluid
        className="d-flex justify-content-center align-items-center text-center"
      >
        <Row className="w-100">
          <Col className="d-flex justify-content-center align-items-center gap-3">
            <span role="img" aria-label="phone">
              📞
            </span>
            <strong>7030 300 400</strong>
            <span>Or</span>
            <Button variant="outline-success" className="fw-bold">
              Get a Callback
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopHeader;
