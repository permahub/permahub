import React from 'react';

const TrustInBlockchain: React.FC = () => {
  return (
    <div className="blog-post-container">
       <a href="/#/home" className="back-link">← Back to Blog</a>
      <h1>Trust in Blockchain Systems: Shared State vs. AO's Verifiable State</h1>
      <br/>

      <h2>Introduction</h2>
      <p>
        Blockchain technology has always been about creating systems we don’t need to trust because you do not rely on any single authority, i.e. making them trustless. 
        We are accustomed to seeing Blockchains like Bitcoin and Ethereum implore this model by making every node verify each transaction. We refer to this as “shared state”, 
        but what if a better, more efficient method existed?
      </p>
      <br/>
      <h2>Shared State vs AO’s Verifiable State</h2>
      <p>
        Think of traditional blockchains like Bitcoin as a room full of accountants. When someone makes a transaction, every accountant independently does the math and checks their answer against everyone else's. 
        This ensures accuracy, but it's like having 10,000 people calculate your restaurant bill – effective but inefficient and frankly expensive to support.
      </p>

      <p>
        AO takes a different approach. Instead of having everyone check everything, it lets designated nodes (called CUs) handle calculations. But here's the key – every calculation, all of its inputs, and its results are permanently recorded on Arweave, 
        like writing in permanent ink or etching it into stone. Anyone can go back and check these calculations anytime they want to verify them, just like with shared state systems, 
        but do so afterwards instead of requiring the entire network to agree at the time of the action. To further this security, there is a stake incentive mechanism involved that if a CU should act maliciously, 
        they can be slashed as a penalty.
      </p>

      <h3>Efficiency and Scalability</h3>
      <br/>
      <p>
        AO provides the same trustless model, but with more focus on efficiency, scalability, and composability for the builder:
      </p>
      <ul>
        <li>Everything is recorded permanently and can't be altered to obscure the truth.</li>
        <li>Anyone can verify any calculation at any time and “vote” against the result if it doesn’t match their calculated output.</li>
        <li>Builders can choose which CU (or cluster of CUs) they trust to do calculations or even use their own.</li>
      </ul>
      <br/>

      <h3>Advantages of AO's Approach</h3>
      <br/>
      <p>
        This new approach offers several advantages:
      </p>
      <ul>
        <li>It's more efficient and cost-effective since not everyone needs to do every calculation.</li>
        <li>Builders can choose how much security they need for different situations, making even the fee model more flexible.</li>
        <li>All actions leave a clear trail on-chain (Arweave) that anyone can audit at any time.</li>
      </ul>

      <p>
        Think of it like the difference between having every bank employee count all the money in every transaction versus having digital records of each count so anyone can verify it later. Both methods ensure honesty, but the second way is more practical and efficient.
      </p>
      <br/>
      <h3>Conclusion</h3>
      <br/>
      <p>
        While AO's method is different from traditional blockchain approaches, it achieves the same goal of creating a trustworthy system. Instead of relying on everyone doing the same work, it relies on transparent record-keeping and the ability to verify everything. 
        This represents a smart evolution in blockchain technology that maintains security while making the whole system more practical to use.
      </p>
      <br/>
      <h2>References & Helpful Links</h2>
      <ul>
        <li><a href="https://5z7leszqicjtb6bjtij34ipnwjcwk3owtp7szjirboxmwudpd2tq.arweave.net/7n6ySzBAkzD4KZoTviHtskVlbdab_yylEQuuy1BvHqc" target="_blank" rel="noopener noreferrer">AO Paper (Sections 4-5)</a></li>
        <li><a href="https://cookbook_ao.g8way.io/" target="_blank" rel="noopener noreferrer">The Cookbook - Getting Started with AO</a></li>
        <li><a href="https://github.com/permaweb/ao" target="_blank" rel="noopener noreferrer">AO GitHub Repo</a></li>
        <li><a href="https://twitter.com/aoTheComputer" target="_blank" rel="noopener noreferrer">AO Announcements Channel</a></li>
        <li><a href="https://discord.gg/mgYgfXbShR" target="_blank" rel="noopener noreferrer">AO Discord Community</a></li>
      </ul>

      <br/>

      <h3>Thanks for reading! Jon "Jonny Ringo" Williams</h3>
      <a href="/#/home" className="back-link">← Back to Blog</a>
    </div>
  );
}

export default TrustInBlockchain;
