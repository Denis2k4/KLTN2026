import React from 'react'

const SustainabilitySection = () => {
  return (
    <div className="bg-gray-50 rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-12 border-l-4 border-[#c6a46a]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Environmental Commitment</h2>
      <p className="text-gray-600 text-xs sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
        At La Sinfonia, we are committed to sustainable hospitality practices. We have implemented 
        comprehensive environmental initiatives across all our properties, including:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {[
          '🌿 100% Renewable Energy',
          '♻️ Zero-Waste Programs',
          '💧 Water Conservation Systems',
          '🍃 Organic Gardens',
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl flex-shrink-0">{item.split(' ')[0]}</span>
            <span className="text-gray-700 text-xs sm:text-sm md:text-base">{item.slice(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SustainabilitySection
