import React, { useState } from 'react';
import { aoWallet } from '../utils/aoWallet';

interface WalletConnectProps {
  onConnect: (wallet: typeof aoWallet) => void;
}

export const WalletConnect: React.FC<WalletConnectProps> = ({ onConnect }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      setIsConnected(true);
      onConnect(aoWallet);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect wallet');
      setIsConnected(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Connect Wallet</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-md">
            {error}
          </div>
        )}

        <button
          onClick={connectWallet}
          disabled={isLoading || isConnected}
          className={`wallet-connect-btn w-full px-4 py-2 rounded-md font-medium transition-colors
            ${isConnected 
              ? 'bg-green-500 dark:bg-green-600 text-white cursor-not-allowed' 
              : isLoading 
                ? 'bg-blue-400 dark:bg-blue-500 text-white cursor-wait' 
                : 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200'
            }`}
        >
          {isLoading ? 'Connecting...' : isConnected ? 'Connected' : 'Connect Wallet'}
        </button>

        {isConnected && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-md">
            Wallet connected successfully!
          </div>
        )}
      </div>
    </div>
  );
}; 