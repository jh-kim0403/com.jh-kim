import React from "react";
import Type from "./Type";
import "./Home.css";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FiArrowDownRight } from "react-icons/fi";

function Home() {
    return (
        <section id="home" className="portfolio-section home-section">
            <div className="section-shell hero-grid">
                <motion.div
                    className="hero-copy"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="section-kicker">Portfolio / Software Engineering</p>
                    <h1 className="hero-title">
                        Jae Kim builds{" "}
                        <span className="hero-title-type">
                            <Type strings={["Scalable", "User-Friendly", "Reliable", "Secure"]} />
                        </span>
                        <span className="hero-title-line">software.</span>
                    </h1>
                    <p className="hero-description">
                        I build web apps, automation tools, and data-driven systems with clean interfaces and practical engineering.
                    </p>
                    <div className="hero-actions">
                        <a className="portfolio-button primary" href="#projects">
                            View projects <FiArrowDownRight />
                        </a>
                        <a className="portfolio-button" href="mailto:kjh9643@gmail.com?subject=Mail%20From%20Website">
                            <AiOutlineMail /> Contact
                        </a>
                        <a className="portfolio-button icon-button hero-social-button" href="https://github.com/jh-kim0403" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                            <AiFillGithub size={32} />
                        </a>
                        <a className="portfolio-button icon-button hero-social-button" href="https://www.linkedin.com/in/jhkim051208/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                            <AiFillLinkedin size={32} />
                        </a>
                    </div>
                </motion.div>

                <div className="hero-panel-stack">
                    <motion.div
                        className="hero-card glass-panel"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                        <div className="hero-card-topline">Available for software engineering roles</div>
                        <div className="hero-metric">
                            <span>Java</span>
                            <span>Python</span>
                            <span>React</span>
                        </div>
                        <p>
                            Comfortable across backend logic, frontend interfaces, automation, and machine learning experimentation.
                        </p>
                        <div className="hero-status">
                            <span className="status-dot"></span>
                            Building polished, deployable products
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-card about-focus-card glass-panel"
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="hero-card-topline">Current focus</span>
                        <h3>Shipping stronger projects and growing as a software engineer.</h3>
                        <div className="about-points">
                            <span>Product-minded development</span>
                            <span>Clean frontend systems</span>
                            <span>Backend and automation workflows</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Home;
