import { ConnectWallet } from "@thirdweb-dev/react";
import "./web3.css";

export default function Web3() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Web3 Landing
        </h1>

        <div className="connect">
          <ConnectWallet />
        </div>

      </main>
    </div>
  );
}
