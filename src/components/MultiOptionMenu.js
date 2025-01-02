import React from "react";
import { Navbar, Nav, Container, Offcanvas, Dropdown } from "react-bootstrap";

function MultiOptionMenu() {
  const menuStyle = {
    backgroundColor: "#f3e6fa",
    padding: "20px 0",
  };

  const customToggleStyle = {
    color: "#5a2d82",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "none",
  };

  const dropdownItemStyle = {
    color: "#5a2d82",
  };

  return (
    <div style={menuStyle}>
      <Container>
        <Nav className="justify-content-between d-none d-lg-flex">
          <Dropdown className="d-inline mx-3">
            <Dropdown.Toggle style={customToggleStyle} as="span">
              Book an Appointment
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Consult a Doctor
              </Dropdown.Item>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Blood Tests
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-3">
            <Dropdown.Toggle style={customToggleStyle} as="span">
              Blood Tests & Packages
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Test Packages
              </Dropdown.Item>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Test Results
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-3">
            <Dropdown.Toggle style={customToggleStyle} as="span">
              For Doctors
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Join Us
              </Dropdown.Item>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Our Team
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-3">
            <Dropdown.Toggle style={customToggleStyle} as="span">
              Partner with Us
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Become a Partner
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-3">
            <Dropdown.Toggle style={customToggleStyle} as="span">
              Blogs
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Latest Blogs
              </Dropdown.Item>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Health Tips
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-3">
            <Dropdown.Toggle style={customToggleStyle} as="span">
              About Us
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Company
              </Dropdown.Item>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Careers
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-3">
            <Dropdown.Toggle style={customToggleStyle} as="span">
              Contact Us
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Support
              </Dropdown.Item>
              <Dropdown.Item href="/" style={dropdownItemStyle}>
                Contact Information
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Navbar expand="lg" className="d-lg-none">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Dropdown className="mb-3">
                  <Dropdown.Toggle style={customToggleStyle} as="span">
                    Book an Appointment
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Consult a Doctor
                    </Dropdown.Item>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Blood Tests
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="mb-3">
                  <Dropdown.Toggle style={customToggleStyle} as="span">
                    Blood Tests & Packages
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Test Packages
                    </Dropdown.Item>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Test Results
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="mb-3">
                  <Dropdown.Toggle style={customToggleStyle} as="span">
                    For Doctors
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Join Us
                    </Dropdown.Item>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Our Team
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="mb-3">
                  <Dropdown.Toggle style={customToggleStyle} as="span">
                    Partner with Us
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Become a Partner
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="mb-3">
                  <Dropdown.Toggle style={customToggleStyle} as="span">
                    Blogs
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Latest Blogs
                    </Dropdown.Item>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Health Tips
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="mb-3">
                  <Dropdown.Toggle style={customToggleStyle} as="span">
                    About Us
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Company
                    </Dropdown.Item>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Careers
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown className="mb-3">
                  <Dropdown.Toggle style={customToggleStyle} as="span">
                    Contact Us
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Support
                    </Dropdown.Item>
                    <Dropdown.Item href="/" style={dropdownItemStyle}>
                      Contact Information
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
      </Container>
    </div>
  );
}

export default MultiOptionMenu;
