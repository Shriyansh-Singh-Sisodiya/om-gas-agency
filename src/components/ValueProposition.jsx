import React from "react";
import { motion } from "framer-motion";
import { FaClock, FaHandshake, FaShieldAlt } from "react-icons/fa";

const values = [
  {
    icon: <FaClock size={30} />,
    title: "Fast Service",
    desc: "Quick delivery and refill process to save your time.",
  },
  {
    icon: <FaHandshake size={30} />,
    title: "Trusted Locally",
    desc: "Serving customers in Itarsi with reliable service.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Safe Handling",
    desc: "We follow proper safety standards for every cylinder.",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Om Gas Agency?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 border rounded-xl shadow-sm text-center"
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              {v.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
            <p className="text-gray-600">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
