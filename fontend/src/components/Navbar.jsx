import React, { useEffect, useRef, useState } from "react";
import logoWhite from "../assets/Logo-La-Sinfonia-Vietnam-02.png";
import logoBlack from "../assets/Logo-La-Sinfonia-Vietnam-02_black.png";



const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotel", path: "/hotel" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const ref = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <div ref={ref}>

      {/* fake content để test scroll */}
      <div className="h-[500px]" />

      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between
        px-4 md:px-16 lg:px-24 xl:px-32
        transition-all duration-500
        ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md text-gray-700 py-3 md:py-4"
            : "bg-[#000000] text-white py-4 md:py-6"
        }`}
      >
       {/* Logo */}
            <a
            href="https://lasinfoniavietnam.com/"
            className="flex items-center gap-2"
            >
            <img
                src={isScrolled ? logoBlack : logoWhite}
                alt="La Sinfonia Logo"
                className="h-13 w-auto transition-all duration-500"
            />
            </a>



        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {navLinks.map((link, i) => (
            <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-1 transition-all duration-300
                ${isScrolled ? "text-gray-700" : "text-white"}
                hover:text-[#c6a46a]
            `}
            >
            {link.name}

            {/* underline */}
            <span
                className="h-[1.5px] w-0 bg-[#c6a46a]
                group-hover:w-full transition-all duration-300"
            />
            </a>
        ))}

        </div>


        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <svg
            className={`h-6 w-6 transition-all ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

<>
            <style>{`
                @keyframes rotate {
                    100% {
                        transform: rotate(1turn);
                    }
                }
            
                .rainbow::before {
                    content: '';
                    position: absolute;
                    z-index: -2;
                    left: -50%;
                    top: -50%;
                    width: 200%;
                    height: 200%;
                    background-position: 100% 50%;
                    background-repeat: no-repeat;
                    background-size: 50% 30%;
                    filter: blur(6px);
                    background-image: linear-gradient(#c6a46a);
                    animation: rotate 4s linear infinite;
                }
            `}</style>
            <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
                <button className={`px-8 text-sm py-3 text-white rounded-full font-medium backdrop-blur
                ${isScrolled ? "bg-black/80" : "bg-gray-900/80"}
                hover:bg-black/90 transition duration-300`}>
                    Login
                </button>
            </div>
        </>

        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <svg
            onClick={() => setIsMenuOpen(true)}
            className={`h-6 w-6 cursor-pointer ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6
          transition-transform duration-500 md:hidden
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg"
            >
              {link.name}
            </a>
          ))}

          <button className="border px-4 py-1 rounded-full">
            Booking Now
          </button>

          <button className="bg-black text-white px-8 py-2.5 rounded-full">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
