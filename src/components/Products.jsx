import React from "react";
import { motion } from "framer-motion";

import OxygenImg from "../assets/oxygen.webp";
import ArgonImg from "../assets/Argon.avif";
import AcetyleneImg from "../assets/Acetylene.jpeg";
import NitrogenImg from "../assets/nitrogen.jpg";
import Co2Img from "../assets/co2.avif";

export default function Products() {
  const products = [
    {
      name: "Medical Oxygen (O₂)",
      image: OxygenImg,
      size: "50L / 40L Cylinders",
      desc: "Certified medical-grade oxygen for hospitals & home use.",
    },
    {
      name: "Argon Gas",
      image: ArgonImg,
      size: "7m³ / 10m³",
      desc: "Ideal shielding gas for welding & industrial fabrication.",
    },
    {
      name: "Acetylene (D.A.)",
      image: AcetyleneImg,
      size: "41L / 10L",
      desc: "Used for cutting, welding & metal processing.",
    },
    {
      name: "Nitrogen Gas (N₂)",
      image: NitrogenImg,
      size: "7m³ / 10m³",
      desc: "Used in labs, pressurization & industrial applications.",
    },
    {
      name: "Carbon Dioxide (CO₂)",
      image: Co2Img,
      size: "6kg / 22kg",
      desc: "For beverages, welding & cooling systems.",
    },
    {
      name: "Industrial Gas Supply",
      image: ArgonImg,
      size: "Bulk / Custom",
      desc: "Wholesale & bulk supply for workshops & factories.",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3"
        >
          Our Gas Products
        </motion.h2>

        <p className="text-gray-600 max-w-md sm:max-w-xl mx-auto mb-10 text-sm sm:text-base">
          Safe & certified cylinders with fast doorstep delivery in Itarsi.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-orange-100"
            >
              <div className="h-48 sm:h-56 flex items-center justify-center bg-white p-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                  {p.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  Cylinder Size: <span className="font-semibold">{p.size}</span>
                </p>

                <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">
                  {p.desc}
                </p>

                <button className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 sm:py-2.5 rounded-lg text-sm font-medium shadow">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  