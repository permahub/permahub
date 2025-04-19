import "./BlogPost.css"; // Reusing blog post styles for consistent formatting

const ScrollAnimationDemo = () => {
  return (
    <div className="blog-page-container relative">
      <div className="blog-header">
        <h1>Scroll Animation Demo</h1>
        <div className="blog-details">
          <span>New UI Component</span>
          <span>•</span>
          <span>Demo Page</span>
        </div>
      </div>
      
      <div className="blog-content">
        <p className="blog-intro">
          This demo page previously showcased a scroll animation component that has been removed.
        </p>
        
        <div className="blog-section">
          <h2>Component Removed</h2>
          <p>
            The scroll animation component has been removed from the codebase as part of a cleanup effort.
            This page is kept for reference purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimationDemo;
