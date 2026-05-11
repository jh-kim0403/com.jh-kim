import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineEngineering } from "react-icons/md";

const navItems = [
    { id: "home", label: "Home", icon: <AiOutlineHome /> },
    { id: "about", label: "About", icon: <IoPersonOutline /> },
    { id: "experience", label: "Experience", icon: <IoNewspaperOutline /> },
    { id: "projects", label: "Projects", icon: <MdOutlineEngineering /> },
];

function NavBar() {
    const [activeKey, setActiveKey] = useState("home");
    const [expand, updateExpanded] = useState(false);
    const [navState, updateNavbar] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            updateNavbar(window.scrollY >= 20);
        }

        scrollHandler();
        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    useEffect(() => {
        if (!("IntersectionObserver" in window)) {
            return undefined;
        }

        const sections = navItems
            .map(item => document.getElementById(item.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveKey(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    function handleNavClick(id) {
        setActiveKey(id);
        updateExpanded(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (

        <Navbar expanded={expand} expand="lg" fixed="top" className={navState ? "sticky" : "blured"}>
            <Container>
                <Navbar.Brand href="#home" className="brand" onClick={() => handleNavClick("home")}>JK</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => updateExpanded(expand ? false : true)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto pe-auto"
                        activeKey={activeKey}>
                        {navItems.map(item => (
                            <Nav.Item key={item.id}>
                                <Nav.Link
                                    href={`#${item.id}`}
                                    eventKey={item.id}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleNavClick(item.id);
                                    }}
                                >
                                    {item.icon} <span>{item.label}</span>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;
