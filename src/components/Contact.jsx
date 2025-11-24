import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const phoneNumber = "919893009832"; // WhatsApp & Call
  const whatsappMessage = "Hello! I want to inquire about gas delivery.";

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white relative">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-800 mb-12"
        >
          Contact Us
        </motion.h2>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <FaPhoneAlt className="text-red-600 text-2xl" />,
              title: "Call Us",
              value: "+91 9893009832",
              link: `tel:+${phoneNumber}`,
            },
            {
              icon: <FaMapMarkerAlt className="text-red-600 text-2xl" />,
              title: "Visit Us",
              value: "Garibi Line, Garage Line, Itarsi, Narmadapuram, MP 461111",
            },
            {
              icon: <FaEnvelope className="text-red-600 text-2xl" />,
              title: "GST No.",
              value: "23BMXPT2121B1Z7",
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center md:items-start gap-4"
            >
              {info.icon}
              <h3 className="font-semibold text-gray-800">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-red-600 font-bold text-lg">{info.value}</a>
              ) : (
                <p className="text-gray-700 text-center md:text-left">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
          <form
            action="https://formspree.io/f/meowggpr" // replace with your Formspree ID
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold shadow transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all animate-bounce"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </section>
  );
}
