import React from "react";
import Skills from "./Skills.js";
import Type from "../Home/Type.js";
import './About.css';

function About() {
    return (
        <section id="about" className="portfolio-section about-section">
            <div className="section-shell about-layout">
                <div className="about-copy">
                    <p className="section-kicker">About</p>
                    <h2 className="section-title">
                        Engineer focused on useful, maintainable products.
                    </h2>
                    <div className="about-type">
                        <Type />
                    </div>
                    <p className="section-copy">
                        My foundation is in Java, Python, and React, with a practical interest in building systems that are easy to use and straightforward to maintain. I like turning ambiguous product ideas into clear interfaces, working software, and measurable outcomes.
                    </p>
                    <p className="section-copy">
                        I am especially interested in web applications, automation, backend services, and machine learning experiments that solve real workflow problems.
                    </p>
                </div>
            </div>
            <Skills />
        </section>
    )

}

export default About;
