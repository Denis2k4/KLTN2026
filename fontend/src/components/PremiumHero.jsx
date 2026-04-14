import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, MapPin, Calendar, Users } from 'lucide-react'

const PremiumHero = () => {
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/booking', { state: searchData })
  }

  return (
    <div className="relative h-screen min-h-96 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&h=1080&fit=crop)',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-5xl w-full">
          {/* Tagline */}
          <div className="text-center mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-4 border border-white/20">
              🌟 LUXURY HOSPITALITY
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Find Your Perfect Stay
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover premium accommodations at the best rates. Book securely and enjoy world-class hospitality.
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/10">
            <form onSubmit={handleSearch} className="space-y-6">
              {/* Desktop Layout */}
              <div className="hidden sm:grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6">
                {/* Destination */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-[#1a365d]" />
                    <input
                      type="text"
                      name="destination"
                      value={searchData.destination}
                      onChange={handleInputChange}
                      placeholder="Where are you going?"
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d4af37] focus:outline-none transition-all bg-white/50 hover:bg-white/80"
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Check-In
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-[#1a365d]" />
                    <input
                      type="date"
                      name="checkIn"
                      value={searchData.checkIn}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d4af37] focus:outline-none transition-all bg-white/50 hover:bg-white/80"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                    Check-Out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-[#1a365d]" />
                    <input
                      type="date"
                      name="checkOut"
                      value={searchData.checkOut}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d4af37] focus:outline-none transition-all bg-white/50 hover:bg-white/80"
                    />
                  </div>
                </div>

                {/* Guests & Search */}
                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                      Guests
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3.5 w-5 h-5 text-[#1a365d]" />
                      <select
                        name="guests"
                        value={searchData.guests}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#d4af37] focus:outline-none transition-all bg-white/50 hover:bg-white/80 appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1a365d] to-[#2d5a7b] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider text-sm"
                  >
                    <Search className="w-5 h-5" />
                    Search Hotels
                  </button>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="sm:hidden space-y-3">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-[#1a365d]" />
                  <input
                    type="text"
                    name="destination"
                    value={searchData.destination}
                    onChange={handleInputChange}
                    placeholder="Where are you going?"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d4af37] focus:outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-[#1a365d]" />
                    <input
                      type="date"
                      name="checkIn"
                      value={searchData.checkIn}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d4af37] focus:outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-[#1a365d]" />
                    <input
                      type="date"
                      name="checkOut"
                      value={searchData.checkOut}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d4af37] focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-3.5 w-5 h-5 text-[#1a365d]" />
                  <select
                    name="guests"
                    value={searchData.guests}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#d4af37] focus:outline-none transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1a365d] to-[#2d5a7b] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Search className="w-5 h-5" />
                  Search Hotels
                </button>
              </div>
            </form>

            {/* Quick Filters */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wider">Quick Filters</p>
              <div className="flex flex-wrap gap-2">
                {['Luxury Hotels', 'Beach Resorts', 'City Hotels', 'Mountain Retreats'].map((filter, idx) => (
                  <button
                    key={idx}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full hover:bg-[#1a365d] hover:text-white transition-all duration-300"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumHero
