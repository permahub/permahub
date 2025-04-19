import "./Blog.css";
import { useRef, useEffect } from "react";
import BlogCarousel from "../components/BlogCarousel";

const Blog = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ensure video plays when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, []);

  return (
    <div className="home-container relative" ref={containerRef}>
      {/* Background Video */}
      <video
        ref={videoRef}
        className="blog-background-video"
        src="/permahub.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Background Image in Top-Right Corner */}
      <div className="corner-image3"></div>
      <div className="corner-image4"></div>
      <div className="corner-image5"></div>
      <div className="corner-image6"></div>

      {/* Blog Content */}
      <div className="no-scroll-wrapper">
        <div className="heading-container">
          <h1 className="mainnet-title">BLOG</h1>
        </div>
        <div className="carousel-container">
          <BlogCarousel />
        </div>
      </div>

      {/* Footer Section */}
      <div className="runtime-section section-with-background-3">
        <h2></h2>
      </div>
    </div>
  );
};

export default Blog; 