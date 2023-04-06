import { Link } from "react-router-dom";
//import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Chris McGee
        </h1>

        <p className="description">
          Software Engineer, FinTech Enthusiast
        </p>

        <div className="grid">
          <Link to="/web2">
            <div className="card">
              <h2>Web2 Landing</h2>
            </div>
          </Link>

          <Link to="/web3">
            <div className="card">
              <h2>Web3 Landing</h2>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
