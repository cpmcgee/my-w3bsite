// import { ConnectWallet } from "@thirdweb-dev/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Web2 from './components/web2/web2';
import Web3 from './components/web3/web3';
import './globals.css'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/web2' element={<Web2/>} />
          <Route path='/web3' element={<Web3/>} />
        </Routes>
      </Router>
    </>
  );
}
