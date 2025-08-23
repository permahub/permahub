import { useState } from 'react';
import { PermabitesForm } from "@/components/PermabitesForm";
import { PermabitesList } from "@/components/PermabitesList";
import "./Bites.css";
import { Helmet } from 'react-helmet-async';

export default function Bites() {
  const handleSave = async () => {
    window.open('https://forms.gle/86Rq7PkWq9ZEXJwR7', '_blank')
  }

  const [refreshKey, setRefreshKey] = useState(0);
  const handlePermabiteCreated = () => setRefreshKey(k => k + 1);

  return (
    <>
      <Helmet>
        <title>Permabites</title>
        <meta name="description" content="Get a taste of the permaweb — pizza, prints, and early access. Apply to host a Permabite!" />
        <meta property="og:title" content="PermaBites" />
        <meta property="og:description" content="Get a taste of the permaweb — pizza, prints, and early access. Apply to host a Permabite!" />
        <meta property="og:image" content="https://arweave.net/zZl-e1njFrbyTaIj_omIFV9Qp8-jxMtqdBs4CGsl44k" />
        <meta property="og:url" content="https://permahub.ar.io/bites" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://arweave.net/zZl-e1njFrbyTaIj_omIFV9Qp8-jxMtqdBs4CGsl44k" />
      </Helmet>
      <div className="bites-background flex flex-col items-center justify-center p-4 relative">
        <div className="bites-content w-full flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="hero-title text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight relative inline-block">
              PERMA-BITES
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></span>
            </h1>
            <p className="hero-subtext text-white/80 text-xl max-w-lg mx-auto mt-6">
              Grassroots Meetups for AO & Arweave Creators
            </p>
            <p className="hero-subtext text-white/60 text-lg max-w-lg mx-auto mt-2">
              Hosted by BazAR
            </p>
          </div>
          <div className="mb-12 flex items-center justify-center gap-4">
            <button 
              onClick={handleSave}
              className="hero-button text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 text-white px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300 tracking-wide uppercase"
            >
              Apply to Host
            </button>
            <a 
              href="https://bazar.arweave.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 hover:rotate-2 transition-all duration-300 ease-in-out cursor-pointer flex items-center"
            >
              <img 
                src="/bazar.png" 
                alt="BazAR" 
                className="h-12 w-auto"
                style={{ maxWidth: '48px', height: 'auto' }}
              />
            </a>
          </div>
          
          {/* Permabites Form Panel */}
          <div className="w-full max-w-2xl mb-12 bg-white/90 rounded-2xl shadow-2xl border border-amber-200 p-8 flex flex-col items-center PermabitesForm-card">
            <PermabitesForm onPermabiteCreated={handlePermabiteCreated} />
          </div>

          {/* Permabites List */}
          <div className="w-full max-w-6xl">
            <h2 className="recent-permabites-heading">
              <span className="inline-block relative">
                Recent Permabites
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/90 to-amber-600/90"></span>
              </span>
            </h2>
            <PermabitesList key={refreshKey} />
          </div>
        </div>
      </div>
    </>
  );
}
