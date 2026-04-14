import React from 'react'

const GuestInformation = ({ formData, onInputChange }) => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Guest Information</h2>

      {/* Guest Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
            focus:outline-none transition-all text-xs sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
            focus:outline-none transition-all text-xs sm:text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
            focus:outline-none transition-all text-xs sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onInputChange}
            required
            className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-[#c6a46a] 
            focus:outline-none transition-all text-xs sm:text-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default GuestInformation
