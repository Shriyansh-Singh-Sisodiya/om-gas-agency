import React from "react";
import { motion } from "framer-motion";
import {
  MdLocalShipping,
  MdBusinessCenter,
  MdSecurity,
  MdAutorenew,
  MdBubbleChart,
  MdBuild
} from "react-icons/md";

export default function Services() {
  const services = [
    {
      icon: <MdBubbleChart className="text-red-600 text-5xl" />,
      title: "Industrial Gas Supply",
      desc: "Reliable supply of Oxygen, Nitrogen, Argon & CO₂ for workshops, labs, and industries."
    },
    {
      icon: <MdLocalShipping className="text-red-600 text-5xl" />,
      title: "Refill & Doorstep Delivery",
      desc: "Fast and safe cylinder delivery across Itarsi with trained staff handling."
    },
    {
      icon: <MdBusinessCenter className="text-red-600 text-5xl" />,
      title: "Bulk & Commercial Orders",
      desc: "Gas supply for hotels, factories, hospitals, and commercial setups."
    },
    {
      icon: <MdSecurity className="text-red-600 text-5xl" />,
      title: "Safety Inspection",
      desc: "Leakage checks, valve inspection, and safety guidance for secure cylinder usage."
    },
    {
      icon: <MdAutorenew className="text-red-600 text-5xl" />,
      title: "Cylinder Replacement",
      desc: "Quick replacement of empty or faulty cylinders with approved fittings."
    },
    {
      icon: <MdBuild className="text-red-600 text-5xl" />,
      title: "Valves & Accessories",
      desc: "Authorized regulators, pipes, and safety-approved gas accessories available on request."
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-orange-50 to-white" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-600 max-w-md sm:max-w-xl mx-auto mb-10 text-sm sm:text-base"
        >
          We provide safe, fast, and reliable gas solutions for industries,
          hospitals, and commercial needs in Itarsi.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-orange-100"
            >
              <div className="flex justify-center mb-3 sm:mb-4">{s.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{s.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-3 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
