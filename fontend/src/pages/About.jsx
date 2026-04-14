import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CompanyStats from '../components/CompanyStats'
import LeadershipTeam from '../components/LeadershipTeam'
import SustainabilitySection from '../components/SustainabilitySection'

const About = () => {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us <span className="text-[#c6a46a]">La Sinfonia</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the story behind Vietnam's most prestigious luxury hotel brand
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
            <img
              src="https://picsum.photos/1200/600?random=17"
              alt="La Sinfonia Hotel"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Founded in 2010, La Sinfonia Hotel was established with a vision to redefine luxury hospitality in Southeast Asia. What began as a boutique property has evolved into Vietnam's most acclaimed hotel brand.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Our journey has been marked by consistent excellence, innovation, and an unwavering commitment to guest satisfaction. We've grown from a single property to a portfolio of premium hotels across Vietnam's most sought-after destinations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, La Sinfonia stands as a symbol of Vietnamese hospitality, trusted by discerning travelers from around the world who expect nothing less than perfection.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/500/500?random=18"
                alt="Hotel Exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission & Values */}
          <div className="bg-gradient-to-r from-[#c6a46a]/10 to-transparent rounded-2xl p-12 mb-20 border border-[#c6a46a]/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide unforgettable luxury experiences that exceed expectations and create 
                  lasting memories for our guests through exceptional service, beautiful accommodations, 
                  and world-class amenities.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be recognized as the leading luxury hotel brand in Southeast Asia, known for our 
                  commitment to sustainability, cultural preservation, and elevating the standards of 
                  hospitality across the region.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence, integrity, sustainability, and community. We believe in treating every 
                  guest as family, respecting local traditions, and operating with environmental 
                  responsibility.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose <span className="text-[#c6a46a]">La Sinfonia</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '👑',
                  title: 'Uncompromising Luxury',
                  desc: 'Every detail is meticulously crafted to provide the ultimate luxury experience',
                },
                {
                  icon: '🌍',
                  title: 'Authentic Experiences',
                  desc: 'Immerse yourself in local culture while enjoying world-class amenities',
                },
                {
                  icon: '🏆',
                  title: 'Award-Winning Service',
                  desc: 'Recognized globally for exceptional hospitality and guest satisfaction',
                },
                {
                  icon: '🌱',
                  title: 'Sustainability',
                  desc: 'Committed to environmentally responsible operations and community support',
                },
                {
                  icon: '💎',
                  title: 'Premium Amenities',
                  desc: 'State-of-the-art facilities including spas, restaurants, and wellness centers',
                },
                {
                  icon: '📍',
                  title: 'Scenic Locations',
                  desc: 'Prime locations offering stunning views and convenient access to attractions',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border-l-4 border-[#c6a46a]"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <CompanyStats />

          {/* Team Section */}
          <LeadershipTeam />

          {/* Sustainability */}
          <SustainabilitySection />

          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8 text-lg">Have questions about our company or services?</p>
            <button className="px-10 py-4 bg-[#c6a46a] text-black font-bold uppercase tracking-wider 
            rounded-full hover:bg-[#d4b887] transition-all shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
