import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBalance } from '../context/BalanceContext';

const SendMoney: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const { updateBalance } = useBalance();
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('0.00');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (amount) {
      setConvertedAmount((parseFloat(amount) * 1.0122).toFixed(2));
    } else {
      setConvertedAmount('0.00');
    }
  }, [amount]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount) {
      updateBalance(parseFloat(amount));
      setIsSent(true);
    }
  };

  if (isSent) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 text-center border">
          <img src="https://icons.veryicon.com/png/o/miscellaneous/8atour/success-35.png" alt="Success" className="w-16 h-16 mx-auto mb-4" />
          <p className="text-lg font-medium">You have sent {amount} EUR to {username}</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700"
          >
            Send More
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Top Navigation */}
      <nav className="flex space-x-6 text-sm mb-8">
        <button className="font-medium">Home</button>
        <button className="text-gray-500">Activity</button>
        <button className="text-gray-500">Send & Receive</button>
        <button className="text-gray-500">Marketing</button>
        <button className="text-gray-500">Business Tools</button>
      </nav>

      {/* Payment Box */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 text-center border">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
            {username?.charAt(0).toUpperCase()}
          </div>
          <p className="text-lg font-medium mt-2">{username}</p>
        </div>
        
        <div className="mt-6 flex justify-around">
          <div>
            <p className="text-sm text-gray-500">You send</p>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="text-4xl font-bold text-center border-none focus:outline-none w-32"
            />
            <p className="text-sm text-gray-500">EUR</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Recipient receives</p>
            <p className="text-4xl font-bold">{convertedAmount}</p>
            <p className="text-sm text-gray-500">USD</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-2">Exchange rate: 1 EUR = 1.0122 USD</p>
        <p className="text-xs text-gray-500">This rate includes a margin for currency conversion.</p>

        <form onSubmit={handleSend} className="space-y-6 mt-6">
          <input
            type="text"
            placeholder="What is this payment for?"
            className="w-full p-2 border focus:outline-none rounded"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800"
            disabled={!amount}
          >
            Next
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-xs text-gray-500 flex space-x-4">
        <button>Help</button>
        <button>Contact</button>
        <button>Fees</button>
        <button>Security Center</button>
        <button>About PayPal</button>
        <button>Developers</button>
        <button>Partners</button>
      </footer>
    </div>
  );
};

export default SendMoney;
