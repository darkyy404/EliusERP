import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BalanceProvider } from './context/BalanceContext';
import Home from './pages/Home';
import Search from './pages/Search';
import SendMoney from './pages/SendMoney';

function App() {
  return (
    <BalanceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/send/:username" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </BalanceProvider>
  );
}

export default App;