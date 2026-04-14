import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Search, Globe, User, ShoppingCart } from 'lucide-react'

const PremiumNavbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState('EN')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Hotels', href: '/hotels' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Services', href: '#services' },
    { name: 'Promotions', href: '#promotions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-2xl text-white hover:text-[#d4af37] transition-colors duration-300 flex-shrink-0"
          >
            <span className="text-[#d4af37]">La</span>
            <span>Sinfonia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-[#1a365d] hover:text-white'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <button
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  language === 'EN'
                    ? 'bg-[#d4af37] text-[#1a365d]'
                    : 'text-white hover:text-[#d4af37]'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('VI')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                  language === 'VI'
                    ? 'bg-[#d4af37] text-[#1a365d]'
                    : 'text-white hover:text-[#d4af37]'
                }`}
              >
                VI
              </button>
            </div>

            {/* Search Icon */}
            <button className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-gray-700 hover:bg-[#1a365d] hover:text-white'
                : 'text-white hover:bg-white/20'
            }`}>
              <Search className="w-5 h-5" />
            </button>

            {/* User Account */}
            <button
              onClick={() => navigate('/login')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-[#1a365d] hover:text-white'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              <User className="w-5 h-5" />
            </button>

            {/* Book Now CTA */}
            <button
              onClick={() => navigate('/booking')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-[#1a365d] font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-wider text-xs"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-gray-700 hover:bg-[#1a365d] hover:text-white'
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-[#1a365d] hover:text-white rounded-lg font-semibold transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Language Toggle */}
            <div className="flex gap-2 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setLanguage('EN')
                  setIsOpen(false)
                }}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  language === 'EN'
                    ? 'bg-[#d4af37] text-[#1a365d]'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#1a365d] hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLanguage('VI')
                  setIsOpen(false)
                }}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  language === 'VI'
                    ? 'bg-[#d4af37] text-[#1a365d]'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#1a365d] hover:text-white'
                }`}
              >
                VI
              </button>
            </div>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                navigate('/booking')
                setIsOpen(false)
              }}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-[#1a365d] font-bold rounded-lg hover:shadow-lg transition-all duration-300 uppercase tracking-wider"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default PremiumNavbar
