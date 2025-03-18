import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import cert1 from "../assets/sia.png";
import cert2 from "../assets/shake.png";
import cert3 from "../assets/check.png";
import cert4 from "../assets/24seven.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="text-center text-md-start">
          {/* Logo and Description */}
          <Col md={3} className="footer-logo">
            <h3 className="footer-brand">DFG Security</h3>
            <p className="footer-text">
              Providing innovative security solutions to protect your business
              and assets.
            </p>
          </Col>

          <Col md={3} className="d-flex flex-column mb-4 mb-md-0">
            <h4 className="footer-title d-flex">Certifications</h4>
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex flex-column text-center">
                <img src={cert1} alt="SIA Approved Contractor" width={50} height={50} />
                <small>SIA Approved Contractor</small>
              </div>
              <div className="d-flex flex-column text-center">
                <img src={cert2} alt="SafeContractor Approved" width={50} height={50} />
                <small>SafeContractor Approved</small>
              </div>
              <div className="d-flex flex-column text-center">
                <img src={cert3} alt="CHAS Approved Contractor" width={50} height={50} />
                <small>ISO9001 Quality Assured Company</small>
              </div>
              <div className="d-flex flex-column text-center">
                <img src={cert4} alt="CCTV Systems" width={50} height={50} />
                <small>CCTV Systems</small>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <h4 className="footer-title">Sectors</h4>
            <p className="footer-text">Warehouse</p>
            <p className="footer-text">Construction</p>
            <p className="footer-text">Corporate</p>
            <p className="footer-text">Industrial</p>
            <p className="footer-text">Retail</p>
            <p className="footer-text">Residential</p>
            <p className="footer-text">Site Security</p>
          </Col>

          {/* Social Media Links */}
          <Col md={3}>
            <h4 className="footer-title">Stay Connected</h4>
            <p className="footer-text">
              Follow us on our social media platforms.
            </p>
            <div className="social-icons d-flex gap-3 mt-3">
              <a
                href="https://www.instagram.com/dfg_security_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.facebook.com/dfggroup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@dfg.security"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={24} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="contact-info mt-4">
              <h4 className="footer-title">Contact Us</h4>
              <p className="footer-text">Email: info@dfgroups.co.uk</p>
              <p className="footer-text">Phone: +44 0 7555 078331</p>
              <p className="footer-text">Phone: +44 0 7576 399541</p>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider mt-4" />
        <p className="footer-copyright text-center">
          © {new Date().getFullYear()} DFG Security. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;