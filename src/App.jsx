import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import Footer from "./components/Footer";
import { Projects } from "./components/sections/Projects";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Enhanced smooth scrolling implementation
  useEffect(() => {
    // Set smooth scrolling on the root HTML element
    document.documentElement.style.scrollBehavior = "smooth";

    // Custom smooth scroll function for better browser compatibility
    const smoothScrollTo = (targetId) => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    };

    // Handle all anchor links for smooth scrolling
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        smoothScrollTo(targetId);

        // Close mobile menu if open
        if (menuOpen) {
          setMenuOpen(false);
        }
      }
    };

    // Add click listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    // Cleanup function
    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
    };
  }, [menuOpen]);

  // Handle hash navigation on page load
  useEffect(() => {
    if (isLoaded && window.location.hash) {
      setTimeout(() => {
        const targetId = window.location.hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      {/* Animated background particles */}
      <div className={`particles-bg ${isDarkMode ? "" : "opacity-50"}`}></div>
      <div
        className={`min-h-screen transition-all duration-700 scroll-smooth ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${
          isDarkMode ? "bg-black text-gray-100" : "bg-white text-gray-900"
        } relative overflow-hidden`}
      >
        {/* Background gradient orbs */}
        <div
          className={`fixed inset-0 pointer-events-none transition-opacity duration-700 ${
            isDarkMode ? "opacity-100" : "opacity-30"
          }`}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          isDarkMode={isDarkMode}
        />
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
}

export default App;
