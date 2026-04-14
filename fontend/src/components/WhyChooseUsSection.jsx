import React from 'react'

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: '🌟',
      title: 'Premium Quality',
      desc: 'All our hotels are 5-star establishments with world-class facilities',
    },
    {
      icon: '👥',
      title: 'Expert Staff',
      desc: 'Professional and courteous staff dedicated to your comfort',
    },
    {
      icon: '💎',
      title: 'Luxury Experience',
      desc: 'Exceptional service and elegant accommodations',
    },
    {
      icon: '🌍',
      title: 'Prime Locations',
      desc: 'Strategically located near major attractions and city centers',
    },
    {
      icon: '📱',
      title: 'Modern Technology',
      desc: 'High-speed WiFi and smart room facilities',
    },
    {
      icon: '🛡️',
      title: 'Secure & Safe',
      desc: '24/7 security and safety protocols',
    },
  ]

  return (
    <div className="mt-12 sm:mt-16 md:mt-20 pt-12 sm:pt-16 md:pt-20 border-t-2 border-gray-300">
      <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
        Why Choose <span className="text-[#c6a46a]">Our Hotels</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-[#c6a46a]/10 to-transparent rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8
            border border-[#c6a46a]/30 group hover:border-[#c6a46a] hover:shadow-lg transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUsSection
