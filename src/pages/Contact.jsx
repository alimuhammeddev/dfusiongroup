import { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Reset errors and success message
    setErrors({});
    setSuccessMessage("");

    // Validate form inputs
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format.";
    if (!message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Send data to the backend
      console.log(formData)
      const response = await axios.post("http://localhost:9000/api/contact", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrors({ api: "Failed to send the message. Please try again later." });
      }
    } catch (error) {
      setErrors({ api: "An error occurred while sending the message." });
    }
  };

  return (
    <Container className="mt-5 contact-section">
      <motion.h2
        className="text-center section-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>
      <p className="text-center text-muted">
        Have any questions? Reach out to us, and we'll respond as soon as possible.
      </p>

      <Row className="mt-5">
        {/* Contact Info */}
        <Col md={5} className="contact-info text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h4>
              <FaMapMarkerAlt /> Our Address
            </h4>
            <p>Unit 805, The Gateway 73-79 Broad Street, Sheffield S2 5TN</p>
            <h4>
              <FaEnvelope /> Email Us
            </h4>
            <p>info@dfgroups.co.uk</p>
            <h4>
              <FaPhone /> Call Us
            </h4>
            <p>+44 0 7555 078331</p>
            <p>+44 0 7576 399541</p>
          </motion.div>
        </Col>

        {/* Contact Form */}
        <Col md={7}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {errors.api && <Alert variant="danger">{errors.api}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            <Form className="contact-form p-4 shadow-lg rounded" onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="danger" type="submit" className="mt-3 w-100">
                Send Message
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
