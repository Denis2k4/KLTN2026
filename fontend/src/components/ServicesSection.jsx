import React from 'react'
import { Wifi, Utensils, Dumbbell, Shield, Wind, Coffee } from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group text-center p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-[#1a365d]/5 hover:to-[#d4af37]/5 transition-all duration-300 hover:shadow-lg">
    <div className="flex justifyitem-center mb-4">
      <div className="p-4 bg-gradient-to-br from-[#1a365d] to-[#2d5a7b] rounded-xl group-hover:shadow-lg transition-all duration-300">
        <Icon className="w-6 h-6 text-[#d4af37]" />
      </div>
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
)

const ServicesSection = () => {
  const services = [
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Award-winning restaurants with international cuisine prepared by world-class chefs'
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'High-speed internet throughout the property for seamless connectivity'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with personal training and wellness programs'
    },
    {
      icon: Shield,
      title: 'Security',
      description: '24/7 security, safe deposit boxes, and secure parking facilities'
    },
    {
      icon: Wind,
      title: 'Spa & Wellness',
      description: 'Relaxing spa treatments and wellness programs for rejuvenation'
    },
    {
      icon: Coffee,
      title: 'Concierge',
      description: '24/7 concierge service to arrange tours, transportation, and activities'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-semibold mb-4">
            🏨 WORLD-CLASS AMENITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exceptional Services & Amenities
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience luxury hospitality with our comprehensive range of premium services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-[#1a365d]/5 to-[#d4af37]/10 rounded-2xl p-8 md:p-12 border border-[#1a365d]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">500+</p>
              <p className="text-gray-600 font-semibold">Luxury Properties</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">98%</p>
              <p className="text-gray-600 font-semibold">Guest Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">50K+</p>
              <p className="text-gray-600 font-semibold">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
