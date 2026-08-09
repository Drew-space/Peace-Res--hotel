"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const amenities = [
  {
    id: 1,
    title: "The Pool",
    description:
      "Saltwater infinity edge, heated year-round. Cabanas reserved for residents.",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=1000&auto=format&fit=crop",
    tag: "Open 24hrs",
    size: "large",
  },
  {
    id: 2,
    title: "In-House Dining",
    description:
      "Farm-to-table breakfast and a wine cellar you can get lost in.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    tag: "Reservation only",
    size: "small",
  },
  {
    id: 3,
    title: "The Spa",
    description:
      "Deep-tissue massage, infrared sauna, and a quiet room with no phones.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
    tag: "Book ahead",
    size: "small",
  },
  {
    id: 4,
    title: "Residents' Club",
    description:
      "Honesty bar, billiards, and a terrace for when you want company without the crowd.",
    image:
      "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1000&auto=format&fit=crop",
    tag: "Members only",
    size: "large",
  },
  {
    id: 5,
    title: "The Gym",
    description: "Not a hotel gym. Peloton, free weights, and a cold plunge.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    tag: "Open 24hrs",
    size: "large",
  },
  {
    id: 6,
    title: "Rooftop Garden",
    description: "Herb beds, lemon trees, and movie night every Thursday.",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
    tag: "Seasonal",
    size: "medium",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function AmenitiesPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#fafafa] text-[#111] font-sans antialiased px-5 sm:px-8 lg:px-16 py-14 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="mb-6 sm:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2.5 mb-3"
          >
            <span className="w-5 h-[1px] bg-[#b69d74]" />
            <span className="text-[#b69d74] uppercase tracking-[0.2em] text-[11px] font-medium">
              Amenities
            </span>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-[#777] text-sm sm:text-[15px] max-w-sm leading-[1.6]"
          >
            Living well shouldn&lsquo;t feel like work. Here&apos;s what comes
            with the keys.
          </motion.p>
        </motion.div>

        {/* CENTERED UNIQUE TEXT */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          <h2 className="text-xl sm:text-2xl lg:text-[1.75rem] font-medium tracking-tight leading-[1.2] text-[#1a1a1a]">
            Every detail,{" "}
            <span className="text-[#b69d74]">designed for you.</span>
          </h2>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-[260px] sm:auto-rows-[280px] lg:auto-rows-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {amenities.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={scaleUp}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative group cursor-pointer overflow-hidden
                  transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${item.size === "large" ? "sm:col-span-2" : "col-span-1"}
                  ${isHovered ? "shadow-xl shadow-black/10" : "shadow-sm"}
                `}
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    ${isHovered ? "scale-105" : "scale-100"}
                  `}
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
                  {/* TOP TAG */}
                  <div className="flex justify-end">
                    <span
                      className={`
                        text-[10px] uppercase tracking-[0.15em] font-semibold
                        px-2.5 py-1 backdrop-blur-md bg-white text-[#111]
                        transition-all duration-300
                      `}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* BOTTOM TEXT */}
                  <div>
                    <h3 className="text-white text-base sm:text-lg font-medium mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/75 text-xs sm:text-[13px] leading-[1.55] max-w-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
