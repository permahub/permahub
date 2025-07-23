import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WalletManager } from './WalletManager';
import './Navbar.css';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left: Dark/Light Mode Toggle */}
      <div className="navbar-left">
        <button 
          className="theme-toggle-button" 
          onClick={toggleDarkMode} 
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>

      {/* Center: Navigation Links (hidden on mobile) */}
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">HOME</Link></li>
          <li><Link to="/blog" className="navbar-link">BLOG</Link></li>
          <li><Link to="/games" className="navbar-link">GAMES</Link></li>
          <li><Link to="/bites" className="navbar-link">BITES</Link></li>
          <li><Link to="/permacast" className="navbar-link">CAST</Link></li>
          <li><Link to="/hackathon" className="navbar-link">HACKATHON</Link></li>
          <li><Link to="/berlin" className="navbar-link">BERLIN</Link></li>
          <li><a href="https://docs_permahub.ar.io" className="navbar-link" target="_blank" rel="noopener noreferrer">DOCS</a></li>
        </ul>
      </div>

      {/* Right: Wallet Connect Button and Hamburger */}
      <div className="navbar-right">
        <div className="wallet-connect-desktop">
          <WalletManager />
        </div>
        <button
          className="hamburger-menu"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}
      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="close-mobile-menu" onClick={() => setMenuOpen(false)}>&times;</button>
        <ul className="mobile-navbar-links">
          <li><Link to="/" className="navbar-link" onClick={() => setMenuOpen(false)}>HOME</Link></li>
          <li><Link to="/blog" className="navbar-link" onClick={() => setMenuOpen(false)}>BLOG</Link></li>
          <li><Link to="/games" className="navbar-link" onClick={() => setMenuOpen(false)}>GAMES</Link></li>
          <li><Link to="/bites" className="navbar-link" onClick={() => setMenuOpen(false)}>BITES</Link></li>
          <li><Link to="/permacast" className="navbar-link" onClick={() => setMenuOpen(false)}>CAST</Link></li>
          <li><Link to="/hackathon" className="navbar-link" onClick={() => setMenuOpen(false)}>HACKATHON</Link></li>
          <li><Link to="/berlin" className="navbar-link" onClick={() => setMenuOpen(false)}>BERLIN</Link></li>
          <li><a href="https://docs_permahub.ar.io" className="navbar-link" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>DOCS</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
