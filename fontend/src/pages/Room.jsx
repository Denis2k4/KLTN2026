import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RoomCard from '../components/RoomCard'
import RoomAmenities from '../components/RoomAmenities'
import RoomBookingCTA from '../components/RoomBookingCTA'

const Room = () => {
  const navigate = useNavigate()
  const { roomTypes } = useContext(AppContext)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium <span className="text-[#c6a46a]">Rooms</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our luxuriously appointed rooms, each designed for ultimate comfort and sophistication
            </p>
          </div>

          {/* Room Types */}
          <div className="space-y-12">
            {roomTypes.map((room, index) => (
              <RoomCard
                key={room.id}
                room={room}
                index={index}
                onBooking={() => navigate('/booking')}
                onViewGallery={() => {}}
              />
            ))}
          </div>

          {/* Amenities Section */}
          <RoomAmenities />

          {/* Booking CTA */}
          <div className="mt-20">
            <RoomBookingCTA />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Room
