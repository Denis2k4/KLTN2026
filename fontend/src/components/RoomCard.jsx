import React from 'react'

const RoomCard = ({ room, index, onBooking, onViewGallery }) => {
  const features = [
    '🛏️ Premium Bedding',
    '📺 Smart TV',
    '☕ Coffee Machine',
    '🚿 Luxury Bathroom',
    '❄️ Air Conditioning',
    '📱 USB Charging',
    '🔒 Safe',
    '🌃 City View',
  ]

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center`}>
      {/* Image */}
      <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className="relative overflow-hidden rounded-lg sm:rounded-2xl shadow-2xl group h-64 sm:h-80 md:h-96">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-6 right-6 bg-[#c6a46a] text-black px-4 py-2 rounded-full font-bold">
            ${room.price}/night
          </div>
        </div>
      </div>

      {/* Details */}
      <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{room.name}</h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">{room.description}</p>

        {/* Features */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Room Features:</h3>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
                <span className="text-lg sm:text-xl">{feature.split(' ')[0]}</span>
                <span className="text-xs sm:text-sm">{feature.slice(2)}</span>
              </div>
            ))}
          </ul>
        </div>

        {/* Capacity */}
        <div className="bg-gray-100 rounded-lg p-3 sm:p-4 mb-4 sm:mb-8">
          <p className="text-gray-700 text-sm sm:text-base">
            <span className="font-bold">Guest Capacity:</span> {room.capacity}{' '}
            {room.capacity === 1 ? 'guest' : 'guests'}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={onBooking}
            className="flex-1 px-4 sm:px-8 py-3 sm:py-4 bg-[#c6a46a] text-black font-bold uppercase tracking-wider 
            rounded-lg text-sm sm:text-base hover:bg-[#d4b887] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book This Room
          </button>
          <button
            onClick={onViewGallery}
            className="flex-1 px-4 sm:px-8 py-3 sm:py-4 border-2 border-[#c6a46a] text-[#c6a46a] font-bold uppercase 
            tracking-wider rounded-lg text-sm sm:text-base hover:bg-[#c6a46a] hover:text-black transition-all duration-300"
          >
            View Gallery
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
