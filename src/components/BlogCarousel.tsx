import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCarousel.css";

// Import topic videos
import permaHub from "/permahub.mp4";

// Import blog images
import permawebImage from "/pi-usecases.jpg"; 
import afmediaImage from "/afmedia-resource.jpg"; 
import loadingImage from "/loading-usecases.jpg"; 
import piDayArticle from "/piday-article.jpg";
import trustBlockchain from "/inblockchain-wetrust.jpg";

// Define Blog Post Type
interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  link?: string; // ✅ `link` is now optional
  walletAddress: string; // Add wallet address for the author
}

// Function to format the wallet address
const formatWalletAddress = (address: string) => {
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
};

// Blog topics with images
const blogTopics: Record<string, { video: string; blogs: BlogPost[] }> = {
  "Recent": {
    video: permaHub,
    blogs: [
      { 
        title: "Build the Future of Computing with Permabites", 
        excerpt: "The most revolutionary technologies are built through genuine human connections. Today, we're excited to introduce Permabites – a grassroots initiative designed to foster authentic, face-to-face community building for the AO ecosystem around the world.", 
        image: "/permabites.png", 
        link: "/blog/permabites",
        walletAddress: "jt19WluLXKr9lcostp_XNmXRmpdxM4VwmXbmyDLoyNM"
      },
      { 
        title: "Permaweb Use Cases", 
        excerpt: "Exploring real-world applications built on Arweave.", 
        image: permawebImage, 
        link: "/blog/permaweb-use-cases",
        walletAddress: "jt19WluLXKr9lcostp_XNmXRmpdxM4VwmXbmyDLoyNM"
      },
      { 
        title: "Your Ultimate Arweave/AO Resource Guide", 
        excerpt: "A comprehensive index of Arweave and AO projects, tools, and media coverage.", 
        image: afmediaImage, 
        link: "/blog/afmedia-resource-guide",
        walletAddress: "jt19WluLXKr9lcostp_XNmXRmpdxM4VwmXbmyDLoyNM"
      },
      { 
        title: "AO Mint Yield Allocation Understanding", 
        excerpt: "Pi Day (3.14) is coming! Learn how the PermaWeb Index creates an automated compass to navigate the AO, AR, and permaweb ecosystems.", 
        image: piDayArticle, 
        link: "/blog/pie-day-article",
        walletAddress: "nH0c-gDj_Q01Y7NOgJ5SD8RkTpAMLeWCt-O5a6K0Cv0"
      },
      { 
        title: "Trust in Blockchain Systems", 
        excerpt: "Blockchain technology has always been about creating systems we don't need to trust because you do not rely on any single authority, i.e. making them trustless.", 
        image: trustBlockchain, 
        link: "/blog/trust-in-blockchain",
        walletAddress: "peFURnJVIrHJjekUXXEdFmqO707U19x5DnFsBnTeyNs"
      }
    ]
  },
  "AO": {
    video: permaHub,
    blogs: [
      { 
        title: "COMING SOON", 
        excerpt: "Making some JOOSEY content for you!", 
        image: loadingImage,
        walletAddress: "Arweave.."
      }
    ]
  },
  "Arweave": {
    video: permaHub,
    blogs: [
      { 
        title: "COMING SOON", 
        excerpt: "Making some JOOSEY content for you!", 
        image: loadingImage,
        walletAddress: "Arweave.."
      }
    ]
  }
};

const BlogCarousel = () => {
  const [selectedTopic, setSelectedTopic] = useState<keyof typeof blogTopics>("Recent");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

  // Ensure video plays when component mounts or topic changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
      });
    }
  }, [selectedTopic]);

  const renderTopicVideo = () => {
    const selectedVideo = blogTopics[selectedTopic].video;
    return (
      <video
        ref={videoRef}
        className="topic-background-video"
        src={selectedVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    );
  };

  return (
    <div className="carousel-container">
      <div className="topic-buttons">
        {Object.keys(blogTopics).map((topic) => (
          <button
            key={topic}
            className={`topic-button ${selectedTopic === topic ? "active" : ""}`}
            onClick={() => setSelectedTopic(topic as keyof typeof blogTopics)}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Blog Section with Background Video */}
      <div className="carousel">
        {renderTopicVideo()}
        <div className="blog-preview-container">
          {blogTopics[selectedTopic].blogs.map((blog, index) => (
            <div 
              key={index} 
              className={`blog-preview${blog.title === 'Build the Future of Computing with Permabites' ? ' permabites-green-bg' : ''}`}
              onClick={() => blog.link && navigate(blog.link, { state: { image: blog.image, title: blog.title } })}
            >
              <img src={blog.image} alt={blog.title} className="blog-image" />
              {/* Wallet Address Display */}
              <div className="wallet-address">
                {formatWalletAddress(blog.walletAddress)}
              </div>
              <div className="blog-info">
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                {blog.link && <span className="read-more">Read More →</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="buttons-container">
        <a href="https://permatell.arweave.net/#/" target="_blank" rel="noopener noreferrer">
          <button className="submit-entry-button">PermaTell Your Entry for PermaHub</button>
        </a>
        <a href="https://biuq26pcmjwrr22godqmwehtd5mof25encuxi74oi3qh3rwi46wa.arweave.net/CikNeeJibRjrRnDgyxDzH1ji66RoqXR_jkbgfcbI56w/#/">
          <button className="send-email-button">Send Email with Arweave Wallet</button>
        </a>
      </div>
    </div>
  );
};

export default BlogCarousel;
