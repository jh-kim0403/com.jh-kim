import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from "./components/Preloader";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="app-wrapper">
        <NavBar />
        <main className="page-content">
          <Home />
          <About />
          <Resume />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
