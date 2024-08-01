import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Hero.css";
import line from "../images/line.png";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <Row>
          <Col md={12}>
            <div className="hero-content">
              <img src={line} alt="" className="line" />
              <h2 className="hero-head">Everything About Figorate</h2>
              <p className="hero-thick-word">
                Achieve your healthiest self with Figorate.
              </p>

              <p className="hero-descrip">
                We're a team of passionate individuals. we believe that true
                health and wellness are about more than just diet and exercise –
                they're about personalized solutions tailored to your unique
                needs and goals.
              </p>

              <div className="btn-container">
                <a href="#" className="hero-btn">Contact Us</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
