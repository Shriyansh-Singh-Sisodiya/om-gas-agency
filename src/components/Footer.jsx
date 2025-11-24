import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const phoneNumber = "919893009832";

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-gray-700">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Om Gas Agency</h3>
          <p>Reliable LPG supply & industrial gases in Itarsi. Fast delivery and certified cylinders for homes & businesses.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#hero" className="hover:text-red-600 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-red-600 transition-colors">Services</a></li>
            <li><a href="#products" className="hover:text-red-600 transition-colors">Products</a></li>
            <li><a href="#testimonials" className="hover:text-red-600 transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-red-600" /> +91 9893009832</li>
            <li className="flex items-center gap-2"><FaMapMarkerAlt className="text-red-600" /> Garibi Line, Garage Line, Itarsi, MP 461111</li>
            <li className="flex items-center gap-2"><FaEnvelope className="text-red-600" /> 23BMXPT2121B1Z7 (GST No.)</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-10"></div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto px-6 mt-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Om Gas Agency. All rights reserved.</p>

        {/* WhatsApp button at footer */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello! I want to inquire about gas delivery.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow transition-all mt-4 md:mt-0"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>
      </div>
    </footer>
  );
}
