import React from 'react';
import { ConnectButton } from '@arweave-wallet-kit/react';

// Context and hook are still exported, but Provider will be moved to main.tsx
export const WalletContext = React.createContext<{
  isConnected: boolean;
  refreshWalletState: () => void;
}>({
  isConnected: false,
  refreshWalletState: () => {},
});

export const useWalletState = () => React.useContext(WalletContext);

export const WalletManager: React.FC = () => {
  return <ConnectButton className="wallet-connect-button" />;
}; 