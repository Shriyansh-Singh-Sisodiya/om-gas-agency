import React from "react";
import { motion } from "framer-motion";
import Aboutt from '../assets/About.jpg';
import { FaWarehouse, FaGasPump, FaTruck, FaShieldAlt } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-100" id="about">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={Aboutt}
            alt="Om Gas Agency Shop"
            className="rounded-2xl shadow-2xl border-4 border-white object-cover w-full"
          />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-5 leading-tight">
            About Om Gas Agency
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Om Gas Agency is a trusted gas supply center based in Itarsi, delivering
            medical and industrial gases with a strong focus on safety, reliability,
            and timely service.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            From hospitals and workshops to individual households, the agency ensures
            high-quality cylinder availability and smooth delivery for a wide range
            of requirements including oxygen, argon, acetylene, nitrogen, CO₂ and
            other industrial gases.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            With a commitment to transparency, genuine products, and customer-first
            service, Om Gas Agency has become a dependable choice across Narmadapuram
            district and nearby areas.
          </p>

          {/* HIGHLIGHTS GRID */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-5 rounded-xl shadow text-center hover:shadow-lg transition">
              <FaWarehouse className="text-red-600 text-3xl mx-auto mb-2" />
              <p className="font-semibold text-gray-800">Wide Stock</p>
              <p className="text-sm text-gray-500">Multiple gas types available</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center hover:shadow-lg transition">
              <FaGasPump className="text-red-600 text-3xl mx-auto mb-2" />
              <p className="font-semibold text-gray-800">Refilling Support</p>
              <p className="text-sm text-gray-500">Fast & easy cylinder refills</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center hover:shadow-lg transition">
              <FaTruck className="text-red-600 text-3xl mx-auto mb-2" />
              <p className="font-semibold text-gray-800">Quick Delivery</p>
              <p className="text-sm text-gray-500">Doorstep availability</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow text-center hover:shadow-lg transition">
              <FaShieldAlt className="text-red-600 text-3xl mx-auto mb-2" />
              <p className="font-semibold text-gray-800">Safety Focused</p>
              <p className="text-sm text-gray-500">Secure handling assured</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
