import { ConnectWallet } from "@thirdweb-dev/react";
import "./web3.css";

export default function Web3() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Web3 Landing
        </h1>

        <p className="description">
          (WIP): web3 social media (e.g. Nostr), IPFS, and novel blockchain interactions.
        </p>

        <div className="connect">
          <ConnectWallet />
        </div>

      </main>
    </div>
  );
}
