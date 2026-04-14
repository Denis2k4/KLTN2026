import React from 'react'

const LoyaltyBenefits = () => {
  const benefits = [
    {
      icon: '🎁',
      title: 'Exclusive Rewards',
      desc: 'Earn points on every booking and enjoy special discounts',
    },
    {
      icon: '⭐',
      title: 'VIP Status',
      desc: 'Access to exclusive member-only offers and upgrades',
    },
    {
      icon: '🎉',
      title: 'Special Offers',
      desc: 'Get early access to promotions and seasonal deals',
    },
    {
      icon: '🛏️',
      title: 'Priority Booking',
      desc: 'Guaranteed availability for your preferred rooms',
    },
  ]

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
        Join Our <span className="text-[#c6a46a]">Loyalty Program</span>
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex gap-3 sm:gap-4">
            <div className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">{benefit.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">{benefit.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoyaltyBenefits
