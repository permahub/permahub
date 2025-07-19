import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ArweaveWalletKit } from "@arweave-wallet-kit/react";
import WanderStrategy from "@arweave-wallet-kit/wander-strategy";
import OthentStrategy from "@arweave-wallet-kit/othent-strategy";
import BrowserWalletStrategy from "@arweave-wallet-kit/browser-wallet-strategy";
import WebWalletStrategy from "@arweave-wallet-kit/webwallet-strategy";
import AoSyncStrategy from "@vela-ventures/aosync-strategy";
import { WalletContext } from "./components/WalletManager";

const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  const checkWalletConnection = async () => {
    try {
      if (!window.arweaveWallet) {
        setIsConnected(false);
        return;
      }
      const address = await window.arweaveWallet.getActiveAddress();
      setIsConnected(!!address);
    } catch {
      setIsConnected(false);
    }
  };

  useEffect(() => {
    checkWalletConnection();
    window.addEventListener('arweaveWalletLoaded', checkWalletConnection);
    window.addEventListener('arweaveWalletDisconnected', () => setIsConnected(false));
    return () => {
      window.removeEventListener('arweaveWalletLoaded', checkWalletConnection);
      window.removeEventListener('arweaveWalletDisconnected', () => setIsConnected(false));
    };
  }, []);

  return (
    <WalletContext.Provider value={{ isConnected, refreshWalletState: checkWalletConnection }}>
      {children}
    </WalletContext.Provider>
  );
};

// Render the React app
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ArweaveWalletKit
      config={{
        permissions: [
          "ACCESS_ADDRESS",
          "ACCESS_PUBLIC_KEY",
          "SIGN_TRANSACTION",
          "DISPATCH",
        ],
        ensurePermissions: false,
        strategies: [
          new WanderStrategy(),
          new AoSyncStrategy(),
          new OthentStrategy(),
          new BrowserWalletStrategy(),
          new WebWalletStrategy(),
        ],
      }}
    >
      <WalletProvider>
        <App />
      </WalletProvider>
    </ArweaveWalletKit>
  </React.StrictMode>
);
