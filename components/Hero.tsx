"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";

const Hero = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[100dvh] font-sans overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/image.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full min-h-[100dvh] flex items-center px-5 sm:px-8 lg:px-16 xl:px-20 pt-24 sm:pt-28 pb-10 sm:pb-12">
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-10 lg:gap-14">
            {/* LEFT SIDE - TEXT + BUTTONS */}
            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md lg:max-w-lg"
              initial="hidden"
              animate="visible"
            >
              <motion.p
                custom={0}
                variants={fadeUp}
                className="text-[#b69d74] uppercase tracking-[0.25em] text-[11px] sm:text-xs font-medium mb-3 sm:mb-4"
              >
                Modern Luxury & Timeless Living
              </motion.p>

              <motion.h1
                custom={1}
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.25rem] leading-[1.1] font-medium tracking-tight text-white mb-4 sm:mb-6"
              >
                Welcome to Our
                <br />
                Luxurious Hotel
                <br />
                and Resort
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-sm"
              >
                Experience comfort redefined in the heart of the city.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
              >
                <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#b69d74] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#c4ae82] transition-colors duration-300">
                  Book an Apartment
                </button>

                <a
                  href="tel:+234567890"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 border border-white/30 text-white font-medium text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +234 567 890
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - GLASS CARD */}
            <motion.div
              className="w-full max-w-xs sm:max-w-sm lg:max-w-[380px]"
              initial="hidden"
              animate="visible"
              variants={fadeLeft}
            >
              <motion.div
                variants={scaleIn}
                className="backdrop-blur-xl p-2.5 sm:p-3 bg-white/5 border border-white/15 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
              >
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-full h-36 sm:h-36 sm:w-36 lg:w-40 lg:h-40 flex-shrink-0 relative rounded-lg sm:rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=400&auto=format&fit=crop"
                      alt="Interior"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 py-2 px-2 sm:pr-2 sm:pl-0 flex flex-col justify-center text-center sm:text-left">
                    <p className="text-white/90 text-xs leading-snug mb-3">
                      We create interiors that are not only aesthetically
                      appealing but also deeply functional and serene.
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-[#b69d74] text-xs font-medium hover:text-[#c4ae82] transition-colors group"
                    >
                      View Our Works
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = ["Home", "About", "Our-Rooms", "FAQ"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5 sm:py-6"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-20">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div
            className={`text-white font-semibold tracking-wide transition-all duration-500 ${
              scrolled ? "text-base" : "text-lg md:text-xl"
            }`}
          >
            PEACEREST
          </div>

          {/* NAV LINKS - Desktop */}
          <div
            className={`hidden md:flex items-center gap-6 lg:gap-8 text-white/80 transition-all duration-500 ${
              scrolled ? "text-xs" : "text-xs lg:text-sm"
            }`}
          >
            {navLinks.map((item, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-[#b69d74] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* RIGHT BUTTON - Desktop */}
          <div className="hidden md:block">
            <button
              className={`px-5 py-2.5 bg-[#b69d74] text-white font-medium uppercase tracking-wider hover:bg-[#c4ae82] transition-all duration-500 ${
                scrolled ? "text-[11px]" : "text-[11px] lg:text-xs"
              }`}
            >
              Book Apartment
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-5 sm:px-8 py-6 flex flex-col gap-4">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href="#"
                className="text-white/80 hover:text-[#b69d74] transition-colors py-2 text-sm"
              >
                {item}
              </a>
            ))}
            <button className="mt-2 px-6 py-3 bg-[#b69d74] text-white font-semibold text-sm w-full">
              Book Apartment
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
