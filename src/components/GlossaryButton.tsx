import React, { useState, useEffect, useRef } from "react";
import "./GlossaryPanel.css"; // Reusing the same CSS file

interface GlossaryButtonProps {
  onClick: () => void;
}

const GlossaryButton: React.FC<GlossaryButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  // Show tooltip on touch for mobile devices
  const handleTouchStart = () => {
    setIsHovered(true);
    
    // Hide tooltip after 2 seconds
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };
  
  return (
    <div className="glossary-button-container">
      {isHovered && <div className="glossary-tooltip">Glossary <i className="fas fa-arrow-up"></i></div>}
      <button 
        className="glossary-toggle-button" 
        onClick={onClick} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        aria-label="Open Glossary"
      >
        <i className="fas fa-book"></i>
      </button>
    </div>
  );
};

export default GlossaryButton;
