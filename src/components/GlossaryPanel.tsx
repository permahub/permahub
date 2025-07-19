import React from "react";
import "./GlossaryPanel.css";

interface GlossaryPanelProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

const GlossaryPanel: React.FC<GlossaryPanelProps> = ({ isOpen, onClose, isDarkMode }) => {
  return (
    <>
      {/* Overlay that appears behind the panel */}
      {isOpen && <div className="glossary-overlay" onClick={onClose}></div>}
      
      <div className={`glossary-panel ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
        {/* Handle at the top of the panel */}
        <div className="glossary-panel-handle">
          <div className="handle-bar"></div>
        </div>
        
        <div className="glossary-panel-content">
          <div className="glossary-panel-header">
            <h3>Glossary</h3>
            <div className="glossary-panel-controls">
              <button className="close-button" onClick={onClose} aria-label="Close glossary">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
          <div className="glossary-panel-body">
            <iframe 
              src="https://glossary.ar.io/" 
              title="AR.IO Glossary" 
              className="glossary-iframe"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              scrolling="yes"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default GlossaryPanel;
