import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useRef, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useHub } from '../context/HubContext';

const Home = () => {
  const navigate = useNavigate();
  const { enterHub } = useHub();
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Build", "Play", "Learn", "Create", "Explore"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleEnterHub = () => {
    enterHub();
    navigate('/bites');
  };

  return (
    <div className="home-container relative flex flex-col items-center justify-center min-h-screen" ref={containerRef}>
      {/* Video Background */}
      <div className="video-background-container">
        <video 
          className="video-background" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="./permahub.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section */}
      <div className="hero-section flex flex-col items-center justify-center">
        <h1 className="hero-title">
          <span className="hero-title">PERMA-HUB</span> <br />
          <span className="relative flex w-full justify-center overflow-hidden">
            {titles.map((title, index) => (
              <motion.span
                key={index}
                className="absolute hero-untext"
                initial={{ opacity: 0, y: "-100" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {
                        y: titleNumber > index ? -150 : 150,
                        opacity: 0,
                      }
                }
              >
                {title}
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="hero-text">Build | Play | Learn on Arweave</p>
        <div className="flex flex-row gap-3 justify-center mt-20">
          <button 
            className="explore-button gap-4 flex items-center"
            onClick={handleEnterHub}
          >
            Enter Hub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
