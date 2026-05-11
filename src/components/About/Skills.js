import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import {
    DiReact,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiSpringboot,
    SiUipath,
    SiDocker,
    SiNumpy,
    SiScikitlearn,
    SiFastapi,
    SiTypescript,
    SiExpo,
    SiApacheairflow
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { Container, Row, Col } from "react-bootstrap";

// Initial list of skills (could include icon components or image URLs)
const initialSkills = [
    { id: 'React', icon: <DiReact size={64} /> },
    { id: 'Python', icon: <DiPython size={64} /> },
    { id: 'Java', icon: <DiJava size={64} /> },
    { id: 'FastAPI', icon: <SiFastapi size={64} /> },
    { id: 'TypeScript', icon: <SiTypescript size={64} /> },
    { id: 'AWS', icon: <FaAws size={64} /> },
    { id: 'SpringBoot', icon: <SiSpringboot size={64} /> },
    { id: 'Git', icon: <DiGit size={64} /> },
    { id: 'Expo', icon: <SiExpo size={64} /> },
    { id: 'Docker', icon: <SiDocker  size={64} /> },
    { id: 'Numpy', icon: <SiNumpy   size={64} /> },
    { id: 'ScikitLearn', icon: <SiScikitlearn   size={64} /> },     
    { id: 'SQL', icon: <PiFileSql   size={64} /> },
    { id: 'UIPath', icon: <SiUipath  size={64} /> },
    { id: 'Apache Airflow', icon: <SiApacheairflow size={64} /> }
];

// Utility to shuffle an array
function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

export default function Skills() {
    const [skills, setSkills] = useState(initialSkills);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSkills(prev => shuffleArray(prev));
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="skills-section">
            <h2 className="skills-title">My Skills</h2>

            <Container>
                {/* 1rem gutter on both axes with g-3 */}
                <Row className="g-3 skills-list">
                    {skills.map(skill => (
                        /* 6 cols on xs (2 per row), 3 cols on md+ (4 per row) */
                        <Col key={skill.id} xs={6} sm={4} md={3} lg={2}>
                            <motion.div
                                layout
                                className="skill-item"
                                onMouseEnter={() => setHoveredId(skill.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="skill-content">
                                    {hoveredId === skill.id
                                        ? <span className="skill-label">{skill.id}</span>
                                        : skill.icon
                                    }
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
