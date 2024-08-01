import "./Overview.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import man from "../images/man.png";
import fruit from "../images/fruit.png";
import girls from "../images/girls.png";

function Overview() {
    return (
        <section className="overview">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={man} alt="" className="img-fluid" />
                    </Col>

                    <Col md={6}>
                        <div className="overview-content">
                            <h2 className="overview-title">
                                Figorate Overview <span className="begin">The beginning</span>
                            </h2>

                            <p className="overview-word">
                                At Figorate, we believe that everyone has the potential to lead
                                a healthier, happier life. Our journey began with a simple but
                                powerful idea: to create a platform that brings together the
                                best of fitness, nutrition, and community support, all tailored
                                to the unique needs of each individual.
                            </p>

                            <p className="overview-word">
                                Figorate was founded by a team of health and wellness
                                enthusiasts who recognized the challenges people face in
                                achieving their fitness and health goals.
                            </p>

                            <p className="overview-word">
                                We saw that many existing solutions were either too generic or
                                lacked the comprehensive approach needed to address all aspects
                                of well-being, and determined to make a difference, we set out
                                to build a platform that would empower people to take control of
                                their health through personalized plans and expert guidance.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="vision-row">
                    <Col md={6}>
                        <div className="vision-content">
                            <h2 className="vision">Our Vision</h2>
                            <p className="vision-word">
                                Our vision is to revolutionize the way people approach their
                                health and fitness. We aim to create a world where everyone has
                                access to the tools, resources, and support they need to achieve
                                their wellness goals.
                            </p>

                            <p className="vision-word">
                                We envision a future where personalized health plans are the
                                norm, and individuals can make informed decisions about their
                                fitness and nutrition based on their unique genetic makeup and
                                lifestyle.
                            </p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <img src={fruit} alt="fruits" className="img-fluid" />
                    </Col>
                </Row>

                <Row className="girls-row">
                    <Col md={6}>
                        <img src={girls} alt="girls" className="img-fluid" />
                    </Col>

                    <Col md={6}>
                        <div className="mission-content">
                            <h2 className="mission-title">Our Mission</h2>
                            <p className="mission-word">
                                We are on a mission to drive relentless innovation in health and
                                wellness through advanced technology and data-driven insights,
                                redefining the boundaries of well-being and enhancing lives
                                worldwide.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="journey-row">
                    <Col md={12}>
                        <div className="journey-content">
                            <h2 className="journey-title">The Journey</h2>
                            <p className="journey-word">
                                Our journey has been one of innovation, dedication, and
                                collaboration. We started by bringing together experts in
                                fitness, nutrition, and technology to develop a platform that
                                could offer truly personalized health plans. We incorporated
                                advanced features like AI & Genetics Insight to provide deeper
                                insights into each user’s health potential. Along the way, we
                                built a vibrant community of like-minded individuals who support
                                and motivate each other.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="present-row">
                    <Col md={6}>
                        <div className="present-content">
                            <h2 className="present-title">The Present</h2>
                            <p className="present-word">
                                Today, Figorate is a comprehensive wellness platform that offers
                                personalized fitness and nutrition plans, expert consultations,
                                community support, and advanced progress tracking.
                            </p>

                            <p className="present-word">
                                Our users can access a wide range of resources, from tailored
                                workout routines to customized meal plans, all designed to help
                                them achieve their health goals.
                            </p>

                            <p className="present-word">
                                We are proud to have created a platform that not only addresses
                                the physical aspects of health but also supports mental
                                well-being through mindfulness and stress management resources.
                            </p>
                        </div>
                    </Col>

                    <Col md={6} >
                        <div className="future-content">
                            <h2 className="present-title">The Future </h2>
                            <p className="future-word">
                                We are continually evolving and improving our platform to better
                                serve our users. As we look to the future, we are excited about
                                the possibilities that lie ahead.
                            </p>

                            <p className="future-word">
                                We are committed to leveraging
                                the latest advancements in health and technology to provide even
                                more personalized and effective solutions.
                            </p>

                            <p className="future-word">
                                Our goal is to be at
                                the forefront of the wellness revolution, helping people lead
                                healthier, more fulfilling lives.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Overview;
