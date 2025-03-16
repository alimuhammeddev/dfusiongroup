import { useRef, useState } from "react";
import { Navbar, Nav, Container, Image, Card, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../assets/D F G SECURTY-1.jpg";
import Services from "./Services";
import AboutDFG from "./About";
import Contact from "./Contact";
import JoinUs from "./JoinUs";

const Home = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactRef = useRef(null);

  const [showMission, setShowMission] = useState(false);
  const [showValues, setShowValues] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main-content">
        {/* Responsive Navbar */}
        <Navbar expand="md" bg="danger" variant="dark" fixed="top" collapseOnSelect>
          <Container>
            <Navbar.Brand href="#" className="fw-bold text-white">DFG Security</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
              <span className="navbar-toggler-icon" style={{ filter: "brightness(0) invert(1)" }}></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="text-white" onClick={() => scrollToSection(aboutRef)}>About Us</Nav.Link>
                <Nav.Link className="text-white" onClick={() => scrollToSection(servicesRef)}>Services</Nav.Link>
                <Nav.Link className="text-white" onClick={() => scrollToSection(reviewsRef)}>Reviews</Nav.Link>
                <Nav.Link className="text-white" onClick={() => scrollToSection(contactRef)}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Hero Section */}
        <div className="hero-container d-flex justify-content-center px-3">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-content w-100"
          >
            <Card className="border-0">
              <Card.Body className="d-flex flex-column flex-md-row align-items-center">
                {/* Left Side - Text */}
                <div className="text-center text-md-start w-100 w-md-50 mb-4 mb-md-0">
                  <h2 className="text-red fw-bold">
                    Escape to Security Excellence at <span className="text-danger">DFG Security</span>
                  </h2>
                  <p className="text-red mt-3">
                    At <strong>DFG Security</strong>, we don’t just protect—we empower. 
                    We provide cutting-edge security solutions to keep your assets, data, and operations safe.
                  </p>
                  <div className="mt-4 d-flex flex-column flex-sm-row align-items-center">
                    <button className="btn btn-danger me-sm-3 mb-3 mb-sm-0" onClick={() => scrollToSection(servicesRef)}>
                      View Our Services
                    </button>
                    <button className="btn btn-white border-danger border" onClick={() => scrollToSection(contactRef)}>
                      Contact Us
                    </button>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="w-100 w-md-50 d-flex justify-content-center justify-content-md-end">
                  <Image src={logo} alt="DFG Security Logo" width={200} className="rounded" />
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </div>

        {/* Card Section */}
        <Container className="mt-5">
          <Row className="g-4">
            <Col md={4}>
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    To provide cutting-edge security solutions that protect and empower businesses and individuals worldwide.
                  </Card.Text>
                  {showMission && (
                    <Card.Text className="mt-3 text-black">
                      We are committed to maintaining the highest standards in security services and ensuring that our clients feel safe at all times.
                    </Card.Text>
                  )}
                  <button className="btn btn-danger mt-3" onClick={() => scrollToSection(aboutRef)}>
                   Learn More
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    To be the leading security solutions provider, ensuring a safer, more secure future for all.
                  </Card.Text>
                  <button className="btn btn-danger mt-3" onClick={() => scrollToSection(servicesRef)}>
                    Learn More
                  </button>
                </Card.Body>
              </Card>
            </Col>
            
            <Col md={4}>
              <Card className="text-center shadow-lg">
                <Card.Body>
                  <Card.Title>Our Core Values</Card.Title>
                  <Card.Text>
                    Integrity & Trust <br />
                    Customer-Centric Security <br />
                    Innovation & Excellence <br />
                    Commitment to Service
                  </Card.Text>
                  {showValues && (
                    <Card.Text className="text-black">
                      We believe in maintaining a high level of integrity, prioritizing our customers, and consistently striving for excellence in all that we do.
                    </Card.Text>
                  )}
                  <button className="btn btn-danger mt-3" onClick={() => setShowValues(!showValues)}>
                    {showValues ? "Show Less" : "Learn More"}
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Sections */}
        <div ref={aboutRef} className="section-spacing">
          <AboutDFG />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={reviewsRef} className="mt-5">
          <JoinUs />
        </div>
        <div ref={contactRef} className="mt-5 text-center">
          <Contact />
          <p className="text-muted">Reach us at info@dfgroups.co.uk</p>
        </div>
      </div>
    </>
  );
};

export default Home;