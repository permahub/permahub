import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { message, results, createSigner } from '@permaweb/aoconnect';
import { Helmet } from 'react-helmet-async';
import { WalletManager } from '../components/WalletManager';
import './Bites.css';
import * as React from 'react';

interface Permabite {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: number;
  twitter?: string;
}

const PERMABITES_PROCESS_ID = 'gvBd-1CgjsK35tuf7i55TmLDzZpxvR5LlUa0DV6jxBs';

export default function PermabiteDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [permabite, setPermabite] = React.useState<Permabite | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isWalletConnected, setIsWalletConnected] = React.useState(false);

  React.useEffect(() => {
    const checkWalletConnection = () => {
      const connected = !!window.arweaveWallet;
      setIsWalletConnected(connected);
      if (connected) {
        fetchPermabite();
      }
    };

    // Check initial connection
    checkWalletConnection();

    // Listen for wallet connection changes
    window.addEventListener('arweaveWalletLoaded', checkWalletConnection);
    window.addEventListener('arweaveWalletDisconnected', () => {
      setIsWalletConnected(false);
      setPermabite(null);
    });

    return () => {
      window.removeEventListener('arweaveWalletLoaded', checkWalletConnection);
      window.removeEventListener('arweaveWalletDisconnected', () => {
        setIsWalletConnected(false);
        setPermabite(null);
      });
    };
  }, [id]);

    const fetchPermabite = async () => {
    if (!id || !window.arweaveWallet) {
      setError("Permabite ID not provided or wallet not connected");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Create a signer using the Arweave wallet
        const signer = createSigner(window.arweaveWallet);

        // Send a message to get permabites
        const messageId = await message({
          process: PERMABITES_PROCESS_ID,
          signer,
          tags: [
            { name: 'Action', value: 'GetPermabites' }
          ],
          data: ''
        });

        console.log('Fetch message sent, ID:', messageId);

        // Wait a bit for the message to be processed
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Get the results
        const resultsOut = await results({
          process: PERMABITES_PROCESS_ID,
          sort: 'DESC',
          limit: 25
        });

        // Process each result
        const allPermabites: Permabite[] = [];
        
        if (resultsOut.edges && resultsOut.edges.length > 0) {
          for (const edge of resultsOut.edges) {
            const result = edge.node;

            // Check Messages
            if (result.Messages && result.Messages.length > 0) {
              for (const msg of result.Messages) {
                try {
                  const data = JSON.parse(msg.Data);
                  if (Array.isArray(data)) {
                    allPermabites.push(...data);
                  } else if (typeof data === 'object') {
                    allPermabites.push(data);
                  }
                } catch (parseError) {
                  console.error('Error parsing message data:', parseError);
                }
              }
            }

            // Check Output
            if (result.Output && result.Output.data) {
              try {
                const cleanData = result.Output.data.replace(/\u001b\[[0-9;]*m/g, '');
                const data = JSON.parse(cleanData);
                if (Array.isArray(data)) {
                  allPermabites.push(...data);
                } else if (typeof data === 'object') {
                  allPermabites.push(data);
                }
              } catch (parseError) {
                console.log('Output data is not JSON:', result.Output.data);
              }
            }
          }
        }

        // Find the permabite with the matching ID
        const foundPermabite = allPermabites.find(bite => bite.id === id);
        
        if (foundPermabite) {
          setPermabite(foundPermabite);
        setError(null);
        } else {
          setError("Permabite not found");
        }
      } catch (err) {
        console.error('Error fetching permabite:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch permabite');
      } finally {
        setLoading(false);
      }
    };

  const goBack = () => {
    navigate('/bites');
  };

  if (!isWalletConnected) {
    return (
      <div className="bites-background min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Connect Wallet to View Permabite</h3>
          <p className="text-gray-600 mb-4">
            Please connect your wallet to view and interact with this permabite.
          </p>
          <div className="flex justify-center">
            <WalletManager />
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bites-background min-h-screen flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <p className="text-gray-600 mt-4">Loading permabite...</p>
        </div>
      </div>
    );
  }

  if (error || !permabite) {
    return (
      <div className="bites-background flex flex-col items-center justify-center p-4 min-h-screen">
        <div className="p-6 bg-white rounded-xl border border-red-200 shadow-lg max-w-xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{!permabite ? "Permabite Not Found" : "Error Loading Permabite"}</h3>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {!permabite && !error && <p className="text-gray-600 mb-4">The permabite you're looking for could not be found.</p>}
          <p className="text-gray-500 text-sm">
            This might be due to a network issue, the Arweave wallet not being connected, or the permabite ID being invalid.
          </p>
          <div className="mt-6 flex space-x-4">
            <button 
              onClick={goBack}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition"
            >
              Go Back
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md transition"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{permabite.title} | PermaHub</title>
        <meta name="description" content={permabite.content.substring(0, 160)} />
      </Helmet>
      <div className="bites-background min-h-screen flex flex-col items-center justify-center p-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="permabite-detail-card max-w-3xl w-full overflow-hidden"
        >
          <div className="p-6 md:p-8">
            <button
              onClick={goBack}
              className="mb-6 text-gray-500 hover:text-gray-700 flex items-center transition"
            >
              <span className="mr-2">←</span> Back to all permabites
            </button>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">{permabite.title}</h1>
            
            <div className="flex items-center justify-between mb-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">By {permabite.author || 'anon'}</span>
                {permabite.twitter && (
                  <a 
                    href={`https://twitter.com/${permabite.twitter}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1DA1F2] hover:text-[#1a91da] transition-colors flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span className="text-xs font-medium">@{permabite.twitter}</span>
                  </a>
                )}
              </div>
              <span>{new Date(permabite.timestamp).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            
            <div className="permabite-content mb-8">
              <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{permabite.content}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-6 flex justify-between items-center">
              <div className="text-gray-500">
                Permabite ID: <span className="font-mono text-xs">{permabite.id.substring(0, 10)}...</span>
              </div>
              <div className="flex space-x-3">
                <button className="text-gray-500 hover:text-gray-700 transition" title="Share">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
