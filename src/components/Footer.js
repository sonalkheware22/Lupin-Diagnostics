import React from "react";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/logo-white.png";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#6C4675", color: "white", padding: "20px" }}
    >
      <Container fluid>
        <Row
          className="align-items-center text-center text-md-start mb-4"
          style={{ rowGap: "20px", justifyContent: "space-between" }}
        >
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0"
          >
            <Image src={logo} height="60px" alt="Lupin Diagnostics Logo" />
          </Col>

          <Col xs={12} md={6} className="text-center text-md-end">
            <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Contact Us:{" "}
              <span style={{ fontWeight: "bold" }}>+91 7030 300 400</span>
            </h4>
            <div
              className="d-flex justify-content-center justify-content-md-end mt-2"
              style={{
                flexWrap: "wrap",
                gap: "15px",
                rowGap: "10px",
              }}
            >
              <FaFacebookF
                style={{
                  fontSize: "28px",
                  color: "white",
                  backgroundColor: "#9D65A8",
                  borderRadius: "50%",
                  padding: "6px",
                }}
              />
              <FaInstagram
                style={{
                  fontSize: "28px",
                  color: "white",
                  backgroundColor: "#9D65A8",
                  borderRadius: "50%",
                  padding: "6px",
                }}
              />
              <FaTwitter
                style={{
                  fontSize: "28px",
                  color: "white",
                  backgroundColor: "#9D65A8",
                  borderRadius: "50%",
                  padding: "6px",
                }}
              />
              <FaLinkedinIn
                style={{
                  fontSize: "28px",
                  color: "white",
                  backgroundColor: "#9D65A8",
                  borderRadius: "50%",
                  padding: "6px",
                }}
              />
              <FaYoutube
                style={{
                  fontSize: "28px",
                  color: "white",
                  backgroundColor: "#9D65A8",
                  borderRadius: "50%",
                  padding: "6px",
                }}
              />
            </div>
          </Col>
        </Row>

        <hr style={{ borderColor: "white" }} />

        <Row className="mb-4">
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5>Book an Appointment</h5>
            <Nav className="flex-column">
              <Nav.Item>Book a Home Collection</Nav.Item>
              <Nav.Item>Book a Centre Visit</Nav.Item>
              <Nav.Item>Create Your Own Package</Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5>Blood Tests & Packages</h5>
            <Nav className="flex-column">
              <Nav.Item>Lupikavach Health Packages</Nav.Item>
              <Nav.Item>Disease | Organ | Habit wise Tests</Nav.Item>
              <Nav.Item>Directory of Services (DOS)</Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5>For Doctors</h5>
            <Nav className="flex-column">
              <Nav.Item>Pathology Core Facilities</Nav.Item>
              <Nav.Item>Knowledge Centre</Nav.Item>
              <Nav.Item>Doctor V-Logs</Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5>Partner With Us</h5>
            <Nav className="flex-column">
              <Nav.Item>Lupimitra (Franchise)</Nav.Item>
              <Nav.Item>Lupi Plus</Nav.Item>
              <Nav.Item>Hospital Laboratory Management</Nav.Item>
              <Nav.Item>Retail Laboratory Management</Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5>About Us</h5>
            <Nav className="flex-column">
              <Nav.Item>About Lupin Diagnostics</Nav.Item>
              <Nav.Item>Why Lupin Diagnostics</Nav.Item>
              <Nav.Item>Our Management</Nav.Item>
              <Nav.Item>Our Doctors</Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <Nav className="flex-column">
              <Nav.Item>Accreditations & Certifications</Nav.Item>
              <Nav.Item>Compliance</Nav.Item>
              <Nav.Item>Newsroom</Nav.Item>
              <Nav.Item>Logistics</Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5>Contact Us</h5>
            <Nav className="flex-column">
              <Nav.Item>Feedback</Nav.Item>
              <Nav.Item>Reach out to us</Nav.Item>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-3">
            <h5>Center Locator</h5>
            <Nav className="flex-column">
              <Nav.Item>Blogs</Nav.Item>
              <Nav.Item>Careers</Nav.Item>
              <Nav.Item>Informative Videos</Nav.Item>
            </Nav>
          </Col>
        </Row>

        <hr style={{ borderColor: "white" }} />

        <Row>
          <Col>
            <Nav className="flex-column flex-md-row justify-content-left">
              <Nav.Item>
                <Nav.Link
                  href="#"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Terms of Use
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Privacy Policy
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  Cookie Policy
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
