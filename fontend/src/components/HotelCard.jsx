import React from 'react'

const HotelCard = ({ hotel, onBooking }) => {
  return (
    <div className="group bg-white rounded-lg sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
      transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative overflow-hidden h-48 sm:h-64 md:h-80">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-[#c6a46a] text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full 
        font-bold text-xs sm:text-sm">
          {hotel.rating} ★
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{hotel.name}</h2>
        <p className="text-[#c6a46a] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">📍 {hotel.location}</p>
        <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-2 text-xs sm:text-sm md:text-base">{hotel.description}</p>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#c6a46a] text-xs sm:text-base">
                ★
              </span>
            ))}
          </div>
          <span className="text-gray-600 text-xs sm:text-sm">({hotel.reviews} reviews)</span>
        </div>

        {/* Amenities */}
        <div className="mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm font-bold text-gray-900 mb-2 sm:mb-3">Amenities:</p>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {hotel.amenities.map((amenity, idx) => (
              <span
                key={idx}
                className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 gap-3 sm:gap-0 border-t border-gray-200">
          <div>
            <p className="text-gray-600 text-xs">Starting from</p>
            <p className="text-xl sm:text-2xl font-bold text-[#c6a46a]">${hotel.price}</p>
            <p className="text-gray-600 text-xs">per night</p>
          </div>
          <button
            onClick={() => onBooking()}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-[#c6a46a] text-black font-bold rounded-lg 
            text-xs sm:text-base hover:bg-[#d4b887] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
