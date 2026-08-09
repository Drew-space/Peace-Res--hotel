"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const rooms = [
  {
    id: 1,
    word: "Indulge",
    headline: "Luxury Suite",
    description:
      "Spacious elegance with premium finishes, a private lounge area, and floor-to-ceiling views that follow you from bed to bath.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    word: "Elevate",
    headline: "Modern Penthouse",
    description:
      "Sky-high living with an open-plan layout, designer kitchen, and a rooftop terrace made for sunset cocktails.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    word: "Breathe",
    headline: "Ocean View",
    description:
      "Wake up to the sound of waves. Panoramic sea views, soft linen, and a balcony that blurs the line between inside and out.",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    word: "Dream",
    headline: "Royal Deluxe",
    description:
      "The crown jewel. Handpicked antiques, a soaking tub, and service that anticipates what you need before you ask.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
  },
];

const DURATION = 5000;

export default function ExpandingAccommodations() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % rooms.length);
    setTick((t) => t + 1);
  }, []);

  useEffect(() => {
    const id = setInterval(next, DURATION);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="w-full bg-[#f8f8f6] text-[#111] font-sans antialiased py-14 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-medium tracking-tight leading-[1.1] mb-3">
            Your Stay, Our Service
          </h2>
          <p className="text-[#777] text-sm sm:text-[15px] max-w-lg mx-auto leading-[1.6]">
            We provide everything you need for a smooth and stress-free stay.
            From easy booking to personalized services, your comfort is our top
            priority.
          </p>
        </motion.div>

        {/* Expanding Gallery */}
        <motion.div
          className="flex h-[300px] sm:h-[380px] lg:h-[420px] gap-2 sm:gap-2.5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {rooms.map((room, i) => {
            const isActive = i === active;

            return (
              <div
                key={room.id}
                onClick={() => {
                  setActive(i);
                  setTick((t) => t + 1);
                }}
                className={`
                  relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer
                  transition-[flex] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${isActive ? "flex-[2.5]" : "flex-[1]"}
                `}
              >
                {/* Image */}
                <img
                  src={room.image}
                  alt={room.headline}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-transform duration-700
                    ${isActive ? "scale-100" : "scale-110"}
                  `}
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 transition-opacity duration-500
                    ${isActive ? "bg-black/25" : "bg-black/45"}
                  `}
                />

                {/* Subtle border */}
                <div className="absolute inset-0 border border-white/10 rounded-xl sm:rounded-2xl pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 lg:p-6">
                  {/* Collapsed word */}
                  <div
                    className={`
                      transition-all duration-500
                      ${isActive ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
                    `}
                  >
                    <span className="text-white text-sm sm:text-base font-medium tracking-wide">
                      {room.word}
                    </span>
                  </div>

                  {/* Expanded content */}
                  <div
                    className={`
                      transition-all duration-500
                      ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    `}
                  >
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-snug mb-2">
                      {room.headline}
                    </h3>
                    <p className="text-white/85 text-xs sm:text-sm leading-[1.65] max-w-xs mb-4">
                      {room.description}
                    </p>
                    <div className="w-14 h-[2px] bg-[#b69d74]" />
                  </div>
                </div>

                {/* Progress bar */}
                {isActive && (
                  <div
                    key={tick}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20"
                  >
                    <div className="h-full bg-white animate-progress" />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        {/* Bottom CTA */}
        <motion.div
          className="mt-10 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-[#555] text-sm sm:text-[15px] leading-[1.7] max-w-xl mx-auto mb-6">
            Browse our signature offer for every occasion, from family-friendly
            packages to romantic getaways. Book directly for our best rate
            guarantee plus complimentary services and experiences.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#b69d74] text-white text-sm font-semibold uppercase tracking-wider hover:bg-[#c4ae82] transition-colors duration-300">
            Book an Apartment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
