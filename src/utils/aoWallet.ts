import { message, result, results, createDataItemSigner } from "@permaweb/aoconnect";
import { readFileSync } from "node:fs";

interface AOMessageResult {
  Messages: any[];
  Spawns: any[];
  Output: string;
  Error?: string;
}

class AOWallet {
  private static instance: AOWallet;
  private wallet: any;
  private walletPath: string = './wallet.json';

  private constructor() {
    this.loadWallet();
  }

  public static getInstance(): AOWallet {
    if (!AOWallet.instance) {
      AOWallet.instance = new AOWallet();
    }
    return AOWallet.instance;
  }

  private loadWallet() {
    try {
      const walletData = readFileSync(this.walletPath, 'utf-8');
      this.wallet = JSON.parse(walletData);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to load wallet: ${error.message}`);
      }
      throw new Error('Failed to load wallet: Unknown error');
    }
  }

  async sendMessage(processId: string, data: string, tags: { name: string; value: string }[] = []) {
    try {
      const signer = createDataItemSigner(this.wallet);
      
      const messageTags = [
        { name: "Action", value: "Eval" },
        { name: "Data", value: data },
        ...tags
      ];

      const result = await message({
        process: processId,
        tags: messageTags,
        signer
      });

      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to send message: ${error.message}`);
      }
      throw new Error('Failed to send message: Unknown error');
    }
  }

  async getResult(messageId: string, processId: string): Promise<AOMessageResult> {
    try {
      const resultData = await result({
        message: messageId,
        process: processId
      });

      return resultData;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to get result: ${error.message}`);
      }
      throw new Error('Failed to get result: Unknown error');
    }
  }

  async getResults(processId: string, options: { 
    sort?: 'ASC' | 'DESC', 
    limit?: number, 
    from?: string | undefined 
  } = {}) {
    try {
      const resultsData = await results({
        process: processId,
        sort: options.sort || 'ASC',
        limit: options.limit || 25,
        from: options.from
      });

      return resultsData;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to get results: ${error.message}`);
      }
      throw new Error('Failed to get results: Unknown error');
    }
  }
}

export const aoWallet = AOWallet.getInstance(); 