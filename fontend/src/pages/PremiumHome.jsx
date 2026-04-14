import React from 'react'
import PremiumNavbar from '../components/PremiumNavbar'
import PremiumHero from '../components/PremiumHero'
import FeaturedHotels from '../components/PremiumHotels'
import RoomTypesSection from '../components/RoomTypesSection'
import ServicesSection from '../components/ServicesSection'
import SpecialOffers from '../components/SpecialOffers'
import Testimonials from '../components/Testimonials'
import PremiumFooter from '../components/PremiumFooter'

const PremiumHome = () => {
  return (
    <div className="min-h-screen bg-white">
      <PremiumNavbar />
      <PremiumHero />
      <FeaturedHotels />
      <RoomTypesSection />
      <ServicesSection />
      <SpecialOffers />
      <Testimonials />
      <PremiumFooter />
    </div>
  )
}

export default PremiumHome
