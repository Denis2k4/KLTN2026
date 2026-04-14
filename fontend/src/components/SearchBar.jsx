import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  
  const [searchData, setSearchData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "all",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Pass search data via navigation state if needed
    navigate("/booking", { state: searchData });
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
      <form
        onSubmit={handleSearch}
        className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {/* Check-in Date */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
              Check-In
            </label>
            <input
              type="date"
              name="checkIn"
              value={searchData.checkIn}
              onChange={handleChange}
              required
              className="px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
              focus:outline-none transition-all duration-300 text-xs sm:text-sm text-gray-700"
            />
          </div>

          {/* Check-out Date */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
              Check-Out
            </label>
            <input
              type="date"
              name="checkOut"
              value={searchData.checkOut}
              onChange={handleChange}
              required
              className="px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
              focus:outline-none transition-all duration-300 text-xs sm:text-sm text-gray-700"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
              Guests
            </label>
            <select
              name="guests"
              value={searchData.guests}
              onChange={handleChange}
              className="px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
              focus:outline-none transition-all duration-300 text-xs sm:text-sm text-gray-700 bg-white"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>

          {/* Room Type */}
          <div className="flex flex-col">
            <label className="text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
              Rooms
            </label>
            <select
              name="roomType"
              value={searchData.roomType}
              onChange={handleChange}
              className="px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
              focus:outline-none transition-all duration-300 text-xs sm:text-sm text-gray-700 bg-white"
            >
              <option value="all">All Types</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
              <option value="presidential">Presidential</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#c6a46a] text-black font-bold uppercase 
              tracking-wider rounded-lg hover:bg-[#d4b887] transition-all duration-300 
              shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      {/* Quick Filters */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-semibold backdrop-blur-sm border border-white/30">
          ⭐ Luxury Hotels
        </button>
        <button className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-semibold backdrop-blur-sm border border-white/30">
          🏖️ Beach Resorts
        </button>
        <button className="px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300 text-sm font-semibold backdrop-blur-sm border border-white/30">
          🏙️ City Hotels
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
