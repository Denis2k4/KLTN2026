import React, { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react'

const PremiumFooter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-b from-[#1a365d] to-[#0f1f3a] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#d4af37]/10 to-[#2d5a7b]/10 rounded-2xl p-8 md:p-12 border border-[#d4af37]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-3">Newsletter</h3>
                <p className="text-white/70">
                  Subscribe to our newsletter and get exclusive deals, travel tips, and special offers delivered to your inbox.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#d4af37] focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#d4af37] text-[#1a365d] font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
            {subscribed && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
                ✓ Thank you for subscribing!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-[#d4af37] mb-6">
                <span>La</span>
                <span className="text-white">Sinfonia</span>
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Redefining luxury hospitality with world-class service, premium accommodations, and unforgettable experiences.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 bg-white/10 rounded-lg hover:bg-[#d4af37] hover:text-[#1a365d] transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-[#d4af37]">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {['Home', 'Hotels', 'Rooms', 'Bookings', 'Promotions', 'About Us', 'Blog', 'Careers'].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-[#d4af37] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-[#d4af37]">Support</h4>
              <ul className="space-y-3 text-sm text-white/70">
                {['FAQ', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Cancellation Policy', 'Group Bookings', 'Corporate Travel', 'Travel Agents'].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-[#d4af37] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-[#d4af37]">Contact Us</h4>
              <div className="space-y-4 text-sm text-white/70">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white mb-1">Headquarters</p>
                    <p>6 Hồ Xuân Hương, Hai Bà Trưng, Hà Nội 100000, Vietnam</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                  <a href="tel:+8428382288" className="hover:text-[#d4af37] transition-colors duration-300">
                    +84 (28) 3822 8888
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                  <a href="mailto:info@lasinfonia.com" className="hover:text-[#d4af37] transition-colors duration-300">
                    info@lasinfonia.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} La Sinfonia Hotels. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#d4af37] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#d4af37] transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-white/60 hover:text-[#d4af37] transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default PremiumFooter
