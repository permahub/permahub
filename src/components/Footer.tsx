import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a
          href="https://x.com/aothecomputer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
        <a
          href="https://github.com/permaweb/ao"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://discord.gg/Vnf9HFj5tM"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <i className="fab fa-discord"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
