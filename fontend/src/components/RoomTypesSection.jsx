import React from 'react'
import { Wifi, Wind, Users, Maximize2, DollarSign } from 'lucide-react'

const RoomTypeCard = ({ icon: Icon, name, capacity, amenities, image, startingPrice }) => (
  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
    {/* Image */}
    <div className="relative h-64 overflow-hidden bg-gray-200">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>

    {/* Content */}
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4 text-[#1a365d]" />
            <span className="text-sm font-semibold">{capacity}</span>
          </div>
        </div>
        <div className="p-3 bg-[#1a365d]/10 rounded-lg">
          <Icon className="w-6 h-6 text-[#1a365d]" />
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6 pb-6 border-b border-gray-200 flex-1">
        <p className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">Amenities</p>
        <div className="flex flex-wrap gap-2">
          {amenities.map((amenity, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
              {amenity}
            </span>
          ))}
        </div>
      </div>

      {/* Price & Button */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 text-sm">Starting from</span>
          <span className="text-2xl font-bold text-[#d4af37]">${startingPrice}</span>
        </div>
        <button className="w-full bg-gradient-to-r from-[#1a365d] to-[#2d5a7b] text-white font-bold py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-wider text-xs">
          Book Now
        </button>
      </div>
    </div>
  </div>
)

const RoomTypesSection = () => {
  const roomTypes = [
    {
      icon: Maximize2,
      name: 'Standard Room',
      capacity: 'Up to 2 Guests',
      amenities: ['WiFi', 'AC', 'TV', 'Mini Bar'],
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=400&fit=crop',
      startingPrice: 129
    },
    {
      icon: Maximize2,
      name: 'Deluxe Suite',
      capacity: 'Up to 4 Guests',
      amenities: ['WiFi', 'Spa', 'Kitchen', 'Balcony'],
      image: 'https://images.unsplash.com/photo-1512453909229-ce2a5213d368?w=500&h=400&fit=crop',
      startingPrice: 249
    },
    {
      icon: Maximize2,
      name: 'Presidential Suite',
      capacity: 'Up to 6 Guests',
      amenities: ['WiFi', 'Concierge', 'Pool', 'Butler'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=400&fit=crop',
      startingPrice: 599
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-semibold mb-4">
            🛏️ ROOM TYPES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Room Options
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our carefully designed rooms, each offering luxury and comfort
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {roomTypes.map((room, idx) => (
            <RoomTypeCard key={idx} {...room} />
          ))}
        </div>

        {/* Comparison Info */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Room Amenities Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b-2 border-[#1a365d]">
                <tr>
                  <th className="pb-3 font-bold text-gray-900">Feature</th>
                  <th className="pb-3 font-bold text-gray-900">Standard</th>
                  <th className="pb-3 font-bold text-gray-900">Deluxe</th>
                  <th className="pb-3 font-bold text-gray-900">Presidential</th>
                </tr>
              </thead>
              <tbody>
                {['WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Spa Access', 'Personal Concierge'].map((feature, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="py-3 text-gray-700 font-semibold">{feature}</td>
                    <td className="py-3">{'✓'}</td>
                    <td className="py-3">{'✓'}</td>
                    <td className="py-3">{'✓'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomTypesSection
