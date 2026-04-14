import React, { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      category: "rooms",
      title: "Luxury Penthouse Suite",
      image: "https://picsum.photos/500/400?random=9",
    },
    {
      id: 2,
      category: "rooms",
      title: "Deluxe Double Room",
      image: "https://picsum.photos/500/400?random=10",
    },
    {
      id: 3,
      category: "dining",
      title: "Fine Dining Restaurant",
      image: "https://picsum.photos/500/400?random=11",
    },
    {
      id: 4,
      category: "pool",
      title: "Infinity Pool",
      image: "https://picsum.photos/500/400?random=12",
    },
    {
      id: 5,
      category: "spa",
      title: "Luxury Spa",
      image: "https://picsum.photos/500/400?random=13",
    },
    {
      id: 6,
      category: "lobby",
      title: "Grand Lobby",
      image: "https://picsum.photos/500/400?random=14",
    },
    {
      id: 7,
      category: "rooms",
      title: "Room with City View",
      image: "https://picsum.photos/500/400?random=15",
    },
    {
      id: 8,
      category: "dining",
      title: "Bar & Lounge",
      image: "https://picsum.photos/500/400?random=16",
    },
  ];

  const categories = [
    { value: "all", label: "All" },
    { value: "rooms", label: "Rooms" },
    { value: "dining", label: "Dining" },
    { value: "pool", label: "Pool" },
    { value: "spa", label: "Spa" },
    { value: "lobby", label: "Lobby" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Gallery <span className="text-[#c6a46a]">Showcase</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the stunning facilities and beautiful spaces of our luxury resort
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.value
                  ? "bg-[#c6a46a] text-black shadow-lg scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl 
              transition-all duration-300 h-48 sm:h-64 md:h-80 cursor-pointer transform hover:scale-105"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4 md:p-6 z-10">
                <div className="text-white">
                  <h3 className="text-sm sm:text-base md:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                  <button className="text-[#c6a46a] font-semibold text-xs sm:text-sm flex items-center gap-2">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-20 bg-[#c6a46a] text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full 
              text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-14 md:mt-16 text-center">
          <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-base md:text-lg">
            Ready to experience luxury?
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-4 bg-[#c6a46a] text-black font-bold uppercase tracking-wider text-xs sm:text-base
          rounded-full hover:bg-[#d4b887] transition-all duration-300 shadow-lg hover:shadow-xl 
          transform hover:scale-105">
            Book Your Stay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
