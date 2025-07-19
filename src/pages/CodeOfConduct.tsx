import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import '../views/Hackathon/HackathonPage.css'; // Import hackathon styles for font

export default function CodeOfConduct() {
  const styles: { [key: string]: CSSProperties } = {
    wrapper: {
      position: 'relative' as const,
      minHeight: '100vh',
      width: '100%',
      overflow: 'hidden',
    },
    video: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      zIndex: -1,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      color: '#000000',
    },
    content: {
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2rem',
      borderRadius: '1rem',
      backdropFilter: 'blur(10px)',
      maxWidth: '800px',
      margin: '0 auto',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      textAlign: 'center' as const,
      color: '#000000',
    },
    subHeading: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#000000',
    },
    text: {
      fontSize: '1.125rem',
      lineHeight: '1.75',
      marginBottom: '1.5rem',
      color: '#000000',
    },
    backButton: {
      display: 'inline-block',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#3D3D3D',
      color: '#ffffff',
      textDecoration: 'none',
      borderRadius: '0.5rem',
      marginTop: '2rem',
      transition: 'background-color 0.3s ease',
    },
    rulesButton: {
      display: 'inline-block',
      padding: '1.25rem 2rem',
      backgroundColor: '#CC1616',
      color: '#ffffff',
      textDecoration: 'none',
      borderRadius: '1rem',
      marginBottom: '2rem',
      transition: 'all 0.2s',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      fontFamily: 'Space Grotesk, sans-serif',
      textAlign: 'center' as const,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      width: '100%',
      margin: '0 auto 2rem',
    },
  };

  return (
    <div className="codeofconduct-page vt323-font">
      <style>{`
        @font-face {
          font-family: 'VT323';
          src: url('/fonts/VT323-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        .vt323-font, .vt323-font * {
          font-family: 'VT323', monospace !important;
        }
        @media (max-width: 600px) {
          .rules-btn-responsive {
            width: 100% !important;
            min-width: 0 !important;
            max-width: 100vw !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
      <div style={styles.wrapper}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            ...styles.video,
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            left: 0,
            top: 0,
            position: 'fixed',
            zIndex: -1,
            minWidth: '100vw',
            minHeight: '100vh',
            background: '#E60012',
          }}
          id="hackathon-bg-video"
          poster="/aoHackathon.png"
        >
          <source src="/hackathon-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div style={styles.container}>
          <div style={styles.content}>
            <h1 style={{...styles.heading, fontSize: '5rem'}}>Code of Conduct</h1>
            
            <a 
              className="rules-btn-responsive"
              href="https://docs.google.com/document/d/1gjrK_7F9hLT9gW3nUqB1GSDdaNa3RA1csKfVqL9GEW0/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.rulesButton,
                fontFamily: 'VT323, monospace',
                fontSize: '2.5rem',
                borderRadius: '0',
                letterSpacing: '0',
                maxWidth: '512px',
                width: '141%',
              }}
            >
              Full Rules & Code of Conduct
            </a>
            
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <p style={{...styles.subHeading, marginBottom: '0.5rem', fontSize: '3rem'}}>
                Agents of the Permaweb Hackathon
              </p>
              <p style={{...styles.text, opacity: 0.8, fontSize: '1.5rem'}}>
                August 11 - September 2, 2025
              </p>
            </div>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{...styles.subHeading, fontSize: '3rem'}}>Be Respectful</h2>
              <p style={{...styles.text, fontSize: '1.5rem'}}>
                Maintain professionalism with all participants. No harassment or discrimination.
              </p>
            </section>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{...styles.subHeading, fontSize: '3rem'}}>Original Work Only</h2>
              <p style={{...styles.text, fontSize: '1.5rem'}}>
                Projects must be created during hackathon (Aug 11-Sep 2). Pre-existing projects not eligible for prizes.
              </p>
            </section>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{...styles.subHeading, fontSize: '3rem'}}>Open Source Required</h2>
              <p style={{...styles.text, fontSize: '1.5rem'}}>
                Use open source licenses and properly credit third-party code.
              </p>
            </section>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{...styles.subHeading, fontSize: '3rem'}}>Team Rules</h2>
              <p style={{...styles.text, fontSize: '1.5rem'}}>
                All members register individually. No team changes after August 11.
              </p>
            </section>

            <section style={{marginBottom: '2rem'}}>
              <h2 style={{...styles.subHeading, fontSize: '3rem'}}>Violations = Disqualification</h2>
            </section>

            <div style={{textAlign: 'center', marginTop: '3rem', marginBottom: '2rem'}}>
              <p style={{...styles.subHeading, opacity: 0.9, fontSize: '3rem'}}>
                Build amazing agents, respect the community!
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <Link 
                to="/hackathon" 
                style={{
                  ...styles.backButton,
                  fontFamily: 'VT323, monospace',
                  fontSize: '2.5rem',
                  borderRadius: '0',
                  letterSpacing: '0',
                }}
              >
                Back to Hackathon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}