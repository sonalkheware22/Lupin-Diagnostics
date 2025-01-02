import React, { useState } from "react";
import {
  Navbar,
  Button,
  Form,
  FormControl,
  InputGroup,
  Badge,
  Offcanvas,
} from "react-bootstrap";
import {
  BsGeoAlt,
  BsCaretDownFill,
  BsSearch,
  BsBuilding,
  BsCart,
  BsPerson,
} from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar bg="light" expand="lg" className="px-4">
            {/* Logo for all views */}
            <Navbar.Brand href="/">
              <img
                src="https://lupindiagnostics.com/assets/images/Lupin%20Logo-01.svg"
                alt="Lupin Diagnostics Logo"
                style={{ height: "85px" }}
              />
            </Navbar.Brand>

            {/* Hamburger menu for mobile/tablet */}
            <Button
              variant="light"
              className="d-lg-none ms-auto"
              onClick={toggleOffcanvas}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>

            {/* Desktop View */}
            <div className="d-none d-lg-flex w-100 justify-content-between align-items-center">
              {/* Location Button */}
              <Button
                variant="link"
                className="text-dark d-flex align-items-center"
              >
                <BsGeoAlt className="me-2" />
                Mumbai
                <BsCaretDownFill className="ms-2" />
              </Button>

              {/* Search Bar */}
              <Form className="d-flex mx-4" style={{ width: "30%" }}>
                <InputGroup>
                  <FormControl
                    placeholder="Search tests/packages"
                    aria-label="Search tests/packages"
                  />
                  <Button variant="outline-secondary">
                    <BsSearch />
                  </Button>
                </InputGroup>
              </Form>

              {/* Center Locator */}
              <Button
                variant="link"
                className="text-dark d-flex align-items-center"
              >
                <BsBuilding className="me-2" />
                Center Locator
              </Button>

              {/* Cart */}
              <Button
                variant="link"
                className="text-dark d-flex align-items-center position-relative"
              >
                <Badge
                  bg="secondary"
                  className="position-absolute top-0 start-100 translate-middle p-1"
                ></Badge>
                <BsCart className="me-2" />
                Cart
              </Button>

              {/* Customer Login */}
              <Button
                variant="success"
                className="d-flex align-items-center ms-3"
              >
                <BsPerson className="me-2" />
                Customer Login
              </Button>
            </div>

            {/* Offcanvas Menu for Mobile/Tablet */}
            <Offcanvas
              show={showOffcanvas}
              onHide={toggleOffcanvas}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Button
                  variant="link"
                  className="text-dark d-flex align-items-center mb-3"
                >
                  <BsGeoAlt className="me-2" />
                  Mumbai
                  <BsCaretDownFill className="ms-2" />
                </Button>
                <Form className="d-flex mb-3">
                  <InputGroup>
                    <FormControl
                      placeholder="Search tests/packages"
                      aria-label="Search tests/packages"
                    />
                    <Button variant="outline-secondary">
                      <BsSearch />
                    </Button>
                  </InputGroup>
                </Form>
                <Button
                  variant="link"
                  className="text-dark d-flex align-items-center mb-3"
                >
                  <BsBuilding className="me-2" />
                  Center Locator
                </Button>
                <Button
                  variant="link"
                  className="text-dark d-flex align-items-center mb-3 position-relative"
                >
                  <Badge
                    bg="secondary"
                    className="position-absolute top-0 start-100 translate-middle p-1"
                  ></Badge>
                  <BsCart className="me-2" />
                  Cart
                </Button>
                <Button variant="success" className="d-flex align-items-center">
                  <BsPerson className="me-2" />
                  Customer Login
                </Button>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
