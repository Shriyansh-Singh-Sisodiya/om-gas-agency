import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-red-600">
          OM Gas Agency
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <div
          className={`md:flex gap-6 font-medium ${
            open ? "block mt-4" : "hidden md:block"
          }`}
        >
          <NavLink
            to="/"
            className="block py-2 hover:text-red-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className="block py-2 hover:text-red-600"
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            className="block py-2 hover:text-red-600"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="block py-2 hover:text-red-600"
          >
            Contact
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
