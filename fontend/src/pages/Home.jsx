import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ChatPopup from '../components/ChatPopup.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Location from '../components/Location.jsx'

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Location />
      <ChatPopup />
      <Footer />
    </div>
  )
}

export default Home
