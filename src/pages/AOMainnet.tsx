import React from 'react';

const AOMainnetLive: React.FC = () => {
  return (
    <div className="article-container">
      <h1>AO Mainnet is Live</h1>
      <p>
        AO mainnet is live. With many new updates to AO, there’s a lot to unpack. This post offers a high-level overview of what’s new and introduces AO's ecosystem funding model, the Permaweb Index (PI).
      </p>

      <h2>What is AO?</h2>
      <p>
        AO is a hyper-parallel decentralized computer inspired by the actor-oriented paradigm. Unlike traditional blockchain computation models, AO scales efficiently through parallel processing, reducing redundancy while ensuring network verifiability and minimizing trust requirements.
      </p>
      <p>
        Since February 2024, AO has been running on testnet, allowing users to interact with the network without fees while testing and refining the protocol. Now, AO is live on mainnet.
      </p>

      <h2>What’s New?</h2>
      <ul>
        <li>AO-Core</li>
        <li>AO Token is transferable</li>
        <li>Permaweb Index (PI)</li>
      </ul>

      <h3>AO-Core</h3>
      <p>
        AO-Core is a new powerful protocol that embeds blockchain-style computation verification directly into the internet’s infrastructure, specifically within the HTTP transport layer. This means that every web request, whether loading a webpage or interacting with an API, can function as an AO transaction. Instead of requiring separate blockchain integrations, AO is seamlessly embedded into the existing web stack.
      </p>
      <p>
        Why does this matter? The internet has 5.5 billion users, while all blockchains combined have around 300 million. By integrating with existing web standards, AO can tap into this massive user base without friction.
      </p>
      <p>
        This is enabled by HTTP Message Signatures, a new internet standard formalized last year. It allows native signing and verification of HTTP requests, making AO transactions verifiable and transparent without altering how people already use the web.
      </p>
      <p>
        Additionally, AO eliminates the need for oracles. Since AO operates as a decentralized web server, data exchange between AO processes and the wider internet happens natively, without relying on third-party intermediaries.
      </p>

      <h3>Scaling without Redundancy</h3>
      <p>
        Traditional blockchain networks like Ethereum and Solana rely on repeated execution of the same programs across multiple nodes, which limits scalability. AO, however, increases overall computational power as new hardware joins the network.
      </p>

      <h3>Trusted Execution Environments (TEE)</h3>
      <p>
        A Trusted Execution Environment (TEE) is like a CPU with the security of a hardware wallet. It ensures that computations occur in a protected space where even the hosting machine cannot see or alter the data being processed.
      </p>
      <p>
        Compared to Zero-Knowledge Proofs (ZKPs) and Fully Homomorphic Encryption (FHE), which provide privacy but with significant performance trade-offs, TEEs deliver high security with minimal computational overhead.
      </p>

      <h4>How TEEs work in AO</h4>
      <ul>
        <li>Attestations of correctness – TEEs can verify computations efficiently, even stacking across multiple hardware manufacturers for added trust.</li>
        <li>Private computation – Users can run secure applications without revealing underlying data, similar to encrypted transactions but with real-time processing.</li>
      </ul>
      <p>
        This approach brings blockchain-level verifiability to AI, finance, and other data-sensitive industries, without the massive computational costs of traditional cryptographic methods.
      </p>

      <h2>AO Fair Launch Token</h2>
      <p>
        AO follows a 100% fair launch model, no pre-mined tokens, no insider allocations. Instead, AO tokens are earned through network participation. Now that 15% of AO tokens have been mined, the token can now be transferred. Depositors can still bridge assets like stETH and DAI into AO’s pre-bridge system or hold AR to continue earning AO tokens.
      </p>
      <p>
        AO’s native yield mechanism supports both ecosystem builders and core development efforts, aligning long-term incentives for all participants.
      </p>

      <h2>Permaweb Index (PI)</h2>
      <p>
        The Permaweb Index (PI) acts as a default means of exchange on the permaweb, offering broad exposure to the entire ecosystem without active management. PI is a token representing ownership of key permaweb assets:
      </p>
      <ul>
        <li>1/3 AO</li>
        <li>1/3 AR</li>
        <li>1/3 fair-launch projects</li>
      </ul>

      <h4>How PI works</h4>
      <ul>
        <li>Any staked asset depositor or Arweave holder can delegate AO yield to new fair launch projects.</li>
        <li>In return, they receive a portion of those projects’ fair launch tokens.</li>
      </ul>
      <p>
        This enables projects to distribute 100% of their tokens to users while still securing development funding. This DeFi technology built by Autonomous Finance uses a combination of smart algorithms and autonomous agents to manage liquidity.
      </p>
      <p>
        Unlike traditional VC funding, this model eliminates zero-sum competition and fosters collaborative growth across the ecosystem.
      </p>

      <h2>Fair Launch Projects</h2>
      <p>
        On the AO mint site, you can customize your rewards by adjusting the mix of PI, AO, and/or AR you earn, as well as selecting specific tokens from participating permaweb projects. These preferences will take effect on March 14th; until then, rewards will be issued in AO tokens.
      </p>
      <p>
        The following projects are participating in the first fair launch, with more details on how to participate coming soon.
      </p>
      <ul>
        <li><strong>Apus Network</strong> – Decentralized AI platform utilizing AO and Arweave for deterministic GPU computing.</li>
        <li><strong>ar.io</strong> – First permanent cloud network providing permanent data storage and web hosting.</li>
        <li><strong>Basejump</strong> – Scalable, permissionless AI gaming substrate.</li>
        <li><strong>Bazar</strong> – Digital content marketplace built on AO’s Universal Content Marketplace (UCM), a decentralized order book for creators.</li>
        <li><strong>Botega</strong> – AI-powered DEX leveraging autonomous agents for optimized liquidity and advanced order execution.</li>
        <li><strong>Protocol.Land</strong> – Decentralized source control platform for building and deploying applications and protocols.</li>
      </ul>

      <h2>Summary</h2>
      <p>
        AO mainnet is live, introducing AO-Core, a tradeable AO token, and the Permaweb Index (PI) among many more updates. AO-Core embeds blockchain-style verifiability into the internet’s transport layer, enabling scalable decentralized computation. The AO token, launched through a fair launch distribution, is now tradeable, rewarding ecosystem participation.
      </p>
      <p>
        PI offers a new funding model, providing exposure to AR, AO, and fair-launch project tokens, fostering collaboration across the permaweb. Several projects are already leveraging AO's fair launch model for decentralized marketplaces, AI, and permanent cloud infrastructure.
      </p>
      <p>
        AO mainnet is a major step toward a more scalable, verifiable, and decentralized web. Learn more about the next steps for AO development and stay updated by following AO on X.
      </p>

      <p>This is not financial advice. Please do your own research.</p>
      <p>Original post: <a href="https://paragraph.xyz/@afmedia/ao-mainnet-is-live">https://paragraph.xyz/@afmedia/ao-mainnet-is-live</a></p>

      <h3>Links for more details:</h3>
      <ul>
        <li><a href="https://ao.arweave.net/#/">AO Website</a></li>
        <li><a href="https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840/ot6Tu0GduY4_kKhoVw9rNPLOPix8DS_Z_3tBPhCK_v0">AO Mirror.xyz</a></li>
        <li><a href="https://oauth.net/http-signatures/">HTTP Message Signatures</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Trusted_execution_environment">Trusted Execution Environment (TEE)</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Zero-knowledge_proof">Zero-Knowledge Proofs (ZKP)</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Homomorphic_encryption#Fully_homomorphic_encryption">Fully Homomorphic Encryption (FHE)</a></li>
        <li><a href="https://www.autonomous.finance/">Autonomous Finance</a></li>
        <li><a href="https://ao.arweave.net/#/mint/yield/">AO Mint Site</a></li>
        <li><a href="https://x.com/aoTheComputer">Follow AO on X</a></li>
      </ul>
    </div>
  );
}

export default AOMainnetLive;
