// Type definitions for Arweave wallet global object
interface ArweaveWallet {
  getActiveAddress: () => Promise<string>;
  sign: (transaction: any) => Promise<any>;
  // Add other methods that the wallet might have
}

declare global {
  interface Window {
    arweaveWallet: ArweaveWallet;
  }
}

// This is necessary to make this file a module
export {};
