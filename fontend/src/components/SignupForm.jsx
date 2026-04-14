import React from 'react'

const SignupForm = ({
  formData,
  errors,
  isLoading,
  onInputChange,
  onSubmit,
}) => {
  return (
    <div>
      <div className="bg-white rounded-lg sm:rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-100">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Create Account</h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Join us and start booking luxury accommodations</p>

        <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={onInputChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none transition-all text-xs sm:text-sm
                ${errors.firstName ? 'border-red-500' : 'border-gray-300 focus:border-[#c6a46a]'}`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={onInputChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none transition-all text-xs sm:text-sm
                ${errors.lastName ? 'border-red-500' : 'border-gray-300 focus:border-[#c6a46a]'}`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none transition-all text-xs sm:text-sm
              ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-[#c6a46a]'}`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={onInputChange}
              className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none transition-all text-xs sm:text-sm
              ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-[#c6a46a]'}`}
              placeholder="+84 123 456 789"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={onInputChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none transition-all text-xs sm:text-sm
                ${errors.password ? 'border-red-500' : 'border-gray-300 focus:border-[#c6a46a]'}`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={onInputChange}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none transition-all text-xs sm:text-sm
                ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300 focus:border-[#c6a46a]'}`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2 sm:gap-3">
            <input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              checked={formData.acceptTerms}
              onChange={onInputChange}
              className="w-4 sm:w-5 h-4 sm:h-5 rounded text-[#c6a46a] mt-1 flex-shrink-0"
            />
            <label htmlFor="acceptTerms" className="text-xs sm:text-sm text-gray-600">
              I agree to the terms and conditions and privacy policy
            </label>
            {errors.acceptTerms && (
              <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 sm:py-3 font-bold rounded-lg transition-all duration-300 uppercase tracking-wider text-xs sm:text-base
            ${isLoading 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-[#c6a46a] text-black hover:bg-[#d4b887]'}`}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-[#c6a46a] font-bold hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignupForm
