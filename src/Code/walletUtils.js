
import { useWallet } from '@solana/wallet-adapter-react';

export function useWalletUtils() {
  const { publicKey, connected, connect, disconnect, signMessage } = useWallet();

  const getWalletAddress = () => {
    return publicKey ? publicKey.toBase58() : null;
  };

  const checkIsConnected = () => {
    return connected;
  };

  const connectWallet = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Wallet disconnection failed:', error);
    }
  };

  return {
    connectWallet,
    disconnectWallet,
    checkIsConnected,
    getWalletAddress,
    signMessage
  };
}
