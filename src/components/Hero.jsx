import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt, FaTruck } from "react-icons/fa";
import GasImg from "../assets/Gasses.png";
import Features from "./Features";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Products from "./Products";
import Contact from "./Contact";


export default function Hero() {
  return (
    <>
       <section className="min-h-screen bg-gradient-to-r from-orange-50 to-orange-100 flex items-center px-6 pt-24 md:pt-0 relative overflow-hidden">


      {/* GAS GLOW EFFECT */}
      <div className="absolute inset-0 bg-white/30 blur-3xl opacity-40"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-6 items-center relative z-10">

        {/* LEFT */}
        <div className="text-center md:text-left">

          {/* SHOP NAME */}
          <p className="text-red-700 font-semibold tracking-wide uppercase text-sm mb-2">
            Om Gas Agency • Since 1998
          </p>

          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
          >
            Fast & Safe Gas Delivery in Itarsi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-4 text-lg text-gray-600"
          >
            Trusted LPG Supply for Homes & Businesses. Hassle-Free, On-Time & Safety Assured.
          </motion.p>

          {/* CONTACT NUMBER */}
          <p className="mt-3 text-xl font-bold text-red-700">
            📞 +91 9893009832
          </p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <a href="tel:+91XXXXXXXXXX">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg shadow-lg font-medium">
                Call Now
              </button>
            </a>

            <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 px-8 py-3 rounded-lg shadow-md font-medium">
              Book Cylinder
            </button>
          </motion.div>

          {/* FEATURES */}
          <div className="mt-8 flex justify-center md:justify-start gap-6 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-red-600" />
              Authorized Agency
            </div>

            <div className="flex items-center gap-2">
              <FaTruck className="text-red-600" />
              Fast Delivery
            </div>

            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-red-600" />
              Safety First
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.img
          src={GasImg}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          alt="Gas Cylinder"
          className="w-100 md:w-90 mx-auto drop-shadow-xl -mt-6"
        />
      </div>
    </section>
     <Features />
     <Services/>
     <Testimonials/>
     <Products/>  
     <Contact/>
    <Contact/>
      </>

  );
}