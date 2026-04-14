import React from 'react'
import { Zap, Gift, Clock } from 'lucide-react'

const OfferCard = ({ icon: Icon, badge, title, description, discount, cta }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/5 to-[#d4af37]/10 group-hover:from-[#1a365d]/10 group-hover:to-[#d4af37]/20 transition-all duration-300" />

    {/* Content */}
    <div className="relative p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-[#d4af37] rounded-lg group-hover:shadow-lg transition-all duration-300">
          <Icon className="w-6 h-6 text-[#1a365d]" />
        </div>
        <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase tracking-wider">
          {badge}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6">{description}</p>

      {/* Discount Highlight */}
      <div className="bg-gradient-to-r from-[#1a365d] to-[#2d5a7b] rounded-xl p-4 mb-6 text-center">
        <p className="text-[#d4af37] text-sm font-semibold mb-1">Save up to</p>
        <p className="text-white text-4xl font-bold">{discount}</p>
      </div>

      <button className="w-full bg-[#d4af37] text-black font-bold py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm">
        {cta}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">Limited time offer</p>
    </div>
  </div>
)

const SpecialOffers = () => {
  const offers = [
    {
      icon: Zap,
      badge: 'Hot Deal',
      title: 'Early Bird Special',
      description: 'Book your stay 30+ days in advance and enjoy exclusive discount on all room types',
      discount: '30%',
      cta: 'Book Early'
    },
    {
      icon: Gift,
      badge: 'Limited Time',
      title: 'Honeymoon Package',
      description: 'Perfect package for couples with complimentary spa, champagne, and romantic dinner',
      discount: '25%',
      cta: 'Book Package'
    },
    {
      icon: Clock,
      badge: 'Last Minute',
      title: 'Flash Sale',
      description: 'Last-minute booking deals for stays within 7 days. First come, first served!',
      discount: '40%',
      cta: 'Book Now'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
            🎉 Special Offers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exclusive Deals & Promotions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Book now and save! Limited-time offers for your perfect getaway
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offers.map((offer, idx) => (
            <OfferCard key={idx} {...offer} />
          ))}
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-[#1a365d] via-[#2d5a7b] to-[#1a365d] rounded-2xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d4af37] rounded-full opacity-10" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#d4af37] rounded-full opacity-10" />
          
          <div className="relative z-10">
            <p className="text-[#d4af37] text-lg font-semibold mb-2">🎊 LOYALTY REWARDS</p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Exclusive Members Program
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Earn points on every booking, unlock VIP perks, and enjoy members-only rates
            </p>
            <button className="px-8 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider">
              Become A Member
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
