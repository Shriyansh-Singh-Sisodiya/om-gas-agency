import React from "react";
import { motion } from "framer-motion";

export default function Commitment() {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-6">
          Why We Care
        </h2>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          At Om Gas Agency, we believe in safety and responsibility. We make
          sure every cylinder is handled with care, stored responsibly, and
          delivered reliably. Your safety matters to us — and so does the
          environment.  
        </p>
      </motion.div>
    </section>
  );
}
