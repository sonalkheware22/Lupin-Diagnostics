import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { faqData } from "../data";

function FAQs() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (width > 480 && width <= 768) {
        setIsTablet(true);
        setIsMobile(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttonStyles = {
    base: {
      fontWeight: "bold",
      backgroundColor: "white",
      color: "purple",
      border: "2px solid purple",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    hover: {
      backgroundColor: "purple",
      color: "white",
    },
  };

  const Button = ({ children }) => (
    <button
      style={{
        ...buttonStyles.base,
        padding: isMobile ? "10px 20px" : "15px 50px",
        fontSize: isMobile ? "0.8rem" : "1rem",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = buttonStyles.hover.backgroundColor;
        e.target.style.color = buttonStyles.hover.color;
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = buttonStyles.base.backgroundColor;
        e.target.style.color = buttonStyles.base.color;
      }}
    >
      {children}
    </button>
  );

  return (
    <section
      style={{
        padding: "20px",
        backgroundColor: "#f3e6fa",
      }}
    >
      <h2
        style={{
          textAlign: "left",
          marginBottom: "20px",
          fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "2rem",
          fontWeight: "bold",
        }}
      >
        FAQs
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "left",
          gap: isMobile ? "8px" : "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <Button>Topic 1</Button>
        <Button>Topic 2</Button>
        <Button>Topic 3</Button>
      </div>

      <Accordion
        defaultActiveKey="0"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: isMobile ? "0 10px" : "0 20px",
        }}
      >
        {faqData.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "15px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                width: "100%",
              }}
            >
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </div>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQs;
