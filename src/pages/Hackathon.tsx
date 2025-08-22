import { Helmet } from 'react-helmet-async';
import '../views/Hackathon/HackathonPage.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/games', label: 'Games' },
  { to: '/bites', label: 'Bites' },
  { to: '/cast', label: 'Cast' },
  { to: '/hackathon', label: 'Hackathon' },
  { to: '/berlin', label: 'Berlin' },
  { href: 'https://docs_permahub.ar.io', label: 'Docs', external: true },
];

export default function Hackathon() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMobileMenuOpen(true);
  const handleCloseMenu = () => setIsMobileMenuOpen(false);
  const handleMenuLinkClick = () => setIsMobileMenuOpen(false);
  
  return (
    <div className="hackathon-page hackathon-page-wrapper">
      <nav className="retro-nav">
          <img src="Group_264.png" alt="AO Logo" className="ao-logo" />
        
        <div className="nav-links-center">
         {navLinks.map(link => (
           link.external ? (
             <a key={link.label} href={link.href} className={`retro-nav-item`} target="_blank" rel="noopener noreferrer">{link.label}</a>
           ) : link.to ? (
             <Link key={link.to} to={link.to} className={`retro-nav-item${location.pathname === link.to ? ' active' : ''}`}>{link.label}</Link>
           ) : null
         ))}
        </div>
        
        {/* Hamburger menu button */}
        <button
          className="retro-hamburger-menu"
          aria-label="Open menu"
          onClick={handleOpenMenu}
        >
          <span className="retro-hamburger-bar"></span>
          <span className="retro-hamburger-bar"></span>
          <span className="retro-hamburger-bar"></span>
        </button>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`retro-mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={handleCloseMenu}
      ></div>
      
      {/* Mobile Menu */}
      <div className={`retro-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="retro-close-mobile-menu" onClick={handleCloseMenu}>&times;</button>
        <ul className="retro-mobile-navbar-links">
          {navLinks.map(link => (
            link.external ? (
              <li key={link.label}>
                <a href={link.href} className="retro-navbar-link" target="_blank" rel="noopener noreferrer" onClick={handleMenuLinkClick}>{link.label}</a>
              </li>
            ) : link.to ? (
              <li key={link.to}>
                <Link to={link.to} className="retro-navbar-link" onClick={handleMenuLinkClick}>
                  {link.label}
                </Link>
              </li>
            ) : null
          ))}
        </ul>
      </div>
      <Helmet>
        <title>Agents of the Permaweb Hackathon | PermaHub</title>
        <meta name="description" content="Build Autonomous AI Agents That Live Forever | $43,600 in Prizes | August 11 - September 2, 2025" />
      </Helmet>

      <div className="hackathon-container">
        {/* Floating UFO and Runner elements - REMOVE clouds and pixel icons above title */}
        {/* <img src="/UFO_5.png" alt="" className="floating-element ufo-1" />
        <img src="/UFO_9.png" alt="" className="floating-element ufo-2" />
        <img src="/UFO_10.png" alt="" className="floating-element ufo-3" />
        <img src="/UFO_12.png" alt="" className="floating-element ufo-4" />
        <img src="/RUN_6.png" alt="" className="floating-element runner-1" />
        <img src="/RUN_7.png" alt="" className="floating-element runner-2" />
        <img src="/RUN_8.png" alt="" className="floating-element runner-3" />
        <img src="/RUN_9.png" alt="" className="floating-element runner-4" />
        <img src="/RUN_10.png" alt="" className="floating-element runner-5" />
        <img src="/RUN_11.png" alt="" className="floating-element runner-6" /> */}

        {/* HERO TITLE BOX with outline and corner squares */}
        <div className="hero-title-outline">
          {/* Black corner squares */}
          <div className="corner-square corner-top-left"></div>
          <div className="corner-square corner-top-right"></div>
          <div className="corner-square corner-bottom-left"></div>
          <div className="corner-square corner-bottom-right"></div>
          {/* Two static aliens on top of the box */}
          <img src="RUN_6.png" alt="Alien" className="hero-alien-left" />
          <img src="RUN_7.png" alt="Alien" className="hero-alien-right" />
            <h1 className="retro-title">AI AGENTS<br />ON THE PERMAWEB</h1>
          </div>

        {/* Register Now button OUTSIDE the title box */}
        <div className="hero-register-row">
            <a 
              href="https://lu.ma/go6pt5yn" 
              target="_blank" 
              rel="noopener noreferrer" 
            className="retro-register-btn-image"
            >
            <img src="Frame_260.png" alt="Register Now" className="register-btn-img" />
            </a>
          <Link 
            to="/codeofconduct" 
            className="retro-register-btn-image"
          >
            <img src="cofcbtn.png" alt="Code of Conduct" className="register-btn-img" />
          </Link>
        </div>

        {/* Reward tape section - two crossing ribbons, edge-to-edge */}
        <div className="reward-tape-section full-width-ribbons">
          {/* Aliens positioned on top of ribbons - outside ribbon containers */}
          <img src="RUN_7.png" alt="Alien" className="ribbon-alien alien-1" />
          <img src="RUN_7.png" alt="Alien" className="ribbon-alien alien-2" />
          <img src="RUN_7.png" alt="Alien" className="ribbon-alien alien-3" />
          {/* <img src="/RUN_9.png" alt="Alien" className="ribbon-alien alien-4" /> */}
          
          <div className="ribbon-container ribbon-1">
            <img src="RUN_7.png" alt="Runner" className="ribbon-runner runner-1" />
            <img src="RUN_7.png" alt="Runner" className="ribbon-runner runner-2" />
            <img src="RUN_7.png" alt="Runner" className="ribbon-runner runner-3" />
            <div className="ribbon-text ribbon-text-left">
              <span>{"Build. Innovate. Get rewarded. ".repeat(20) + Array(100).fill("Build. Innovate. Get rewarded. ").join("")}</span>
              <span>{"Build. Innovate. Get rewarded. ".repeat(20) + Array(100).fill("Build. Innovate. Get rewarded. ").join("")}</span>
            </div>
          </div>
          <div className="ribbon-container ribbon-2">
            <div className="ribbon-text ribbon-text-right">
              <span>{"Build. Innovate. Get rewarded. ".repeat(20) + Array(100).fill("Build. Innovate. Get rewarded. ").join("")}</span>
              <span>{"Build. Innovate. Get rewarded. ".repeat(20) + Array(100).fill("Build. Innovate. Get rewarded. ").join("")}</span>
            </div>
          </div>
        </div>

        {/* Main description */}
        <div className="main-description">
          <h2>Join the 3-week online hackathon focused on<br />autonomous agents on Arweave's Permaweb<br />ecosystem, featuring a prize pool of</h2>
        </div>

        {/* Prize pool highlight */}
        <div className="prize-pool-highlight">
          <div className="prize-box">
            <div className="corner-square corner-top-left"></div>
            <div className="corner-square corner-top-right"></div>
            <div className="corner-square corner-bottom-left"></div>
            <div className="corner-square corner-bottom-right"></div>
            $43,600
          </div>
        </div>

        {/* Prize cards section */}
        <div className="retro-prizes-section">
          <div className="retro-prizes-grid">
            <div className="prize-card-container">
              <img src="TROPHY_1.png" alt="Trophy" className="prize-trophy trophy-grand" />
              <div className="retro-prize-card grand">
                <div className="corner-square corner-top-left"></div>
                <div className="corner-square corner-top-right"></div>
                <div className="corner-square corner-bottom-left"></div>
                <div className="corner-square corner-bottom-right"></div>
                <h3>Grand Prize</h3>
                <div className="prize-amount">$25,000</div>
                <div className="prize-amount-note">in $AR tokens</div>
                <div className="prize-desc grand-prize-desc">The most<br />innovative and<br />impactful agent</div>
              </div>
            </div>
            <div className="prize-card-container">
              <img src="trophy-2_1.png" alt="Trophy" className="prize-trophy trophy-track" />
              <div className="retro-prize-card track">
                <div className="corner-square corner-top-left"></div>
                <div className="corner-square corner-top-right"></div>
                <div className="corner-square corner-bottom-left"></div>
                <div className="corner-square corner-bottom-right"></div>
                <h3>Track Winner</h3>
                <div className="prize-amount">$2,500</div>
                <div className="prize-amount-note">(each) in $AR tokens</div>
                <div className="prize-desc track-winner-desc">• Practical Utility Agents<br />• Multi-Agent Systems<br />• AI-Enhanced Applications<br />• Agent Infrastructure</div>
              </div>
            </div>
            <div className="prize-card-container">
              <img src="medal-2_1.png" alt="Medal" className="prize-trophy trophy-special" />
              <div className="retro-prize-card special">
                <div className="corner-square corner-top-left"></div>
                <div className="corner-square corner-top-right"></div>
                <div className="corner-square corner-bottom-left"></div>
                <div className="corner-square corner-bottom-right"></div>
                <h3>Special<br />Awards</h3>
                <div className="special-awards">
                  <div className="award-item">
                    <span className="award-label">• Community Choice Award:</span>
                    <span className="award-amount">$1,500 in $AR</span>
                  </div>
                  <div className="award-item">
                    <span className="award-label">• Best Documentation:</span>
                    <span className="award-amount">$1,250 in $AR</span>
                  </div>
                  <div className="award-item">
                    <span className="award-label">• Most Practical Use Case:</span>
                    <span className="award-amount">$1,250 in $AR</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="prize-card-container">
              <div className="prize-trophy trophy-astro bonus-plus">+</div>
              <div className="retro-prize-card astro">
                <div className="corner-square corner-top-left"></div>
                <div className="corner-square corner-top-right"></div>
                <div className="corner-square corner-bottom-left"></div>
                <div className="corner-square corner-bottom-right"></div>
                <h3>AstroUSD<br />Bonuses</h3>
                <div className="astro-bonus">
                  <div className="bonus-amount">$500 USDA</div>
                  <div className="bonus-desc">per track for best<br />USDA integration</div>
                </div>
              </div>
            </div>
            <div className="prize-card-container">
              <div className="prize-trophy trophy-apus bonus-plus">+</div>
              <div className="retro-prize-card apus">
                <div className="corner-square corner-top-left"></div>
                <div className="corner-square corner-top-right"></div>
                <div className="corner-square corner-bottom-left"></div>
                <div className="corner-square corner-bottom-right"></div>
                <h3>Apus Network<br />Bonuses</h3>
                <div className="apus-bonus">
                  <div className="bonus-amount">APUS Tokens</div>
                  <div className="bonus-desc">Grand Prize: +$1,000<br />Track winners: +$200 each<br />Special awards: +$100 each</div>
                </div>
              </div>
            </div>
            <div className="prize-card-container">
              <div className="prize-trophy trophy-randao bonus-plus">+</div>
              <div className="retro-prize-card randao">
                <div className="corner-square corner-top-left"></div>
                <div className="corner-square corner-top-right"></div>
                <div className="corner-square corner-bottom-left"></div>
                <div className="corner-square corner-bottom-right"></div>
                <h3>RandAO<br />Bonus</h3>
                <div className="randao-bonus">
                  <div className="bonus-amount">$500 RandAO</div>
                  <div className="bonus-desc">for best use of<br />randomness<br />(one bonus across all tracks)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Timeline */}
        <div className="retro-timeline-section">
          <h2 className="retro-section-title">Event Timeline</h2>
          <div className="timeline-container">
            {/* Top row */}
            <div className="timeline-row timeline-top">
              <div className="timeline-full-line timeline-line-top"></div>
              <img src="RUN_6.png" alt="" className="timeline-runner runner-left" />
              <div className="retro-timeline-item">
                <div className="timeline-date">June 30</div>
                <div className="timeline-status">Registration<br />Start</div>
                <div className="timeline-desc"><a href="https://lu.ma/go6pt5yn" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Luma Link <span className="timeline-arrow">↗</span></a></div>
              </div>
              <div className="retro-timeline-item">
                <div className="timeline-date">August 7</div>
                <div className="timeline-status">Registration<br />Deadline</div>
                <div className="timeline-desc">Last Day to register</div>
              </div>
              <div className="retro-timeline-item">
                <div className="timeline-date">August 11</div>
                <div className="timeline-status">Hackathon<br />Start</div>
                <div className="timeline-desc">Just Fcking Build it</div>
              </div>
              <div className="retro-timeline-item">
                <div className="timeline-date">August 19</div>
                <div className="timeline-status">Workshop<br />No 1</div>
                <div className="timeline-desc">Build Your 1st AO Agent</div>
              </div>
            </div>
            
            {/* Bottom row */}
            <div className="timeline-row timeline-bottom">
              <div className="timeline-full-line timeline-line-bottom"></div>
              <div className="retro-timeline-item">
                <div className="timeline-date">August 26</div>
                <div className="timeline-status">Workshop<br />No 2</div>
                <div className="timeline-desc">Multi Agent Systems</div>
              </div>
              <img src="RUN_8.png" alt="Runner" className="timeline-runner runner-middle" />
              <div className="retro-timeline-item">
                <div className="timeline-date">August 28</div>
                <div className="timeline-status">Workshop<br />No 3</div>
                <div className="timeline-desc">AI Integration</div>
              </div>
              <div className="retro-timeline-item">
                <div className="timeline-date">September 2</div>
                <div className="timeline-status">Submission<br />Deadline</div>
                <div className="timeline-desc">11:59 PM UTC</div>
              </div>
              <div className="retro-timeline-item">
                <div className="timeline-date">September 5</div>
                <div className="timeline-status">Demo<br />Day</div>
                <div className="timeline-desc">Showcase projects</div>
              </div>
              <img src="finish-flag_1.png" alt="Finish Flag" className="timeline-finish finish-right" />
            </div>
          </div>
        </div>

        {/* How To Participate */}
        <div className="retro-participation-section">
          <h2 className="retro-section-title">How To Participate</h2>
          
          <div className="participation-step">
            <img src="alien-white_1.png" alt="Alien" className="step-alien-icon" />
            <div className="step-content">
              <h3>Step 1 - Register before 7 August !</h3>
              <p>Join the hackathon and hop into our Discord for support and team formation.</p>
              <div className="step-buttons">
                <div className="discord-button-container" style={{ display: 'flex', alignItems: 'center' }}>
                <a href="https://discord.gg/qWgGxJKwNJ" target="_blank" rel="noopener noreferrer" className="retro-discord-btn-img">
                  <img src="Discord_img.png" alt="Discord" className="discord-btn-img" />
                </a>
                </div>
                <a href="https://lu.ma/go6pt5yn" target="_blank" rel="noopener noreferrer" className="retro-register-btn-image-small">
                  <img src="Frame_268.png" alt="Register Now" className="register-btn-img-small" />
                </a>
              </div>
            </div>
          </div>

          <div className="participation-step">
            <img src="alien-white_1.png" alt="Alien" className="step-alien-icon" />
            <div className="step-content">
              <h3>Step 2 - Build your agent</h3>
              <div className="step-details">
                <p>- Built on AO protocol using message-passing</p>
                <p>- Runs 72+ hours autonomously</p>
                <p>- Saves data to Arweave</p>
                <p>- Solves real-world problems</p>
                <p>- Open source with docs - <a href="https://docs_permahub.ar.io" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Documentation <span style={{ fontSize: '0.8em' }}>↗</span></a></p>
              </div>
            </div>
          </div>

          <div className="participation-step">
            <img src="alien-white_1.png" alt="Alien" className="step-alien-icon" />
            <div className="step-content">
              <h3>Step 3 - Submit and Demo by September 2</h3>
              <p>Submit your GitHub repo, deployed agent, demo video, and write-up.</p>
            </div>
          </div>

          <img src="UFO_10.png" alt="UFO" className="participation-ufo participation-ufo-1" />
          <img src="UFO_10.png" alt="UFO" className="participation-ufo participation-ufo-2" />
          <img src="UFO_12.png" alt="UFO" className="participation-ufo participation-ufo-3" />
          <img src="UFO_12.png" alt="UFO" className="participation-ufo participation-ufo-4" />
        </div>

        <div className="hackathon-content" style={{display: 'none'}}>
          <section className="features-section">
            <h2>What Makes AO Agents Revolutionary?</h2>
            <p className="section-intro">
              AO represents the next evolution of the internet itself—extending HTTP with blockchain-level 
              verification to create a truly decentralized supercomputer.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Autonomous Execution</h3>
                <p>Execute autonomously without relying on centralized infrastructure</p>
              </div>
              <div className="feature-card">
                <h3>Permanent Storage</h3>
                <p>Store data permanently on Arweave's Permaweb—ensuring your agents never disappear</p>
              </div>
              <div className="feature-card">
                <h3>Seamless Integration</h3>
                <p>Interact seamlessly through HTTP message passing with cryptographic verification</p>
              </div>
              <div className="feature-card">
                <h3>Infinite Scale</h3>
                <p>Scale infinitely through parallel processing across the decentralized network</p>
              </div>
              <div className="feature-card">
                <h3>Full Transparency</h3>
                <p>Operate transparently with verifiable, auditable actions built into every interaction</p>
              </div>
              <div className="feature-card">
                <h3>Perpetual Operation</h3>
                <p>Run perpetually once deployed—they become permanent parts of the internet</p>
              </div>
            </div>
          </section>
        </div>
        
        {/* Final footer section */}
        <div className="retro-footer-cta">
          <div className="retro-register-cta-row">
            <a href="https://lu.ma/go6pt5yn" target="_blank" rel="noopener noreferrer" className="retro-register-btn-image-large">
              <img src="Frame_269.png" alt="Register Now" className="register-btn-img-large" />
            </a>
          </div>
          <div className="retro-footer-cta-row">
          <div className="retro-footer-message">
              <div className="footer-message-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '2.5rem', position: 'relative' }}>
                <div className="footer-message-text">
                  <p className="retro-footer-big-text">let's build the future<br />of autonomous agents<br />on the Permaweb!</p>
                  <p className="retro-footer-follow">Follow updates and tips on Twitter/X <br/> (@ArweaveEco), Discord, and the PermaHub site.</p>
                  <p className="retro-footer-follow">Check out our <a href="https://docs_permahub.ar.io" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Documentation</a> for detailed guides and resources.</p>
                  <div className="step-buttons">
                    <div className="x-button-container discord-button-container" style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="https://x.com/aoTheComputer" target="_blank" rel="noopener noreferrer" className="retro-x-btn-img">
                      <img src="xicon.png" alt="X" className="x-btn-img" style={{ height: '75px', width: 'auto' }} />
                      </a>
                    </div>
                    <div className="discord-button-container" style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="https://discord.gg/qWgGxJKwNJ" target="_blank" rel="noopener noreferrer" className="retro-discord-btn-img">
                  <img src="Discord_img.png" alt="Discord" className="discord-btn-img" />
                </a>
                    </div>
                    <a href="https://lu.ma/go6pt5yn" target="_blank" rel="noopener noreferrer" className="retro-register-btn-image-small">
                      <img src="Frame_268.png" alt="Register Now" className="register-btn-img-small" />
                    </a>
                  </div>
                  {/* AO logo at top left corner of its container */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: '1.2rem' }}>
                    <a href="https://ao.arweave.net" target="_blank" rel="noopener noreferrer" className="hackathon-footer-logo-link">
                      <img src="Group_263.png" alt="AO Logo" className="hackathon-footer-logo" />
                    </a>
                  </div>
                </div>
                <img src="alien-dither_1.png" alt="Alien" className="alien-pixelart-bottom" />
            </div>
            </div>
          </div>
        </div>

        {/* Spaceships/clouds */}
        <img src="UFO_5.png" alt="spaceship" className="spaceship spaceship-1" />
        <img src="UFO_5.png" alt="spaceship" className="spaceship spaceship-2" />
        <img src="UFO_9.png" alt="spaceship" className="spaceship spaceship-3" />
        <img src="UFO_9.png" alt="spaceship" className="spaceship spaceship-4" />
      </div>
    </div>
  );
}
