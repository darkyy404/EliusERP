import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon, Users, Receipt, Heart, X } from "lucide-react";

interface User {
  id: string;
  initials: string;
  name: string;
  username: string;
}

const generateUserFromSearch = (searchTerm: string): User => {
  const cleanName = searchTerm.trim();
  const initials = cleanName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || 'U';
  
  const username = cleanName.toLowerCase().replace(/\s+/g, '');
  
  return {
    id: Date.now().toString(),
    initials,
    name: cleanName,
    username,
  };
};

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const generatedUser = generateUserFromSearch(searchTerm);
      setFilteredUsers([generatedUser]);
      setShowResults(true);
    } else {
      setFilteredUsers([]);
      setShowResults(false);
    }
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm && filteredUsers.length > 0) {
      navigate(`/send/${filteredUsers[0].username}`);
    }
  };

  const handleUserSelect = (username: string) => {
    navigate(`/send/${username}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white py-3 px-6 flex justify-between items-center">
        <div className="flex space-x-6">
          <h1 className="text-xl font-semibold">PayPal</h1>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-full font-medium">Send & Request</button>
          <button className="text-white">Wallet</button>
          <button className="text-white">Activity</button>
          <button className="text-white">Help</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <span className="bg-red-600 text-white text-xs rounded-full px-2 absolute -top-2 -right-2">6</span>
            ⚙️
          </button>
          <button className="text-white">Log Out</button>
        </div>
      </nav>

      {/* Secondary Navigation Menu */}
      <div className="border-b">
        <div className="max-w-3xl mx-auto px-4">
          <ul className="flex space-x-8">
            <li className="py-4 border-b-2 border-black">
              <button className="font-medium">Send</button>
            </li>
            <li className="py-4">
              <button className="text-gray-500">Request</button>
            </li>
            <li className="py-4">
              <button className="text-gray-500">Contacts</button>
            </li>
            <li className="py-4">
              <button className="text-gray-500">Groups</button>
            </li>
            <li className="py-4">
              <button className="text-gray-500">More</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Send Money</h1>

        <div className="relative">
          <form onSubmit={handleSearch} className="relative">
            <SearchIcon className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Name, username, email, mobile"
              className="w-full pl-12 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setShowResults(false);
                }}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </form>

          {/* Search Results */}
          {showResults && searchTerm.trim() !== "" && (
            <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600">PayPal Users</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {filteredUsers.map((user) => (
                  <button
                    key={user.id}
                    onClick={() => handleUserSelect(user.username)}
                    className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
                      {user.initials}
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500">@{user.username}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => searchTerm && filteredUsers.length > 0 && navigate(`/send/${filteredUsers[0].username}`)}
          className="w-32 mt-6 bg-gray-100 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200"
        >
          Next
        </button>

        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">More ways to send money</h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8" />
              <div>
                <h3 className="font-medium">Split Money</h3>
                <p className="text-gray-600">For gifts, trips, and more.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Receipt className="w-8 h-8" />
              <div>
                <h3 className="font-medium">Send an Invoice</h3>
                <p className="text-gray-600">Customize your invoices, check status, and send.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Heart className="w-8 h-8" />
              <div>
                <h3 className="font-medium">Send & Receive Donations</h3>
                <p className="text-gray-600">Find support and help others.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;