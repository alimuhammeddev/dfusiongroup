import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // disable button

    // const res = await fetch(import.meta.env.VITE_API_URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setShowPopup(true);
      // toast.success("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    } else {
      console.log("Failed to send. Try again.");
      toast.error("Failed to send. Try again.");
    }

    setLoading(false); // re-enable button after response
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
        Have any questions? Reach out to us, and we&apos;ll respond as soon as
        possible.
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
            <p>Unit 805,The Gateway 73-79 broad street, Sheffield S2 5TN</p>
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
            {showPopup && (
              <Alert
                variant="success"
                className="position-fixed top-0 start-50 bg-white text-danger translate-middle-x mt-3"
                style={{ zIndex: 1050 }}
              >
                Message sent successfully!
              </Alert>
            )}

            <Form
              className="contact-form p-4 shadow-lg rounded"
              onSubmit={handleSubmit}
            >
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group controlId="message" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                variant="danger"
                type="submit"
                className="mt-3 w-100"
                disabled={loading} // disable while submitting
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
