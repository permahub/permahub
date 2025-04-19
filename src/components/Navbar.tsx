import { Link } from "react-router-dom";
import './Navbar.css';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ isDarkMode, toggleDarkMode }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="navbar-left"></div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">HOME</Link></li>
          <li><Link to="/blog" className="navbar-link">BLOG</Link></li>
          <li><Link to="/games" className="navbar-link">GAMES</Link></li>
          <li><Link to="/bites" className="navbar-link">BITES</Link></li>
          <li>
            <a
              href="https://ao.arweave.net/#/delegate"
              className="navbar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              DELEGATE
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button 
          className="theme-toggle-button" 
          onClick={toggleDarkMode} 
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
