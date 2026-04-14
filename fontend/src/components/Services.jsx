import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "🛏️",
      title: "Luxury Rooms",
      description: "Spacious rooms with premium bedding, modern amenities, and stunning views",
    },
    {
      id: 2,
      icon: "🍽️",
      title: "Fine Dining",
      description: "Award-winning restaurants serving international and local cuisine",
    },
    {
      id: 3,
      icon: "🏊",
      title: "Swimming Pool",
      description: "Olympic-sized heated pool with private cabanas and poolside service",
    },
    {
      id: 4,
      icon: "💆",
      title: "Spa & Wellness",
      description: "Full-service spa with massage, facial, and wellness treatments",
    },
    {
      id: 5,
      icon: "🏋️",
      title: "Fitness Center",
      description: "State-of-the-art gym with personal trainers and yoga classes",
    },
    {
      id: 6,
      icon: "🎵",
      title: "Entertainment",
      description: "Live music, shows, and cultural performances every evening",
    },
    {
      id: 7,
      icon: "📶",
      title: "High-Speed WiFi",
      description: "Free high-speed internet throughout the entire resort",
    },
    {
      id: 8,
      icon: "🚗",
      title: "Transportation",
      description: "Airport transfers, car rental, and tour arrangements",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-6">
            Premium <span className="text-[#c6a46a]">Services</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Experience world-class hospitality with our comprehensive range of amenities and services
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#c6a46a] to-transparent mx-auto mt-4 sm:mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl 
              transition-all duration-300 p-4 sm:p-6 md:p-8 overflow-hidden border border-gray-100"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c6a46a]/10 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#c6a46a] 
                transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-4 sm:mt-6 h-1 w-0 bg-gradient-to-r from-[#c6a46a] to-transparent 
                group-hover:w-full transition-all duration-300"></div>

                {/* Learn More Button */}
                <button className="mt-3 sm:mt-4 text-[#c6a46a] font-semibold text-xs sm:text-sm flex items-center gap-2 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base md:text-lg">
            Discover all the luxury features our hotel has to offer
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-4 bg-[#c6a46a] text-black font-bold uppercase tracking-wider text-xs sm:text-base
          rounded-full hover:bg-[#d4b887] transition-all duration-300 shadow-lg hover:shadow-xl 
          transform hover:scale-105">
            View All Amenities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
