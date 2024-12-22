import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4  text-white shadow-md lg:px-12">
      <div className="flex items-center gap-2">
        <img src={LOGO} alt="logo" className="h-[103px] w-auto" />
      </div>

      <div className="hidden md:flex items-center gap-8">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/artist", label: "Artist" },
          { to: "/staking", label: "Staking" },
          { to: "/roadmap", label: "Roadmap" },
          { to: "/team", label: "Team" },
          { to: "/vesting", label: "Vesting" },
          { to: "/marketplace", label: "Marketplace" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`${
              isActive(item.to)
                ? "text-red-600 "
                : "text-white hover:text-red-800"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black text-white shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-6 py-4">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/artist", label: "Artist" },
              { to: "/staking", label: "Staking" },
              { to: "/roadmap", label: "Roadmap" },
              { to: "/team", label: "Team" },
              { to: "/vesting", label: "Vesting" },
              { to: "/marketplace", label: "Marketplace" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`${
                  isActive(item.to)
                    ? "text-red-600 "
                    : "text-white hover:text-red-800"
                }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </Link>
            ))}
            <button
              className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/connect_wallet">Connect Wallet</Link>
            </button>
          </div>
        </div>
      )}

      {/* Connect Wallet Button (Desktop) */}
      <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2">
        <Link to="/connect_wallet">Connect Wallet</Link>
      </button>
    </nav>
  );
};

export default Navbar;
