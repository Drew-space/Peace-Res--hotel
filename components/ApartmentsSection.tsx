// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { fadeUp, staggerContainer, scaleUp } from "@/lib/motion";
// const categories = ["All", "Regular", "Suite", "Penthouse", "Villa"];

// const apartments = [
//   {
//     id: 1,
//     name: "The Hudson Room",
//     category: "Regular",
//     price: 320,
//     period: "night",
//     guests: 2,
//     beds: "1 King",
//     size: "42 m²",
//     image:
//       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
//     tag: "Popular",
//   },
//   {
//     id: 2,
//     name: "The Oak Suite",
//     category: "Suite",
//     price: 580,
//     period: "night",
//     guests: 3,
//     beds: "1 King + Sofa",
//     size: "68 m²",
//     image:
//       "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
//     tag: null,
//   },
//   {
//     id: 3,
//     name: "Skyline Penthouse",
//     category: "Penthouse",
//     price: 1200,
//     period: "night",
//     guests: 4,
//     beds: "2 King",
//     size: "120 m²",
//     image:
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
//     tag: "New",
//   },
//   {
//     id: 4,
//     name: "Garden Villa",
//     category: "Villa",
//     price: 950,
//     period: "night",
//     guests: 6,
//     beds: "3 King",
//     size: "200 m²",
//     image:
//       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
//     tag: null,
//   },
//   {
//     id: 5,
//     name: "The Elm Room",
//     category: "Regular",
//     price: 280,
//     period: "night",
//     guests: 2,
//     beds: "1 Queen",
//     size: "38 m²",
//     image:
//       "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
//     tag: null,
//   },
//   {
//     id: 6,
//     name: "The Royal Suite",
//     category: "Suite",
//     price: 750,
//     period: "night",
//     guests: 4,
//     beds: "2 King",
//     size: "95 m²",
//     image:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
//     tag: "Best Value",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
//   },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const scaleUp = {
//   hidden: { opacity: 0, scale: 0.96 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
//   },
// };

// export default function ApartmentsSection() {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filtered =
//     activeCategory === "All"
//       ? apartments
//       : apartments.filter((a) => a.category === activeCategory);

//   return (
//     <section className="w-full bg-[#fafafa] text-[#111] font-sans antialiased py-14 sm:py-16 lg:py-20">
//       <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
//         {/* HEADER */}
//         <motion.div
//           className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           variants={staggerContainer}
//         >
//           <motion.div variants={fadeUp}>
//             <div className="flex items-center gap-2.5 mb-3">
//               <span className="w-5 h-[1px] bg-[#b69d74]" />
//               <span className="text-[#b69d74] uppercase tracking-[0.2em] text-[11px] font-medium">
//                 Our Rooms
//               </span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-medium tracking-tight leading-[1.1]">
//               Find your space
//             </h2>
//           </motion.div>

//           <motion.p
//             variants={fadeUp}
//             className="text-[#777] text-sm sm:text-[15px] max-w-xs leading-[1.6]"
//           >
//             Every room is different. Some have balconies, others have bathtubs
//             you won't want to leave.
//           </motion.p>
//         </motion.div>

//         {/* TABS */}
//         <motion.div
//           className="flex flex-wrap items-center gap-2 mb-8 md:mb-10 border-b border-[#e5e5e5] pb-3"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           variants={fadeUp}
//         >
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-3.5 sm:px-5 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
//                 activeCategory === cat
//                   ? "bg-[#b69d74] text-white"
//                   : "text-[#666] hover:text-[#111] hover:bg-[#eee]"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </motion.div>

//         {/* CENTERED TAGLINE */}
//         <motion.div
//           className="text-center mb-8 md:mb-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           variants={fadeUp}
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b69d74] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] ">
//             Explore Our Apartment
//           </div>
//         </motion.div>

//         {/* GRID */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-60px" }}
//           variants={staggerContainer}
//         >
//           {filtered.map((apt) => (
//             <motion.div
//               key={apt.id}
//               variants={scaleUp}
//               className="group cursor-pointer"
//             >
//               {/* IMAGE */}
//               <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3.5 bg-[#eee]">
//                 <img
//                   src={apt.image}
//                   alt={apt.name}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

//                 {/* Tag */}
//                 {apt.tag && (
//                   <span className="absolute top-3 left-3 px-2.5 py-1 bg-white text-[#111] text-[10px] font-semibold uppercase tracking-wider">
//                     {apt.tag}
//                   </span>
//                 )}

//                 {/* Price badge */}
//                 <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#111]">
//                   <span className="text-base font-semibold">${apt.price}</span>
//                   <span className="text-[11px] text-[#777] ml-1">
//                     / {apt.period}
//                   </span>
//                 </div>
//               </div>

//               {/* INFO */}
//               <div className="space-y-1.5">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-[15px] sm:text-base font-medium group-hover:text-[#b69d74] transition-colors duration-300">
//                     {apt.name}
//                   </h3>
//                   <span className="text-[11px] text-[#999] uppercase tracking-wider">
//                     {apt.category}
//                   </span>
//                 </div>

//                 <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#777]">
//                   <span className="flex items-center gap-1">
//                     <svg
//                       width="13"
//                       height="13"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                       <circle cx="9" cy="7" r="4" />
//                     </svg>
//                     {apt.guests}
//                   </span>
//                   <span className="w-1 h-1 rounded-full bg-[#ccc]" />
//                   <span>{apt.beds}</span>
//                   <span className="w-1 h-1 rounded-full bg-[#ccc]" />
//                   <span>{apt.size}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* EMPTY STATE */}
//         {filtered.length === 0 && (
//           <div className="text-center py-16">
//             <p className="text-[#999] text-sm">
//               No rooms found in this category.
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleUp } from "@/lib/motion";
const categories = ["All", "Regular", "Suite", "Penthouse", "Villa"];

const apartments = [
  {
    id: 1,
    name: "The Hudson Room",
    category: "Regular",
    price: 320,
    period: "night",
    guests: 2,
    beds: "1 King",
    size: "42 m²",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    tag: "Popular",
  },
  {
    id: 2,
    name: "The Oak Suite",
    category: "Suite",
    price: 580,
    period: "night",
    guests: 3,
    beds: "1 King + Sofa",
    size: "68 m²",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    tag: null,
  },
  {
    id: 3,
    name: "Skyline Penthouse",
    category: "Penthouse",
    price: 1200,
    period: "night",
    guests: 4,
    beds: "2 King",
    size: "120 m²",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
    tag: "New",
  },
  {
    id: 4,
    name: "Garden Villa",
    category: "Villa",
    price: 950,
    period: "night",
    guests: 6,
    beds: "3 King",
    size: "200 m²",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
    tag: null,
  },
  {
    id: 5,
    name: "The Elm Room",
    category: "Regular",
    price: 280,
    period: "night",
    guests: 2,
    beds: "1 Queen",
    size: "38 m²",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
    tag: null,
  },
  {
    id: 6,
    name: "The Royal Suite",
    category: "Suite",
    price: 750,
    period: "night",
    guests: 4,
    beds: "2 King",
    size: "95 m²",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    tag: "Best Value",
  },
];

export default function ApartmentsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? apartments
      : apartments.filter((a) => a.category === activeCategory);

  return (
    <section className="w-full bg-[#fafafa] text-[#111] font-sans antialiased py-14 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* HEADER */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-5 h-[1px] bg-[#b69d74]" />
              <span className="text-[#b69d74] uppercase tracking-[0.2em] text-[11px] font-medium">
                Our Rooms
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-medium tracking-tight leading-[1.1]">
              Find your space
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-[#777] text-sm sm:text-[15px] max-w-xs leading-[1.6]"
          >
            Every room is different. Some have balconies, others have bathtubs
            you won&apos;t want to leave.
          </motion.p>
        </motion.div>

        {/* TABS */}
        <motion.div
          className="flex flex-wrap items-center gap-2 mb-8 md:mb-10 border-b border-[#e5e5e5] pb-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#b69d74] text-white"
                  : "text-[#666] hover:text-[#111] hover:bg-[#eee]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* CENTERED TAGLINE */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b69d74] text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] ">
            Explore Our Apartment
          </div>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {filtered.map((apt) => (
            <motion.div
              key={apt.id}
              variants={scaleUp}
              className="group cursor-pointer"
            >
              {/* IMAGE */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3.5 bg-[#eee]">
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Tag */}
                {apt.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white text-[#111] text-[10px] font-semibold uppercase tracking-wider">
                    {apt.tag}
                  </span>
                )}

                {/* Price badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#111]">
                  <span className="text-base font-semibold">${apt.price}</span>
                  <span className="text-[11px] text-[#777] ml-1">
                    / {apt.period}
                  </span>
                </div>
              </div>

              {/* INFO */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-[15px] sm:text-base font-medium group-hover:text-[#b69d74] transition-colors duration-300">
                    {apt.name}
                  </h3>
                  <span className="text-[11px] text-[#999] uppercase tracking-wider">
                    {apt.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-[13px] text-[#777]">
                  <span className="flex items-center gap-1">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                    {apt.guests}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                  <span>{apt.beds}</span>
                  <span className="w-1 h-1 rounded-full bg-[#ccc]" />
                  <span>{apt.size}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#999] text-sm">
              No rooms found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
