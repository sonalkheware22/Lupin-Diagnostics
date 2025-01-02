import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "react-bootstrap";
import {
  popularTests,
  popularPackages,
  presenceInCity,
  otherCities,
} from "../data";

const renderItems = (items) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "center",
      padding: "20px 0",
    }}
  >
    {items.map((item, index) => (
      <div key={index} style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontSize: "14px", textAlign: "center" }}>{item}</p>
        {index < items.length - 1 && (
          <div
            style={{
              height: "30px",
              marginLeft: "8px",
              marginRight: "8px",
              borderLeft: "2px solid #ddd",
            }}
          />
        )}
      </div>
    ))}
  </div>
);

const HealthPackages = () => {
  return (
    <div
      style={{
        backgroundColor: "#E5FEEF",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <Accordion
        defaultActiveKey="0"
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#F0FBF6",
          boxShadow: "none",
        }}
      >
        <AccordionItem eventKey="0">
          <AccordionHeader>Popular Tests</AccordionHeader>
          <AccordionBody>{renderItems(popularTests)}</AccordionBody>
        </AccordionItem>
      </Accordion>

      <Accordion
        defaultActiveKey="1"
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#E5FEEF",
          boxShadow: "none",
        }}
      >
        <AccordionItem eventKey="1">
          <AccordionHeader>Popular Health Packages</AccordionHeader>
          <AccordionBody>{renderItems(popularPackages)}</AccordionBody>
        </AccordionItem>
      </Accordion>

      <Accordion
        defaultActiveKey="2"
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#E5FEEF",
          boxShadow: "none",
        }}
      >
        <AccordionItem eventKey="2">
          <AccordionHeader>Our Presence in Your City (Mumbai)</AccordionHeader>
          <AccordionBody>{renderItems(presenceInCity)}</AccordionBody>
        </AccordionItem>
      </Accordion>
      <Accordion
        defaultActiveKey="3"
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#E5FEEF",
          boxShadow: "none",
        }}
      >
        <AccordionItem eventKey="3">
          <AccordionHeader>Our Presence in Other Cities</AccordionHeader>
          <AccordionBody>{renderItems(otherCities)}</AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HealthPackages;
