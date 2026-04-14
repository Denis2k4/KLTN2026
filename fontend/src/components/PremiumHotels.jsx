import React from 'react'
import { Star, MapPin, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PremiumHotelCard = ({ id, name, location, image, price, rating, reviews }) => {
  const navigate = useNavigate()
  const [isFavorited, setIsFavorited] = React.useState(false)

  return (
    <div className="group h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className="absolute top-4 right-4 p-2.5 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>

        {/* Price Badge */}
        <div className="absolute bottom-4 left-4 bg-[#d4af37] text-black px-4 py-2 rounded-full font-bold text-sm inline-block">
          ${price} <span className="text-xs font-normal">/night</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name & Location */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">{name}</h3>
        <div className="flex items-center gap-1 text-gray-600 mb-4">
          <MapPin className="w-4 h-4 text-[#1a365d]" />
          <p className="text-sm line-clamp-1">{location}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'fill-[#d4af37] text-[#d4af37]'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            <span className="font-bold text-gray-900">{rating}</span> ({reviews} reviews)
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => navigate(`/hotel/${id}`)}
          className="w-full bg-gradient-to-r from-[#1a365d] to-[#2d5a7b] text-white font-bold py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-wider text-sm"
        >
          View Details
        </button>
      </div>
    </div>
  )
}

const FeaturedHotels = () => {
  const hotels = [
    {
      id: 1,
      name: 'The Grand Luxury Resort',
      location: 'Ho Chi Minh City, Vietnam',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=500&fit=crop',
      price: 299,
      rating: 4.8,
      reviews: 1240
    },
    {
      id: 2,
      name: 'Beachfront Paradise Hotel',
      location: 'Da Nang, Vietnam',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=500&fit=crop',
      price: 199,
      rating: 4.6,
      reviews: 892
    },
    {
      id: 3,
      name: 'Mountain Retreat Spa Resort',
      location: 'Sapa, Vietnam',
      image: 'https://images.unsplash.com/photo-1516833073141-a6b8546f7d9d?w=600&h=500&fit=crop',
      price: 159,
      rating: 4.9,
      reviews: 567
    },
    {
      id: 4,
      name: 'Urban Elegance Hotel',
      location: 'Hanoi, Vietnam',
      image: 'https://images.unsplash.com/photo-1512453909229-ce2a5213d368?w=600&h=500&fit=crop',
      price: 249,
      rating: 4.7,
      reviews: 1105
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-semibold mb-4">
            ✨ FEATURED PROPERTIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Our Best Hotels
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked luxury properties offering exceptional service and unforgettable experiences
          </p>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map(hotel => (
            <PremiumHotelCard key={hotel.id} {...hotel} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 bg-[#d4af37] text-black font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 uppercase tracking-wider">
            View All Hotels
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedHotels
