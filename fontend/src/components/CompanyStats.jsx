import React from 'react'

const CompanyStats = () => {
  const stats = [
    { number: '15+', label: 'Properties' },
    { number: '50K+', label: 'Happy Guests' },
    { number: '18+', label: 'Years of Excellence' },
    { number: '5.0', label: 'Star Rating' },
  ]

  return (
    <div className="bg-gradient-to-r from-[#c6a46a] to-[#d4b887] rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-1 sm:mb-2">{stat.number}</p>
            <p className="text-black font-semibold text-xs sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyStats
