// "use client";

// import { useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   BedDouble,
//   Users,
//   Bath,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const rooms = [
//   {
//     id: 1,
//     name: "Royal Deluxe",
//     category: "Luxury Hotel",
//     image:
//       "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
//     beds: 3,
//     guests: 3,
//     bathrooms: 1,
//   },
//   {
//     id: 2,
//     name: "Ocean Suite",
//     category: "Premium Stay",
//     image:
//       "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
//     beds: 2,
//     guests: 4,
//     bathrooms: 2,
//   },
//   {
//     id: 3,
//     name: "Garden Villa",
//     category: "Signature Offer",
//     image:
//       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
//     beds: 4,
//     guests: 6,
//     bathrooms: 3,
//   },
//   {
//     id: 4,
//     name: "Skyline Penthouse",
//     category: "Exclusive",
//     image:
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
//     beds: 2,
//     guests: 2,
//     bathrooms: 2,
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
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

// export default function AccommodationsSection() {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const slideVariants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? 300 : -300,
//       opacity: 0,
//       scale: 0.95,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
//     },
//     exit: (dir: number) => ({
//       x: dir < 0 ? 300 : -300,
//       opacity: 0,
//       scale: 0.95,
//       transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
//     }),
//   };

//   const paginate = useCallback((newDir: number) => {
//     setDirection(newDir);
//     setCurrent((prev) => (prev + newDir + rooms.length) % rooms.length);
//   }, []);

//   const room = rooms[current];

//   return (
//     <section className="w-full bg-white text-[#111] font-sans antialiased py-14 sm:py-16 lg:py-20 overflow-hidden">
//       <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
//         {/* HEADER */}
//         <motion.div
//           className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           variants={staggerContainer}
//         >
//           <motion.div variants={fadeUp}>
//             <div className="flex items-center gap-2.5 mb-3">
//               <span className="w-5 h-[1px] bg-[#b69d74]" />
//               <span className="text-[#b69d74] uppercase tracking-[0.2em] text-[11px] font-medium">
//                 Browse Our Collection
//               </span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-medium tracking-tight leading-[1.1]">
//               Our Accommodations
//             </h2>
//           </motion.div>

//           <motion.p
//             variants={fadeUp}
//             className="text-[#777] text-sm sm:text-[15px] max-w-xs leading-[1.6]"
//           >
//             Handpicked spaces designed for comfort, style, and unforgettable
//             stays.
//           </motion.p>
//         </motion.div>

//         {/* CAROUSEL */}
//         <motion.div
//           className="relative"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//         >
//           {/* Main Image Container - Compact height */}
//           <div className="relative rounded-2xl overflow-hidden bg-[#f0f0f0] aspect-[16/9] sm:aspect-[2.2/1] lg:aspect-[2.5/1]">
//             <AnimatePresence initial={false} custom={direction} mode="wait">
//               <motion.div
//                 key={current}
//                 custom={direction}
//                 variants={slideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="absolute inset-0"
//               >
//                 <img
//                   src={room.image}
//                   alt={room.name}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//               </motion.div>
//             </AnimatePresence>

//             {/* Content overlay */}
//             <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-6 sm:pb-8 px-6 z-10">
//               <motion.span
//                 key={`cat-${current}`}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-[#b69d74] text-xs sm:text-sm font-medium uppercase tracking-wider mb-1.5"
//               >
//                 {room.category}
//               </motion.span>
//               <motion.h3
//                 key={`name-${current}`}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.25 }}
//                 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight mb-3"
//               >
//                 {room.name}
//               </motion.h3>
//               <motion.div
//                 key={`stats-${current}`}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="flex items-center gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm"
//               >
//                 <span className="flex items-center gap-1.5">
//                   <BedDouble size={14} strokeWidth={1.5} />
//                   {room.beds} Beds
//                 </span>
//                 <span className="w-1 h-1 rounded-full bg-white/40" />
//                 <span className="flex items-center gap-1.5">
//                   <Users size={14} strokeWidth={1.5} />
//                   {room.guests} Guests
//                 </span>
//                 <span className="w-1 h-1 rounded-full bg-white/40" />
//                 <span className="flex items-center gap-1.5">
//                   <Bath size={14} strokeWidth={1.5} />
//                   {room.bathrooms} Bathroom{room.bathrooms > 1 ? "s" : ""}
//                 </span>
//               </motion.div>
//             </div>

//             {/* Side peek images (desktop only) */}
//             <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 w-20 h-28 rounded-xl overflow-hidden opacity-40 blur-[1px]">
//               <img
//                 src={rooms[(current - 1 + rooms.length) % rooms.length].image}
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 w-20 h-28 rounded-xl overflow-hidden opacity-40 blur-[1px]">
//               <img
//                 src={rooms[(current + 1) % rooms.length].image}
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* ARROWS - Positioned properly */}
//           <button
//             onClick={() => paginate(-1)}
//             className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#333] flex items-center justify-center hover:bg-white hover:text-[#111] transition-all duration-300 shadow-lg border border-white/20"
//             aria-label="Previous room"
//           >
//             <ChevronLeft size={18} strokeWidth={2} />
//           </button>

//           <button
//             onClick={() => paginate(1)}
//             className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm text-[#333] flex items-center justify-center hover:bg-white hover:text-[#111] transition-all duration-300 shadow-lg border border-white/20"
//             aria-label="Next room"
//           >
//             <ChevronRight size={18} strokeWidth={2} />
//           </button>

//           {/* DOTS */}
//           <div className="flex items-center justify-center gap-2 mt-5">
//             {rooms.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setDirection(index > current ? 1 : -1);
//                   setCurrent(index);
//                 }}
//                 className={`rounded-full transition-all duration-300 ${
//                   index === current
//                     ? "w-6 h-2 bg-[#b69d74]"
//                     : "w-2 h-2 bg-[#ddd] hover:bg-[#bbb]"
//                 }`}
//                 aria-label={`Go to room ${index + 1}`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const panels = [
  {
    id: 1,
    word: "Rejuvenate",
    headline: "Relax. Refresh. Rejuvenate.",
    description:
      "Treat yourself to a peaceful escape with our soothing spa treatments and expert care.",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    word: "Refresh",
    headline: "Awaken. Restore. Refresh.",
    description:
      "Start your morning with poolside serenity and views that quiet the mind.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    word: "Relax",
    headline: "Unwind. Settle. Relax.",
    description:
      "Soft light, clean lines, and a bed you sink into without trying.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  },
];

const DURATION = 5000;

export default function ExpandingGallery() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0); // forces progress bar remount

  const next = useCallback(() => {
    setActive((p) => (p + 1) % panels.length);
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
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-medium tracking-tight leading-[1.1] mb-2">
            Your Stay, Our Service
          </h2>
          <p className="text-[#777] text-sm sm:text-[15px] max-w-md mx-auto leading-[1.6]">
            We provide everything you need for a smooth and stress-free stay.
            From easy booking to personalized services, your comfort is our top
            priority.
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="flex h-[320px] sm:h-[400px] lg:h-[440px] gap-2.5 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {panels.map((panel, i) => {
            const isActive = i === active;

            return (
              <div
                key={panel.id}
                onClick={() => {
                  setActive(i);
                  setTick((t) => t + 1);
                }}
                className={`
                  relative overflow-hidden rounded-xl cursor-pointer
                  transition-[flex] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                  ${isActive ? "flex-[3]" : "flex-[1]"}
                `}
              >
                {/* Image */}
                <img
                  src={panel.image}
                  alt={panel.word}
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
                    ${isActive ? "bg-black/30" : "bg-black/50"}
                  `}
                />

                {/* Border */}
                <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-5 lg:p-6">
                  {/* Top: word when collapsed */}
                  <div
                    className={`
                      transition-all duration-500
                      ${isActive ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}
                    `}
                  >
                    <span className="text-white text-sm sm:text-base font-medium tracking-wide">
                      {panel.word}
                    </span>
                  </div>

                  {/* Bottom: full text when expanded */}
                  <div
                    className={`
                      transition-all duration-500
                      ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    `}
                  >
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium leading-snug mb-2">
                      {panel.headline}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-[1.6] max-w-xs mb-4">
                      {panel.description}
                    </p>
                    {/* Gold line */}
                    <div className="w-16 h-[2px] bg-[#b69d74]" />
                  </div>
                </div>

                {/* Progress bar - only on active */}
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
      </div>

      {/* Keyframe for progress bar */}
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progress ${DURATION}ms linear forwards;
        }
      `}</style>
    </section>
  );
}
