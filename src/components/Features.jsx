import React from "react";
import { motion } from "framer-motion";
import { FaShieldHalved, FaUsers, FaCircleCheck, FaFireFlameCurved } from "react-icons/fa6";

export default function Features() {
  const features = [
    {
      icon: <FaShieldHalved className="text-red-600 text-5xl drop-shadow-lg" />,
      title: "Secure & Reliable",
      description: "Trusted and safe for every household connection.",
    },
    {
      icon: <FaUsers className="text-red-600 text-5xl drop-shadow-lg" />,
      title: "Community Focused",
      description: "Serving thousands of satisfied customers in Itarsi.",
    },
    {
      icon: <FaCircleCheck className="text-red-600 text-5xl drop-shadow-lg" />,
      title: "Easy Process",
      description: "Simple booking, fast response, zero hassle.",
    },
    {
      icon: <FaFireFlameCurved className="text-red-600 text-5xl drop-shadow-lg" />,
      title: "Fast Delivery",
      description: "Quick doorstep delivery with safety-first handling.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden">

      {/* 🔥 Gas/Air Wave Effect */}
      <div className="absolute inset-0 bg-[url('/gas-wave.png')] bg-cover opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 tracking-wide">
          Why Choose Om Gas Agency?
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, type: "spring" }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all border border-orange-100"
            >
              <div className="flex justify-center">{f.icon}</div>

              <h3 className="mt-5 font-semibold text-gray-800 text-xl">
                {f.title}
              </h3>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
