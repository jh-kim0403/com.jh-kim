import React from 'react';
import pdf from "../../assets/Jae_Kim_Software_Engineer_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import './Resume.css';

const experienceItems = [
    {
        role: "Software Engineering Focus",
        meta: "Web applications / automation / backend foundations",
        details: "Building portfolio projects that combine practical user interfaces, clean application structure, and deployable product thinking.",
    },
    {
        role: "Core Languages",
        meta: "Java, Python, JavaScript",
        details: "Comfortable implementing application logic, scripting workflow improvements, and connecting frontend experiences to useful data flows.",
    },
    {
        role: "Product Direction",
        meta: "Modern interfaces and applied machine learning",
        details: "Interested in projects where engineering decisions directly improve usability, reliability, or decision-making.",
    },
];

export default function ResumeNew() {
    return (
        <section id="experience" className="portfolio-section experience-section">
            <div className="section-shell experience-layout">
                <div>
                    <p className="section-kicker">Experience</p>
                    <h2 className="section-title">A practical engineering profile.</h2>
                    <p className="section-copy">
                        I am growing toward software engineering roles where I can contribute across frontend, backend, automation, and product execution.
                    </p>
                    <div className="experience-actions">
                        <a className="portfolio-button primary" href={pdf} target="_blank" rel="noopener noreferrer">
                            <AiOutlineDownload /> Download resume
                        </a>
                        <a className="portfolio-button" href="#projects">
                            View work <FiArrowUpRight />
                        </a>
                    </div>
                </div>

                <div className="experience-list">
                    {experienceItems.map(item => (
                        <article className="experience-card glass-panel" key={item.role}>
                            <span>{item.meta}</span>
                            <h3>{item.role}</h3>
                            <p>{item.details}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );

}
