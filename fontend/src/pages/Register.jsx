import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { User, Mail, Phone, Heart, Calendar, Eye, EyeOff } from 'lucide-react'
import hotelImage from '../assets/PHG06633-copy-2.jpg'

const Register = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AppContext)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    phonenumber: '',
    nationality: '',
    birthday: '',
    sex: '',
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullname.trim()) newErrors.fullname = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email'
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
    if (!formData.phonenumber.trim()) newErrors.phonenumber = 'Phone number is required'
    if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required'
    if (!formData.birthday) newErrors.birthday = 'Birthday is required'
    if (!formData.sex) newErrors.sex = 'Gender is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      const formDataToSend = {
        fullname: formData.fullname,
        email: formData.email,
        password: formData.password,
        phonenumber: formData.phonenumber,
        nationality: formData.nationality,
        birthday: new Date(formData.birthday).toISOString(),
        sex: formData.sex,
      }

      console.log('Register payload:', formDataToSend)

      const response = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      })

      const data = await response.json()
      console.log('Register response:', data)

      if (data.success) {
        loginUser({
          id: data.metadata._id,
          fullname: data.metadata.fullname,
          email: data.metadata.email,
          phonenumber: data.metadata.phonenumber,
          nationality: data.metadata.nationality,
          birthday: data.metadata.birthday,
          sex: data.metadata.sex,
        })
        setIsLoading(false)
        navigate('/')
      } else {
        setErrors({ submit: data.message || 'Registration failed' })
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Register error:', error)
      setErrors({ submit: 'Network error. Ensure backend is running on http://localhost:3000' })
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Navbar />

      <div className="pt-20 pb-20 px-4 md:px-8 lg:px-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Image & Features */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 h-96">
                <img 
                  src={hotelImage} 
                  alt="Luxury Hotel" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-8">
                Join <span className="text-[#c6a46a]">La Sinfonia</span>
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: '✔️', title: 'Early Booking Discounts', desc: 'Save up to 20% on your first stay' },
                  { icon: '🎁', title: 'Loyalty Rewards', desc: 'Earn points on every booking' },
                  { icon: '⭐', title: 'VIP Benefits', desc: 'Exclusive perks for members' },
                  { icon: '24h', title: '24/7 Support', desc: 'Dedicated customer support' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition">
                    <div className="text-2xl flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-white">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
                  <p className="text-gray-600">Join us and start booking your dream stay</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#c6a46a] to-[#d4b887] mt-4 rounded-full"></div>
                </div>

                {errors.submit && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <span className="text-red-600 text-xl">⚠️</span>
                    <p className="text-red-700 font-medium">{errors.submit}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 text-[#c6a46a] w-5 h-5" />
                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all 
                        ${errors.fullname ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#c6a46a] bg-white'}`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.fullname && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>✕</span> {errors.fullname}</p>}
                  </div>

                  {/* Email & Phone Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-3.5 text-[#c6a46a] w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all 
                          ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#c6a46a] bg-white'}`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>✕</span> {errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-3.5 text-[#c6a46a] w-5 h-5" />
                        <input
                          type="tel"
                          name="phonenumber"
                          value={formData.phonenumber}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all 
                          ${errors.phonenumber ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#c6a46a] bg-white'}`}
                          placeholder="+84 9xx xxx xxx"
                        />
                      </div>
                      {errors.phonenumber && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>✕</span> {errors.phonenumber}</p>}
                    </div>
                  </div>

                  {/* Nationality & Birthday Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Nationality</label>
                      <input
                        type="text"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all 
                        ${errors.nationality ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#c6a46a] bg-white'}`}
                        placeholder="Vietnamese"
                      />
                      {errors.nationality && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>✕</span> {errors.nationality}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Birthday</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-3.5 text-[#c6a46a] w-5 h-5 pointer-events-none" />
                        <input
                          type="date"
                          name="birthday"
                          value={formData.birthday}
                          onChange={handleInputChange}
                          className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all 
                          ${errors.birthday ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#c6a46a] bg-white'}`}
                        />
                      </div>
                      {errors.birthday && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>✕</span> {errors.birthday}</p>}
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Gender</label>
                    <select
                      name="sex"
                      value={formData.sex}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all 
                      ${errors.sex ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#c6a46a] bg-white'}`}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.sex && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>✕</span> {errors.sex}</p>}
                  </div>

                  {/* Password & Confirm Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Password</label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all 
                          ${errors.password ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#c6a46a] bg-white'}`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-3.5 text-gray-500 hover:text-[#c6a46a] transition"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.password && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>✕</span> {errors.password}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Confirm</label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all 
                          ${errors.confirmPassword ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#c6a46a] bg-white'}`}
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-4 top-3.5 text-gray-500 hover:text-[#c6a46a] transition"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {errors.confirmPassword && <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>✕</span> {errors.confirmPassword}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3.5 font-bold rounded-xl transition-all duration-300 uppercase tracking-wider text-base mt-6
                    ${isLoading 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#c6a46a] to-[#d4b887] text-black hover:shadow-lg hover:scale-105'}`}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </button>

                  {/* Already have account */}
                  <p className="text-center text-gray-700 mt-6 font-medium">
                    Already have an account?{' '}
                    <a href="/login" className="text-[#c6a46a] font-bold hover:text-[#d4b887] transition">
                      Sign In here
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Register
