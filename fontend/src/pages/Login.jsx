import React, { useState, useContext } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Lock, Mail, Eye, EyeOff, CheckCircle } from 'lucide-react'
import hotelImage from '../assets/PHG06633-copy-2.jpg'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { loginUser } = useContext(AppContext)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email'
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      console.log('Login attempt with:', { email: formData.email, password: formData.password })

      const response = await fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()
      console.log('Login response:', data)

      if (data.success) {
        // Store tokens
        localStorage.setItem('accessToken', data.metadata.accessToken)
        localStorage.setItem('refreshToken', data.metadata.refreshToken)

        loginUser({
          email: formData.email,
        })
        setIsLoading(false)
        
        const from = location.state?.from || '/'
        navigate(from)
      } else {
        setErrors({ submit: data.message || 'Login failed' })
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Login error:', error)
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
            {/* Left Side - Image & Benefits */}
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
                Welcome Back to <span className="text-[#c6a46a]">La Sinfonia</span>
              </h2>
              
              <div className="space-y-4">
                {[
                  { icon: '🔐', title: 'Secure Access', desc: 'Industry-standard encryption' },
                  { icon: '💼', title: 'Manage Bookings', desc: 'All reservations in one place' },
                  { icon: '🎁', title: 'Exclusive Rewards', desc: 'Member-only offers & points' },
                  { icon: '⚡', title: 'Quick Checkout', desc: 'Faster bookings next time' },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition">
                    <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="font-bold text-white">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm">{benefit.desc}</p>
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
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Login</h1>
                  <p className="text-gray-600">Access your account and manage bookings</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#c6a46a] to-[#d4b887] mt-4 rounded-full"></div>
                </div>

                {errors.submit && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                    <span className="text-red-600 text-xl">⚠️</span>
                    <p className="text-red-700 font-medium">{errors.submit}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2.5 uppercase tracking-wider">
                      Email
                    </label>
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
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                        <span>✕</span> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2.5 uppercase tracking-wider">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-3.5 text-[#c6a46a] w-5 h-5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-xl focus:outline-none transition-all
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
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                        <span>✕</span> {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 rounded text-[#c6a46a] border-2 border-gray-300 focus:ring-[#c6a46a]"
                      />
                      <label htmlFor="rememberMe" className="text-sm text-gray-700 cursor-pointer font-medium">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-[#c6a46a] font-bold hover:text-[#d4b887] transition">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-3.5 font-bold rounded-xl transition-all duration-300 uppercase tracking-wider text-base
                    ${isLoading 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#c6a46a] to-[#d4b887] text-black hover:shadow-lg hover:scale-105'}`}
                  >
                    {isLoading ? 'Loading...' : 'Login'}
                  </button>

                  {/* Or Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-3 bg-gradient-to-br from-white to-gray-50 text-gray-500 font-medium">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      className="w-full py-3 border-2 border-gray-300 rounded-xl font-bold text-gray-700
                      hover:border-[#c6a46a] hover:bg-[#c6a46a]/5 hover:text-[#c6a46a] transition-all"
                    >
                      Google
                    </button>
                    <button
                      type="button"
                      className="w-full py-3 border-2 border-gray-300 rounded-xl font-bold text-gray-700
                      hover:border-[#c6a46a] hover:bg-[#c6a46a]/5 hover:text-[#c6a46a] transition-all"
                    >
                      Facebook
                    </button>
                  </div>
                </form>

                {/* Create Account Link */}
                <p className="text-center text-gray-700 mt-8 font-medium">
                  Don't have an account?{' '}
                  <a href="/register" className="text-[#c6a46a] font-bold hover:text-[#d4b887] transition">
                    Register here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Login

