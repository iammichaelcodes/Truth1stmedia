
import React from "react";
import { useWallet } from "@solana/wallet-adapter-react";

const ConnectWalletButton = () => {
  const { publicKey, connected, connect, disconnect } = useWallet();

  return (
    <div className="flex justify-end mb-4">
      {connected ? (
        <button
          onClick={disconnect}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-semibold shadow"
        >
          Disconnect ({publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)})
        </button>
      ) : (
        <button
          onClick={connect}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded font-bold shadow"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
