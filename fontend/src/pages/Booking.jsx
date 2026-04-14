import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingProgressBar from '../components/BookingProgressBar'
import HotelRoomSelection from '../components/HotelRoomSelection'
import GuestInformation from '../components/GuestInformation'
import BookingSummary from '../components/BookingSummary'

const Booking = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, user, hotels, roomTypes, createBooking } = useContext(AppContext)

  const [formData, setFormData] = useState({
    hotelId: 1,
    checkInDate: location.state?.checkIn || '',
    checkOutDate: location.state?.checkOut || '',
    guests: location.state?.guests || '1',
    roomType: location.state?.roomType || 'standard',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    specialRequests: '',
  })

  const [step, setStep] = useState(1)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/booking' } })
      return
    }

    if (step === 1) {
      setStep(2)
    } else {
      const bookingData = {
        ...formData,
        totalPrice: calculateTotalPrice(),
        bookingDate: new Date(),
      }
      
      createBooking(bookingData)
      alert('Booking confirmed! You will receive a confirmation email shortly.')
      navigate('/')
    }
  }

  const calculateTotalPrice = () => {
    if (!formData.checkInDate || !formData.checkOutDate) return 0
    
    const checkIn = new Date(formData.checkInDate)
    const checkOut = new Date(formData.checkOutDate)
    const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24)
    
    const room = roomTypes.find(r => r.id === parseInt(formData.roomType))
    const roomPrice = room ? room.price : 100
    
    return nights * roomPrice
  }

  const selectedHotel = hotels.find(h => h.id === parseInt(formData.hotelId))
  const selectedRoom = roomTypes.find(r => r.id === parseInt(formData.roomType))

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your <span className="text-[#c6a46a]">Stay</span>
            </h1>
            <p className="text-lg text-gray-600">Complete booking in {2 - step + 1} steps</p>
          </div>

          {/* Progress Bar */}
          <BookingProgressBar step={step} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                {step === 1 ? (
                  <HotelRoomSelection
                    formData={formData}
                    hotels={hotels}
                    roomTypes={roomTypes}
                    onHotelChange={(id) => setFormData(prev => ({ ...prev, hotelId: id }))}
                    onDateChange={handleInputChange}
                    onGuestsChange={handleInputChange}
                    onRoomTypeChange={handleInputChange}
                    onSpecialRequestsChange={handleInputChange}
                  />
                ) : (
                  <>
                    <GuestInformation formData={formData} onInputChange={handleInputChange} />
                    
                    {/* Booking Summary in Step 2 */}
                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 mt-8">
                      <h3 className="font-bold text-lg text-gray-900 mb-4">Booking Summary</h3>
                      <div className="space-y-3 text-sm text-gray-700">
                        <div className="flex justify-between">
                          <span>Hotel:</span>
                          <span className="font-semibold">{selectedHotel?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Check-In:</span>
                          <span className="font-semibold">{formData.checkInDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Check-Out:</span>
                          <span className="font-semibold">{formData.checkOutDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Room Type:</span>
                          <span className="font-semibold">{selectedRoom?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guests:</span>
                          <span className="font-semibold">{formData.guests}</span>
                        </div>
                      </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start gap-3 mt-8">
                      <input
                        type="checkbox"
                        id="terms"
                        required
                        className="w-5 h-5 rounded text-[#c6a46a] mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the terms and conditions, cancellation policy, and privacy policy
                      </label>
                    </div>
                  </>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {step === 2 && (
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-900 font-bold rounded-lg 
                      hover:border-[#c6a46a] transition-all duration-300"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className={`flex-1 px-6 py-3 font-bold rounded-lg transition-all duration-300 
                    ${step === 1 
                      ? 'bg-[#c6a46a] text-black hover:bg-[#d4b887]' 
                      : 'bg-green-600 text-white hover:bg-green-700'}`}
                  >
                    {step === 1 ? 'Continue to Payment' : 'Confirm Booking'}
                  </button>
                </div>
              </form>
            </div>

            {/* Booking Summary Sidebar */}
            <div className="lg:col-span-1">
              <BookingSummary
                selectedHotel={selectedHotel}
                selectedRoom={selectedRoom}
                formData={formData}
                totalPrice={calculateTotalPrice()}
                nights={
                  formData.checkInDate && formData.checkOutDate
                    ? Math.max(
                        1,
                        Math.ceil(
                          (new Date(formData.checkOutDate) -
                            new Date(formData.checkInDate)) /
                            (1000 * 60 * 60 * 24)
                        )
                      )
                    : 0
                }
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Booking
