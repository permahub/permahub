import { useNavigate } from "react-router-dom";
import "./More.css";

const More = () => {
  const navigate = useNavigate();

  return (
    <div className="more-container">
      {/* Background Image in Top-Right Corner */}
      <div className="corner-image3"></div>
      <div className="corner-image4"></div>
      <div className="corner-image5"></div>
      <div className="corner-image6"></div>

      {/* Hero Section with Background */}
      <div className="more-hero-section">
        <h1 className="more-hero-title">Welcome to <br />AO Fair Launch</h1>
        <p className="more-hero-text">
          Learn more about the AO mainnet and its innovative features.
        </p>
      </div>

      {/* Switching on AO Section */}
      <div className="more-season-section section-with-background-1">
        <h2>Switching on AO (AO IO)</h2>
        <p className="more-fair-launch-text">
          The AO mainnet is now live, fully switching on the hyper parallel computer built into the core of the Arweave network. After experiencing overwhelming community growth during its yearlong testnet phase, with over 1.5 billion processed messages, more than $700 million in pre-bridged TVL assets, and over 100 projects already building in the ecosystem - from AI powered games to the largest web3 social network - AO’s network design and fair token distribution opens up a new possibility for ecosystem projects to launch with an entirely new mechanism, one that allows them to fully focus around their communities: the Fair-Launch path.
        </p>
      </div>

      {/* The Fair Launch Distribution Section */}
      <div className="more-participation-section section-with-background-2">
        <h3>The Fair Launch Distribution</h3>
        <p>
          Fair-Launch is a feature unique to the AO network. Instead of having to resort to private token sales for initial funding, Projects building on AO now have the ability to implement fair and transparent distributions for their projects, where users earn token ownership by delegating their AO yield to the applications of their choice. This way, teams allow users to get involved from the start and directly support project development, promoting real-time feedback loops, organic growth and total community ownership.
        </p>
      </div>

      {/* The Permaweb Index Section */}
      <div className="more-guidelines-section">
        <h3>The Permaweb Index</h3>
        <p>
          The AO main net launches with an economic instrument that lets users track and indirectly participate in the ecosystem: The Permaweb Index (Pi). Pi is a new index token that grants holders exposure to both AR and AO, as well as a basket of ecosystem projects through a single token. Pi is powered by an autonomous on-chain agent that rebalances holdings based on community support, creating an efficient funding environment for early-stage projects. In other words, the Permaweb index adjusts holdings based on project relevance, user engagement, and market dynamics, all without arbitrary decisions from third party funds, foundations, or DAOs.
        </p>
      </div>

      {/* Additional Resources Section */}
      <div className="more-runtime-section section-with-background-3">
        <h3>Additional Info</h3>
        <p>
          To learn more about Fair-Launches, The Permaweb Index, and other features of the AO mainnet, check out the resources below, and join the community and help us build a free cyberspace.
        </p>
        <p className="more-cta-text">
          Resources:
        </p>
        <ul className="resource-links">
         <li><a href="https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840/-UWra0q0KWecSpgg2-c37dbZ0lnOMEScEEkabVm9qaQ" target="_blank" rel="noopener noreferrer">100% Fair Launch</a></li>
         <li><a href="https://ao.arweave.net/#/mint/yield/" target="_blank" rel="noopener noreferrer">Choose Your Yield: Pi or AO</a></li>
         <li><a href="https://x.com/aoTheComputer/status/1888776191043137748" target="_blank" rel="noopener noreferrer">AO: Looking Forward</a></li>
        </ul>
       <button className="explore-button" onClick={() => navigate("/home")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default More;