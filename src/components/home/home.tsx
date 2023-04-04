import { Link } from "react-router-dom";
import "./home.css";

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
          <li className="card">
            <Link to="/web2">Web2</Link>
          </li>

          <li className="card">
            <Link to="/web3">Web3</Link>
          </li>
        </div>
      </main>
    </div>
  );
}
