import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ConnectWallet from '../pages/ConnectWallet';
import Swap from '../pages/Swap';
import OnRamp from '../pages/OnRamp';
import TransactionHistory from '../pages/TransactionHistory';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connect-wallet" element={<ConnectWallet />} />
      <Route path="/swap" element={<Swap />} />
      <Route path="/on-ramp" element={<OnRamp />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
    </Routes>
  );
};

export default AppRoutes;
