import React from 'react'
import ImageGallery from '../components/ImageGallery.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ChatPopup from '../components/ChatPopup.jsx'

const Home = () => {
  return (
    <div className="bg-white">
    <Navbar />
    <ImageGallery />
    <ChatPopup  />
    <Footer />
    </div>
  )
}

export default Home
