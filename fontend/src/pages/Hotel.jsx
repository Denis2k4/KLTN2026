import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HotelCard from '../components/HotelCard'
import WhyChooseUsSection from '../components/WhyChooseUsSection'

const Hotel = () => {
  const navigate = useNavigate()
  const { hotels } = useContext(AppContext)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#c6a46a]">Hotels</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of luxury hotels across Vietnam's most beautiful destinations
            </p>
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} onBooking={() => navigate('/booking')} />
            ))}
          </div>

          {/* Why Choose Us */}
          <WhyChooseUsSection />

          {/* Map Section */}
          <div className="mt-20 pt-20 border-t-2 border-gray-300">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Locations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-[#c6a46a]"
                >
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{hotel.name}</h3>
                  <p className="text-[#c6a46a] font-semibold mb-3">{hotel.location}</p>
                  <button className="w-full px-4 py-2 bg-[#c6a46a] text-black font-bold rounded 
                  hover:bg-[#d4b887] transition-all">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 bg-gradient-to-r from-[#c6a46a] to-[#d4b887] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-black mb-6">Experience Luxury Today</h2>
            <p className="text-black mb-8 text-lg">Book one of our premium hotels and enjoy an unforgettable stay</p>
            <button
              onClick={() => navigate('/booking')}
              className="px-10 py-4 bg-black text-[#c6a46a] font-bold uppercase tracking-wider 
              rounded-full hover:bg-gray-900 transition-all duration-300 shadow-lg"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Hotel
