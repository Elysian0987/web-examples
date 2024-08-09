import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Home from './pages/Home';
// import ConnectWallet from './pages/ConnectWallet';
// import Swap from './pages/Swap';
// import OnRamp from './pages/OnRamp';
// import TransactionHistory from './pages/TransactionHistory';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/connect-wallet" element={<ConnectWallet />} /> */}
            {/* <Route path="/swap" element={<Swap />} /> */}
            {/* <Route path="/on-ramp" element={<OnRamp />} /> */}
            {/* <Route path="/transaction-history" element={<TransactionHistory />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
