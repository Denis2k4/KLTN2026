import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoWhite from "../assets/Logo-La-Sinfonia-Vietnam-02.png";

const Navbar = () => {
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Booking", path: "/booking" },
    { name: "Hotel", path: "/hotel" },
    { name: "Room", path: "/room" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 10) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between
        px-6 md:px-16 lg:px-24 py-4
        transition-all duration-500 border-b
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        bg-black text-white border-white/10`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={logoWhite}
            alt="La Sinfonia"
            className="h-12 w-auto transition-all duration-500"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 uppercase tracking-wider text-sm font-medium">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.path}
              className="relative group transition-all duration-300 text-white hover:text-[#c6a46a]"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#c6a46a] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2.5 rounded-full border text-sm font-medium
            transition-all duration-300 border-[#c6a46a] text-[#c6a46a] hover:bg-[#c6a46a] hover:text-black"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <svg
            onClick={() => setIsMenuOpen(true)}
            className="h-6 w-6 cursor-pointer text-white"
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-8
        transition-all duration-500 ease-in-out md:hidden z-40
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="absolute top-6 right-6 text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="uppercase tracking-wider text-lg font-medium hover:text-[#c6a46a]"
          >
            {link.name}
          </a>
        ))}

        <button
          onClick={() => {
            navigate('/login');
            setIsMenuOpen(false);
          }}
          className="bg-[#c6a46a] text-black px-8 py-2.5 rounded-full uppercase text-sm tracking-wider hover:bg-[#d4b887] transition"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Navbar;