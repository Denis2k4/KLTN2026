import React from "react";

const Location = () => {

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-[#c6a46a]">Location</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our resort's prime location in the heart of Vietnam's most beautiful destinations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Map Section */}
          <div className="rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-80 md:h-full min-h-64 md:min-h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Hotel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8701457656023!2d105.84648!3d21.00153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0x7897cbd18e1a3ce!2s6%20Ho%20Xuan%20Huang%20St%2C%20Hai%20Ba%20Trung%2C%20Ha%20Noi!5e0!3m2!1sen!2s!4v1712973600000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Location Details */}
          <div>
            <div className="space-y-6 sm:space-y-8">
              {/* Address */}
              <div className="flex gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl text-[#c6a46a] flex-shrink-0">📍</div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Address</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    6 Hồ Xuân Hương, Hai Bà Trưng,<br />
                    Hà Nội, Việt Nam 100000
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl text-[#c6a46a] flex-shrink-0">📞</div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Contact</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Phone: +84 28 3822 8888<br />
                    Email: info@lasinfonia.com
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl text-[#c6a46a] flex-shrink-0">🕐</div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Operating Hours</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Reception: 24/7<br />
                    Restaurant: 6:00 AM - 11:00 PM<br />
                    Spa: 9:00 AM - 10:00 PM
                  </p>
                </div>
              </div>

              {/* Accessibility */}
              <div className="flex gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl text-[#c6a46a] flex-shrink-0">♿</div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Accessibility</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Full wheelchair accessibility<br />
                    Elevator access to all floors<br />
                    Accessible parking available
                  </p>
                </div>
              </div>

              {/* Near Attractions */}
              <div className="flex gap-3 sm:gap-4">
                <div className="text-2xl sm:text-3xl text-[#c6a46a] flex-shrink-0">🎯</div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Nearby Attractions</h3>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 space-y-0.5 sm:space-y-1">
                    <p>• Ben Thanh Market - 2 km</p>
                    <p>• War Remnants Museum - 3 km</p>
                    <p>• Notre-Dame Cathedral - 1.5 km</p>
                    <p>• Bitexco Financial Tower - 4 km</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 py-2 sm:py-4 bg-[#c6a46a] text-black font-bold uppercase tracking-wider text-xs sm:text-base
            rounded-full hover:bg-[#d4b887] transition-all duration-300 shadow-lg hover:shadow-xl 
            transform hover:scale-105 w-full">
              Get Directions
            </button>
          </div>
        </div>

        {/* Transportation Options */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#c6a46a]/20 to-transparent rounded-xl p-8 border border-[#c6a46a]/30">
            <h3 className="text-xl font-bold text-gray-900 mb-4">✈️ By Air</h3>
            <p className="text-gray-600">
              Tan Son Nhat International Airport is just 20 km away (25-30 minutes drive by car).
              Airport transfer service available.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#c6a46a]/20 to-transparent rounded-xl p-8 border border-[#c6a46a]/30">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🚕 By Taxi</h3>
            <p className="text-gray-600">
              Conveniently located in the city center. Direct access from major highways.
              Dedicated taxi stand available at the hotel entrance.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#c6a46a]/20 to-transparent rounded-xl p-8 border border-[#c6a46a]/30">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🚗 By Car</h3>
            <p className="text-gray-600">
              Ample parking facilities available. Valet service offered.
              GPS Coordinates: 10.7716°N, 106.7209°E
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
