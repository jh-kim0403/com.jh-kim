import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillMail
} from "react-icons/ai";
import './Footer.css';

function Footer() {
    const mailButton = () => {
        window.location.href = "mailto:kjh9643@gmail.com?subject=Mail%20From%20Website";
    }



    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by JH Kim</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/jh-kim0403"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/jhkim051208/"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li className="social-icons">
                            <div onClick={mailButton} className="mail-button">
                                <AiFillMail />
                            </div>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/koreanjaesus"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
