import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import backgroundImage from "../assets/5O4A1645-copy-2048x1365.jpg";
const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-16 sm:pt-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(15, 15, 15, 0.7), rgba(198, 164, 106, 0.3)), url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 md:px-10 text-center">
        {/* Main Heading */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-[#c6a46a] mb-4 sm:mb-6 tracking-tight drop-shadow-lg">
            <span className="text-[#c6a46a]">Lasinfonia </span> 
            <span className="text-[#ffffff]">VietNam</span>
          </h1>
          <p className="text-xs sm:text-lg md:text-2xl text-gray-200 mb-6 sm:mb-8 font-light drop-shadow">
            Discover the finest accommodations and unforgettable luxury in the heart of Vietnam
          </p>
        </div>

        {/* Search Bar Component */}
        <SearchBar />

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-12 px-4">
          <button
            onClick={() => navigate("/booking")}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#c6a46a] text-black font-bold uppercase tracking-wider rounded-full text-xs sm:text-base
            hover:bg-[#d4b887] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Now
          </button>
          <button
            onClick={() => navigate("/hotel")}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded-full text-xs sm:text-base
            hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Hotels
          </button>
        </div>

        {/* Features */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4">
          {[
            { icon: "🏨", title: "Luxury Rooms", desc: "World-class accommodations" },
            { icon: "⭐", title: "5-Star Service", desc: "Premium hospitality" },
            { icon: "🌍", title: "Best Locations", desc: "Prime city locations" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-white/20 hover:border-[#c6a46a] 
              transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{feature.icon}</div>
              <h3 className="text-white text-base sm:text-xl font-bold mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-gray-200 text-xs sm:text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-white text-xs sm:text-sm font-light">Scroll to explore</p>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#c6a46a]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
