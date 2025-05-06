import { motion, AnimatePresence } from 'framer-motion';
import { message, results, createSigner } from '@permaweb/aoconnect';
import { useNavigate } from 'react-router-dom';
import './Permabites.css';
import * as React from 'react';

interface Permabite {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: number;
  twitter?: string;
}

const PERMABITES_PROCESS_ID = 'GMMejKCd-NNESBauFsf4RXBniYb5Yzwa_1WTrshiJZc';

export function PermabitesList() {
  const [permabites, setPermabites] = React.useState<Permabite[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchPermabites = async () => {
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
          sort: 'DESC', // Get newest first
          limit: 25
        });

        console.log('Results:', resultsOut);

        // Process each result
        const allPermabites: Permabite[] = [];
        
        if (resultsOut.edges && resultsOut.edges.length > 0) {
          for (const edge of resultsOut.edges) {
            const result = edge.node;
            console.log('Processing result:', result);

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

        // Remove duplicates based on id
        const uniquePermabites = allPermabites.filter((permabite, index, self) =>
          index === self.findIndex((p) => p.id === permabite.id)
        );

        console.log('Final permabites:', uniquePermabites);
        setPermabites(uniquePermabites);
      } catch (err) {
        console.error('Error fetching permabites:', err);
        setError('Failed to load permabites');
      } finally {
        setLoading(false);
      }
    };

    fetchPermabites();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="text-gray-600 mt-4">Loading permabites...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white rounded-xl border border-red-200 shadow-lg max-w-xl mx-auto my-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Error Loading Permabites</h3>
        <p className="text-red-500 mb-4">{error}</p>
        <p className="text-gray-500 text-sm">
          This might be due to a network issue or the Arweave wallet not being connected. 
          Please check your connection and try refreshing the page.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full py-8 relative z-10">
      <div className="permabites-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {permabites.map((permabite) => (
            <motion.div
              key={permabite.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <div 
                className="permabite-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer"
                onClick={() => navigate(`/bites/${permabite.id}`)}
              >
                <div className="p-5 flex-grow">
                  <h3 className="text-xl font-bold mb-3 leading-tight text-gray-800 force-black-text">{permabite.title}</h3>
                  <div className="permabite-card-content">
                    <p className="text-gray-600 text-sm leading-relaxed break-words whitespace-pre-line line-clamp-4 force-black-text">{permabite.content}</p>
                  </div>
                </div>
                <div className="permabite-card-footer">
                  <div className="flex items-center gap-2">
                    <span className="font-medium force-black-text">{permabite.author || 'anon'}</span>
                    {permabite.twitter && (
                      <a 
                        href={`https://twitter.com/${permabite.twitter}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#1DA1F2] hover:text-[#1a91da] transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                  <span className="force-black-text">{new Date(permabite.timestamp).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {permabites.length === 0 && !loading && !error && (
        <div className="no-permabites-message text-zinc-500 dark:text-zinc-400">
          No permabites found. Be the first to share one!
        </div>
      )}
    </div>
  );
}
