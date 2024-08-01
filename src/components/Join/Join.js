import "./Join.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Join() {
  return (
    <section className="join">
      <Container>
        <Row>
          <Col md={6}>
            <div className="join-content">
              <h2 className="join-title">Join Us</h2>
              <p className="join-word">
                Join us on this journey to better health. Whether you’re just
                starting your fitness journey or looking to take your health to
                the next level, Figorate is here to support you every step of
                the way. Together, we can achieve great things. Welcome to
                Figorate – your partner in health and wellness.
              </p>
            </div>
          </Col>

          <Col md={6}>
            <div className="button-container">
              <a href="#" className="join-btn">
                Contact Us
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Join;
