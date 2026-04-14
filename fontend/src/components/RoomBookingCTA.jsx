import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoomBookingCTA = () => {
  const navigate = useNavigate()

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-[#c6a46a] to-[#d4b887] rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">Ready to Book?</h2>
      <p className="text-black mb-6 sm:mb-8 text-xs sm:text-base md:text-lg">Reserve your perfect room today and experience luxury</p>
      <button
        onClick={() => navigate('/booking')}
        className="px-6 sm:px-10 py-2 sm:py-4 bg-black text-[#c6a46a] font-bold uppercase tracking-wider text-xs sm:text-base
        rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Book Now
      </button>
    </div>
  )
}

export default RoomBookingCTA
