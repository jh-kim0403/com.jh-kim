import React from "react";
import lcd from "../../assets/lcd_calculator.png";
import portfolio from "../../assets/portfolio.png";
import led_dimmer from "../../assets/LED_Dimmer.jpg";
import githubLogo from "../../assets/github-logo.png";
import jlock from "../../assets/jlockbusters.png";
import betYouCan from "../../assets/IMG_4664.PNG";
import betYouCanGoals from "../../assets/IMG_4665.PNG";
import betYouCanProof from "../../assets/IMG_4671.PNG";
import "../Projects/Projects.css";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
    {
        title: "Bet You Can",
        image: betYouCan,
        images: [betYouCan, betYouCanGoals, betYouCanProof],
        alt: "Bet You Can mobile app",
        description: "AI Accountability app that allows users to bet on their goals and compete with other users for the same goal",
        tags: ["Mobile App"],
        actions: [{ label: "GitHub", href: "https://github.com/jh-kim0403/betyoucan" }],
    },
    {
        title: "Jortfolio",
        image: portfolio,
        alt: "Jortfolio project",
        description: "Personal portfolio project for presenting work, background, and engineering direction.",
        tags: ["React", "Portfolio", "Frontend"],
        actions: [{ label: "GitHub", href: "https://github.com/jh-kim0403/com.jh-kim" }],
    },
    {
        title: "Jlockbusters",
        image: jlock,
        alt: "Jlockbusters project",
        description: "A deployed web project focused on a clean user-facing experience and practical delivery.",
        tags: ["Web App", "Product", "Deployment"],
        actions: [{ label: "Demo", href: "https://jlockbusters.com" }],
    },
    {
        title: "LCD Calculator",
        image: lcd,
        alt: "LCD Calculator project",
        description: "Calculator project showcasing implementation logic and interactive application behavior.",
        tags: ["JavaScript", "Logic", "UI"],
        actions: [{ label: "GitHub", href: "https://github.com/jh-kim0403/calculator" }],
    },
    {
        title: "LED Dimmer",
        image: led_dimmer,
        alt: "LED Dimmer project",
        description: "Hardware-oriented project involving control logic, wiring, and practical system behavior.",
        tags: ["Hardware", "Controls", "Engineering"],
        actions: [{ label: "GitHub", href: "https://github.com/jh-kim0403/led_dimmer" }],
    },
    {
        title: "Search Engine",
        image: githubLogo,
        alt: "Search Engine project",
        description: "Search-focused project direction exploring indexing, retrieval, and useful data access.",
        tags: ["Search", "Python", "Data"],
        actions: [{ label: "GitHub", href: "https://github.com/jh-kim0403" }],
    },
];

function Projects() {
    return (
        <section id="projects" className="portfolio-section projects-section">
            <div className="section-shell">
                <div className="projects-header">
                    <div>
                        <p className="section-kicker">Projects</p>
                        <h2 className="section-title">Selected work.</h2>
                    </div>
                    <p className="section-copy">
                        A mix of deployed web projects, application experiments, and engineering builds.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map(project => (
                        <article className="project-card glass-panel" key={project.title}>
                            <div className="project-image-wrap">
                                {project.images ? (
                                    <div className="project-image-gallery">
                                        {project.images.map((image, index) => (
                                            <img src={image} alt={`${project.alt} screenshot ${index + 1}`} key={image} />
                                        ))}
                                    </div>
                                ) : (
                                    <img src={project.image} alt={project.alt} />
                                )}
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    {project.actions.map(action => (
                                        <a className="portfolio-button" href={action.href} target="_blank" rel="noopener noreferrer" key={action.href}>
                                            {action.label} <FiArrowUpRight />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
