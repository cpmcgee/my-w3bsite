import './navbar.css';
import {  Link } from "react-router-dom";

export default function Navbar() {
  return (
  <div className="navbar-container">
      <Link to="/">
        <div className="navbar-item">
          Home
        </div>
      </Link>
      <Link to="/web2">
        <div className="navbar-item">
          Web2
        </div>
      </Link>
      <Link to="/web3">
        <div className="navbar-item">
          Web3
        </div>
      </Link>
  </div>
  );
}