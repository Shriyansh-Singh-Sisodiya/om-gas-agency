import React from "react";
import { motion } from "framer-motion";
import {
  MdLocalGasStation,
  MdLocalShipping,
  MdBusinessCenter,
  MdSecurity,
  MdAutorenew,
  MdHeadsetMic
} from "react-icons/md";

export default function Services() {
  const services = [
    {
      icon: <MdLocalGasStation className="text-red-600 text-5xl" />,
      title: "New LPG Connection",
      desc: "Quick and hassle-free new gas connection for homes and businesses with full documentation support."
    },
    {
      icon: <MdLocalShipping className="text-red-600 text-5xl" />,
      title: "Refill & Doorstep Delivery",
      desc: "Fast and safe delivery of LPG cylinders across Itarsi with trained staff handling."
    },
    {
      icon: <MdBusinessCenter className="text-red-600 text-5xl" />,
      title: "Commercial & Bulk Supply",
      desc: "Reliable LPG supply for hotels, restaurants, industries, and commercial setups."
    },
    {
      icon: <MdSecurity className="text-red-600 text-5xl" />,
      title: "Safety Inspection & Support",
      desc: "Leakage checks, regulator inspection, and emergency assistance to ensure safe LPG usage."
    },
    {
      icon: <MdAutorenew className="text-red-600 text-5xl" />,
      title: "Cylinder Replacement",
      desc: "Easy and quick replacement of empty or faulty cylinders along with approved accessories."
    },
    {
      icon: <MdHeadsetMic className="text-red-600 text-5xl" />,
      title: "Customer Support & Booking Help",
      desc: "Friendly assistance, booking help, and transparent pricing for every customer (support till 8 PM)."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white" id="services">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Om Gas Agency is a trusted LPG distributor in Itarsi, providing safe, fast,
          and reliable gas solutions for households and businesses.
        </motion.p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-orange-100"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
