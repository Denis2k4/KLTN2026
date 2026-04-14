import React from 'react'

const BookingSummary = ({
  selectedHotel,
  selectedRoom,
  formData,
  totalPrice,
  nights,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 sticky top-20 sm:top-40 max-h-[calc(100vh-6rem)] overflow-y-auto">
      {/* Header */}
      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Booking Summary</h3>

      {/* Summary Details */}
      <div className="space-y-2 sm:space-y-4 pb-4 sm:pb-6 border-b border-gray-300">
        <div className="flex justify-between text-xs sm:text-base">
          <span className="text-gray-600">Hotel:</span>
          <span className="font-semibold text-gray-900">{selectedHotel?.name}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-base">
          <span className="text-gray-600">Check-In:</span>
          <span className="font-semibold text-gray-900">{formData.checkInDate}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-base">
          <span className="text-gray-600">Check-Out:</span>
          <span className="font-semibold text-gray-900">{formData.checkOutDate}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-base">
          <span className="text-gray-600">Number of Nights:</span>
          <span className="font-semibold text-gray-900">{nights}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-base">
          <span className="text-gray-600">Room Type:</span>
          <span className="font-semibold text-gray-900">{selectedRoom?.name}</span>
        </div>
        <div className="flex justify-between text-xs sm:text-base">
          <span className="text-gray-600">Guests:</span>
          <span className="font-semibold text-gray-900">{formData.guests}</span>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
        <div className="flex justify-between text-gray-600 text-xs sm:text-base">
          <span>${selectedRoom?.price} × {nights} nights</span>
          <span className="font-semibold">${(selectedRoom?.price || 0) * nights}</span>
        </div>
        <div className="flex justify-between pt-2 sm:pt-3 border-t border-gray-300">
          <span className="font-bold text-gray-900 text-sm sm:text-lg">Total Price:</span>
          <span className="font-bold text-[#c6a46a] text-lg sm:text-2xl">${totalPrice}</span>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-4 sm:mt-6 bg-blue-50 border-l-4 border-blue-500 p-3 sm:p-4 rounded">
        <p className="text-xs sm:text-sm text-blue-900">
          💳 <span className="font-semibold">Secure Payment</span>
          <br />
          Your payment information is protected with industry-standard encryption.
        </p>
      </div>
    </div>
  )
}

export default BookingSummary
