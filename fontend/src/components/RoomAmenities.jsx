import React from 'react'

const RoomAmenities = () => {
  const amenities = [
    { icon: '📡', title: 'Free WiFi', desc: 'High-speed internet' },
    { icon: '🌊', title: 'Shower', desc: 'Luxury bathroom' },
    { icon: '🍷', title: 'Minibar', desc: 'Stocked daily' },
    { icon: '🧴', title: 'Toiletries', desc: 'Premium brands' },
    { icon: '🛏️', title: 'Bedding', desc: '1000 thread count' },
    { icon: '🌡️', title: 'Climate Control', desc: 'Individual AC' },
    { icon: '🔐', title: 'Safe', desc: 'In-room security' },
    { icon: '👕', title: 'Robes & Slippers', desc: 'Luxury fabrics' },
  ]

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 md:pt-20 border-t-2 border-gray-300">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
        Room <span className="text-[#c6a46a]">Amenities</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {amenities.map((amenity, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 
            border-l-4 border-[#c6a46a] text-center transform hover:scale-105"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{amenity.icon}</div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{amenity.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm">{amenity.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoomAmenities
