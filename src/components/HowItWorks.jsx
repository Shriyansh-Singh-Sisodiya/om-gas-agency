import React from "react";
import { motion } from "framer-motion";

const steps = [
  { step: "1", title: "Call or WhatsApp", desc: "Book a refill or new connection." },
  { step: "2", title: "Confirm Details", desc: "Share your address & phone number." },
  { step: "3", title: "Delivery / Pickup", desc: "Receive your cylinder safely." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow text-center w-64 mx-auto"
          >
            <div className="text-4xl font-bold text-blue-600 mb-4">{s.step}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
