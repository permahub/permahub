import "./BlogPost.css";

const PermabitesBlogPost = () => {
  return (
    <div className="blog-post-container">
      <a href="/blog" className="back-link">← Back to Blog</a>
      <img src="/permabites.png" alt="Permabites" className="blog-header-image" />
      <h1>Build the Future of Computing with Permabites</h1>
      <p className="blog-meta">Published on April 2025 | By PermaHub Team</p>
      <div className="blog-content">
        <p><strong>The most revolutionary technologies are built through genuine human connections.</strong></p>
        <p>Today, we're excited to introduce <strong>Permabites</strong> – a grassroots initiative designed to foster authentic, face-to-face community building for the AO ecosystem around the world.</p>
        
        <h2>What is AO?</h2>
        <p><strong>AO</strong> is a hyper-parallel computer – a decentralized supercomputer built on top of Arweave's permanent storage network. Unlike traditional blockchain platforms that process transactions one at a time, AO enables unlimited parallel processing by allowing each process to run independently and communicate asynchronously.</p>
        <p>This revolutionary architecture enables infinite scalability, web-native infrastructure built directly into HTTP protocol, trustworthy computation using TEE technology, and user-owned applications where creators maintain control of their content and data.</p>
        
        <h2>What are Permabites?</h2>
        <p><strong>Permabites</strong> are small, community-organized meetups designed to connect developers, blockchain enthusiasts, and curious minds interested in exploring the AO ecosystem.</p>
        <p>We're offering <strong>$100 in AR tokens</strong> to approved event organizers to cover basic expenses, making it easier than ever to bring people together in your local community.</p>
        
        <h2>Why Host a Permabite?</h2>
        <ul>
          <li>Build authentic connections with like-minded individuals</li>
          <li>Expand AO's reach beyond existing crypto-native communities</li>
          <li>Share knowledge about regionally-relevant use cases</li>
          <li>Shape the future of a revolutionary computing platform</li>
          <li>Become a community leader in the growing AO ecosystem</li>
        </ul>
        
        <h2>How to Host a Permabite</h2>
        <ol>
          <li>Apply with your meetup idea and location (5-20 people recommended)</li>
          <li>Receive support of $100 in AR tokens (50% upfront, 50% after your event)</li>
          <li>Host your gathering with structured discussions about AO</li>
          <li>Document the experience with photos and a simple report</li>
          <li>Help grow the global AO community</li>
        </ol>
        
        <h2>Pilot Program Details</h2>
        <p>Our pilot program runs from <strong>April through June 2025</strong>, with events worldwide. While we have highlighted venue availability in San Diego, Berlin, Lisbon, and New York, we enthusiastically welcome applications from everywhere!</p>
        
        <p>With AO mainnet now live, we're entering an exciting new phase of community growth and development. Permabites will help connect the visionaries, builders, and enthusiasts who will define the future of this decentralized computing platform.</p>
        <p><strong>Ready to spark meaningful conversations about AO in your community?</strong> Apply now and become a vital part of our ecosystem's growth story.</p>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="/bites" className="back-link" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            → Go to Permabites Application Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default PermabitesBlogPost; 