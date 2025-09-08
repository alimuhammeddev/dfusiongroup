import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

const DFGServices = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const services = [
    {
      title: "Expert Security Team",
      text: "Our professionals are trained to handle any security challenge effectively and efficiently.",
      moreText: "We ensure our guards undergo rigorous training programs for ultimate security.",
    },
    {
      title: "24/7 Surveillance",
      text: "We provide round the clock monitoring to ensure your safety and security at all times.",
      moreText: "Our advanced surveillance system includes AI based motion detection and live alerts.",
    },
    {
      title: "Advanced Technology",
      text: "Utilizing cutting edge security systems to safeguard your assets and premises.",
      moreText: "We implement biometric access, smart sensors, and cloud-based monitoring.",
    },
  ];

  return (
    <div className="services-section">
      <Typography variant="h2" className="services-title text-danger">
        Our Services
      </Typography>

      <Container className="mt-4">
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                  {expanded === index && (
                    <Card.Text className="text-black">{service.moreText}</Card.Text>
                  )}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleToggle(index)}
                  >
                    {expanded === index ? "Show Less" : "Learn More"}
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DFGServices;