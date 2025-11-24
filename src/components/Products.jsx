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
      price: "Starting ₹800",
      desc: "Certified medical-grade oxygen for hospitals & home use.",
    },
    {
      name: "Argon Gas",
      image: ArgonImg,
      size: "7m³ / 10m³",
      price: "Starting ₹900",
      desc: "Ideal shielding gas for welding & industrial fabrication.",
    },
    {
      name: "Acetylene (D.A.)",
      image: AcetyleneImg,
      size: "41L / 10L",
      price: "Starting ₹850",
      desc: "Used for cutting, welding & metal processing.",
    },
    {
      name: "Nitrogen Gas (N₂)",
      image: NitrogenImg,
      size: "7m³ / 10m³",
      price: "Starting ₹750",
      desc: "Used in labs, pressurization & industrial applications.",
    },
    {
      name: "Carbon Dioxide (CO₂)",
      image: Co2Img,
      size: "6kg / 22kg",
      price: "Starting ₹700",
      desc: "For beverages, welding & cooling systems.",
    },
    {
      name: "Industrial Gas Supply",
      image: ArgonImg,
      size: "Bulk / Custom",
      price: "Contact for Quote",
      desc: "Wholesale & bulk supply for workshops & factories.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-6 text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Our Gas Products
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          100% safe, certified cylinders with fast doorstep delivery in Itarsi.
        </p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all border border-orange-100"
            >
              <div className="h-64 flex items-center justify-center bg-white p-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-800">{p.name}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Cylinder Size: <span className="font-semibold">{p.size}</span>
                </p>

                <p className="text-red-600 font-bold text-md mt-2">
                  {p.price}
                </p>

                <p className="text-gray-600 text-sm mt-3">{p.desc}</p>

                <button className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium shadow">
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
