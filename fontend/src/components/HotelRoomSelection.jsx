import React from 'react'

const HotelRoomSelection = ({
  formData,
  hotels,
  roomTypes,
  onHotelChange,
  onDateChange,
  onGuestsChange,
  onRoomTypeChange,
  onSpecialRequestsChange,
}) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Select Hotel & Room</h2>

      {/* Hotel Selection */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-3 sm:mb-4 uppercase tracking-wider">
          Choose Hotel
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              onClick={() => onHotelChange(hotel.id)}
              className={`cursor-pointer p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 
              ${
                formData.hotelId === hotel.id
                  ? 'border-[#c6a46a] bg-[#c6a46a]/10'
                  : 'border-gray-300 hover:border-[#c6a46a]'
              }`}
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-20 sm:h-24 md:h-32 object-cover rounded mb-2 sm:mb-3"
              />
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">{hotel.name}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{hotel.location}</p>
              <div className="flex items-center gap-2 mt-1 sm:mt-2">
                <span className="text-[#c6a46a] text-xs sm:text-base">★★★★★</span>
                <span className="text-xs sm:text-sm text-gray-600">({hotel.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
            Check-In Date
          </label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={onDateChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
            focus:outline-none transition-all text-xs sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
            Check-Out Date
          </label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={onDateChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
            focus:outline-none transition-all text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Guests and Room Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
            Number of Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={onGuestsChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
            focus:outline-none transition-all bg-white text-xs sm:text-sm"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
            Room Type
          </label>
          <select
            name="roomType"
            value={formData.roomType}
            onChange={onRoomTypeChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
            focus:outline-none transition-all bg-white text-xs sm:text-sm"
          >
            {roomTypes.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
          Special Requests (Optional)
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={onSpecialRequestsChange}
          rows="4"
          placeholder="Let us know if you have any special requests (e.g., high floor, early check-in, etc.)"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
          focus:outline-none transition-all resize-none"
        ></textarea>
      </div>
    </div>
  )
}

export default HotelRoomSelection
