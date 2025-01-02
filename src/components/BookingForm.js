import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { BsChat } from "react-icons/bs";
import Img from "../assets/image.jpg";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name, "Contact:", contact);
  };

  return (
    <Container className="d-flex flex-column align-items-center py-4 px-3">
      <Row className="w-100">
        <Col xs={12} md={8} className="d-flex justify-content-center mb-4">
          <img
            alt="Header"
            src={Img}
            style={{
              maxHeight: "380px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Col>

        <Col xs={12} md={4}>
          <Card style={{ boxShadow: "2px 2px 5px #cfcfcf", height: "380px" }}>
            <Card.Header
              className="text-center"
              style={{
                backgroundColor: "#6C4675",
                color: "white",
                padding: "20px",
                fontWeight: "bold",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Book a Free Home Collection!
            </Card.Header>

            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                position: "relative",
              }}
            >
              <Form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-5"
              >
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      padding: "15px",
                      fontSize: "16px",
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formContact">
                  <Form.Control
                    type="text"
                    placeholder="Enter your contact number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    style={{
                      padding: "15px",
                      fontSize: "16px",
                    }}
                  />
                </Form.Group>

                <Button
                  variant="outline-success fw-bold"
                  type="submit"
                  style={{
                    padding: "8px 20px",
                    fontSize: "14px",
                    width: "auto",
                    marginLeft: "0",
                    marginTop: "10px",
                  }}
                >
                  Submit
                </Button>
              </Form>

              <Button
                variant="success"
                className="d-flex align-items-center position-absolute"
                style={{
                  backgroundColor: "green",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  bottom: "10px",
                  right: "20px",
                  transform: "translateY(80%)",
                }}
              >
                <BsChat className="me-2" />
                Chat with us
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
