import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import user1 from "../assets/user1.jpeg"
import user2 from "../assets/user2.jpeg"
import user3 from "../assets/user3.jpg"
import user4 from "../assets/user4.webp"
import user5 from "../assets/user5.jpeg"
import user6 from "../assets/user6.jpeg"



export default function Testimonials() {
  const reviews = [
    {
      name: "Mohan Singh",
      rating: 5,
      text: "Best gas agency in Itarsi — very reliable and prompt service.",
     img: user1, // replace when image available
    },
    {
      name: "Mahesh Tomar",
      rating: 5,
      text: "Excellent customer support and on-time cylinder delivery.",
      img: user2,
    },
    {
      name: "Twinkle Tomar",
      rating: 5,
      text: "Highly trusted. I always get my refill without any hassle.",
      img: user3,
    },
    {
      name: "Ravina Patel",
      rating: 5,
      text: "Quick delivery and polite staff. Totally satisfied.",
      img: user4,
    },
    {
      name: "Nishant Sharma",
      rating: 5,
      text: "Very smooth booking experience. Best service in town!",
      img: user5,
    },
    {
      name: "Suresh Verma",
      rating: 4,
      text: "Good agency, delivery was on time and hassle-free.",
      img: user6,
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
              className="bg-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-orange-400"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/80x80?text=User"; // fallback
                  }}  
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-3">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-500 mx-1" />
                ))}
              </div>

              {/* Text + Name */}
              <p className="text-gray-700 italic">“{r.text}”</p>
              <h4 className="mt-4 font-semibold text-gray-800">{r.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
