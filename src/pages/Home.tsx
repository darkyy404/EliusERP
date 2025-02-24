import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, FileText, RefreshCcw, CreditCard, MoreHorizontal, Bell, Settings, Search } from 'lucide-react';
import { useBalance } from '../context/BalanceContext';

function Home() {
  const navigate = useNavigate();
  const { balance } = useBalance();
  const [searchTerm, setSearchTerm] = useState("");

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-[#1e3b8a] text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
          <img src="https://pngimg.com/d/paypal_PNG7.png" alt="PayPal Logo" className="h-8" />
          <div className="flex space-x-6">
              <button className="bg-[#2d4999] px-4 py-2 rounded-full">Home</button>
              <button>Send & Request</button>
              <button>Wallet</button>
              <button>Activity</button>
              <button>Help</button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">6</span>
            </button>
            <button>
              <Settings className="w-6 h-6" />
            </button>
            <button className="text-sm">Log Out</button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-8 space-y-4">
          {/* Phone Confirmation Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Confirm Mobile Number</h3>
                <p className="text-gray-600">Set up your phone to send and receive money.</p>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">PayPal Balance</h3>
              <button>
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              <h2 className="text-4xl font-bold">{formatBalance(balance)} €</h2>
              <p className="text-gray-600">Available</p>
              <button className="bg-[#1e3b8a] text-white px-6 py-2 rounded-full mt-4">
                Transfer Money
              </button>
            </div>
          </div>

          {/* Payment Plan Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">Pay in 3 Installments</h3>
              <button>
                <MoreHorizontal className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4 space-y-6">
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/search')}
              className="bg-[#1e3b8a] text-white py-3 px-6 rounded-full text-center"
            >
              Send
            </button>
            <button className="bg-[#1e3b8a] text-white py-3 px-6 rounded-full text-center">
              Request
            </button>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-5 gap-4 text-center">
            <div className="space-y-1">
              <Send className="w-6 h-6 mx-auto text-[#1e3b8a]" />
              <p className="text-xs">To Bank Account</p>
            </div>
            <div className="space-y-1">
              <FileText className="w-6 h-6 mx-auto text-[#1e3b8a]" />
              <p className="text-xs">Create Invoice</p>
            </div>
            <div className="space-y-1">
              <RefreshCcw className="w-6 h-6 mx-auto text-[#1e3b8a]" />
              <p className="text-xs">Top Up Phone</p>
            </div>
            <div className="space-y-1">
              <CreditCard className="w-6 h-6 mx-auto text-[#1e3b8a]" />
              <p className="text-xs">Cash Payment</p>
            </div>
            <div className="space-y-1">
              <MoreHorizontal className="w-6 h-6 mx-auto text-[#1e3b8a]" />
              <p className="text-xs">More</p>
            </div>
          </div>

          {/* Recent Actions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Send Again</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#1e3b8a] rounded-full mx-auto mb-2"></div>
                <p className="text-xs">User A</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#1e3b8a] rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs">Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;