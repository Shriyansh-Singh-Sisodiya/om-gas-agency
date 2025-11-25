import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaTruck } from "react-icons/fa";
import GasImg from "../assets/Gasses.png";
import Products from "./Products";
import Services from "./Services";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

export default function Hero() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center px-6 md:px-12 pt-24 relative overflow-hidden">

        {/* SOFT BACKLIGHT / INDUSTRIAL GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 via-white to-transparent blur-3xl z-0"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

          {/* LEFT SIDE TEXT */}
          <div className="text-center md:text-left space-y-4">

            <p className="text-red-600 font-semibold tracking-wide uppercase text-xs sm:text-sm">
              Om Gas Agency • Since 1998
            </p>

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-md"
            >
              Industrial Gas Delivery <br className="hidden sm:block" /> Fast & Safe
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-2 sm:mt-3 text-gray-700 max-w-md mx-auto md:mx-0 text-base sm:text-lg"
            >
              Oxygen, Nitrogen, Argon & CO₂ cylinders delivered on time with certified safety.
            </motion.p>

            {/* CONTACT NUMBERS */}
            <div className="mt-5 space-y-2 text-gray-800 font-semibold text-lg sm:text-xl">
              <p>📞 +91 7415511415</p>
              <p>📞 +91 9893009832</p>
            </div>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="tel:+917415511415">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg shadow-lg font-medium transition transform hover:-translate-y-1 hover:shadow-2xl">
                  Call Now
                </button>
              </a>

              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-md font-medium transition transform hover:-translate-y-1">
                Check Products
              </button>
            </motion.div>

            {/* FEATURES */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-gray-700 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-red-600" />
                Authorized
              </div>
              <div className="flex items-center gap-2">
                <FaTruck className="text-red-600" />
                Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-red-600" />
                Safety Assured
              </div>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.img
            src={GasImg}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            alt="Gas Cylinders"
            className="w-full max-w-md mx-auto drop-shadow-2xl rounded-lg"
          />

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <Products />
      <Services />
      <Features />
      <Testimonials />
      <Contact />
    </>
  );
}
