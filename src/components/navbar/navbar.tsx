import './navbar.css';
import {  Link } from "react-router-dom";

export default function Navbar() {
  return (
  <div className="navbar-container">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/web2">Web2</Link>
    </li>
    <li>
      <Link to="/web3">Web3</Link>
    </li>
  </div>
  );
}