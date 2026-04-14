import React from 'react'
import { Star, Quote } from 'lucide-react'

const TestimonialCard = ({ name, title, image, content, rating }) => (
  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative">
    {/* Quote Icon */}
    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <Quote className="w-12 h-12 text-[#d4af37]" />
    </div>

    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-[#d4af37] text-[#d4af37]' : 'text-gray-300'
          }`}
        />
      ))}
    </div>

    {/* Content */}
    <p className="text-gray-600 leading-relaxed mb-6 italic">{content}</p>

    {/* Author */}
    <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-[#d4af37]/30"
      />
      <div>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Business Executive',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: 'Outstanding service and impeccable attention to detail. The hotel exceeded all my expectations. I\'ll definitely be returning for future business trips.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Leisure Traveler',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      content: 'Best vacation ever! The staff was incredibly welcoming, the rooms were luxurious, and the views were breathtaking. Worth every penny!',
      rating: 5
    },
    {
      name: 'Emma Williams',
      title: 'Honeymooner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      content: 'Perfect romantic getaway! From the candlelit dinner to the massage spa, every moment was magical. Highly recommended for couple\'s retreats.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      title: 'Family Traveler',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      content: 'Family-friendly atmosphere with amazing amenities for kids. The staff helped organize activities and made our stay memorable. Great value!',
      rating: 4
    },
    {
      name: 'Lisa Thompson',
      title: 'Travel Blogger',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      content: 'Stunning property with world-class service. Every detail is thoughtfully designed. Already planning my next stay here. Absolutely incredible!',
      rating: 5
    },
    {
      name: 'James Anderson',
      title: 'Corporate Group',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      content: 'Excellent conference facilities and professional service. Our corporate retreat was seamless thanks to the dedicated event team.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1a365d]/10 text-[#1a365d] rounded-full text-sm font-semibold mb-4">
            ⭐ GUEST REVIEWS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Thousands of happy guests have experienced our hospitality. Read their stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#1a365d] to-[#2d5a7b] rounded-2xl p-12 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">4.9/5</p>
              <p className="text-white/90">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">50K+</p>
              <p className="text-white/90">Happy Guests</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">98%</p>
              <p className="text-white/90">Would Recommend</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">15+</p>
              <p className="text-white/90">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Testimonials;
