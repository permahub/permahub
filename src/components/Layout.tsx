import { ReactNode, useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import GlossaryPanel from "./GlossaryPanel";
import GlossaryButton from "./GlossaryButton";
import "./Layout.css";
import { useHub } from '../context/HubContext';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const { hasEnteredHub } = useHub();
  const isHomePage = location.pathname === '/';

  // Load dark mode preference from localStorage on initial render
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const openGlossary = () => {
    setIsGlossaryOpen(true);
  };

  const closeGlossary = () => {
    setIsGlossaryOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`layout-container ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Global Corner Images */}
      <div className="corner-image"></div>
      <div className="corner-image2"></div>

      <header className="layout-header">
        {(!isHomePage || hasEnteredHub) && <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
      </header>

      <main className="layout-content">
        <div className="container">{children}</div>
      </main>

      <footer className="layout-footer">
        <Footer />
      </footer>

      {/* Glossary Panel and Button */}
      <GlossaryPanel isOpen={isGlossaryOpen} onClose={closeGlossary} isDarkMode={isDarkMode} />
      <GlossaryButton onClick={openGlossary} />
    </div>
  );
};

export default Layout;
