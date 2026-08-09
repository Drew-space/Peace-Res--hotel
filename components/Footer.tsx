"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const socials = [
  {
    name: "Instagram",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-[#111] text-white font-sans antialiased overflow-hidden">
      {/* CTA STRIP */}
      <motion.div
        className="border-b border-white/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 py-12 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <motion.h3
            variants={fadeUp}
            className="text-xl sm:text-2xl lg:text-[1.75rem] font-medium tracking-tight text-center sm:text-left"
          >
            Ready to experience something different?
          </motion.h3>
          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0 px-7 py-3 bg-[#b69d74] text-white text-sm font-semibold uppercase tracking-wider hover:bg-[#c4ae82] transition-colors duration-300"
          >
            Book Your Stay
          </motion.button>
        </div>
      </motion.div>

      {/* MAIN FOOTER */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 pt-14 sm:pt-16 pb-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={staggerContainer}
        >
          {/* BRAND COLUMN */}
          <motion.div variants={fadeUp} className="lg:col-span-4 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight">
              PEACEREST
            </h2>
            <p className="text-white/50 text-sm leading-[1.7] max-w-xs">
              We don't just offer rooms. We curate moments of stillness in a
              world that rarely stops moving.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#b69d74] hover:bg-[#b69d74]/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* DISCOVER */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 lg:col-start-6"
          >
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5">
              Discover
            </h4>
            <ul className="space-y-3">
              {["Home", "Rooms", "Amenities", "About", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-[#b69d74] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* EXPERIENCES */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5">
              Experiences
            </h4>
            <ul className="space-y-3">
              {[
                "Dining",
                "Wellness & Spa",
                "Events",
                "Activities",
                "Gift Cards",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-[#b69d74] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NEWSLETTER */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5">
              Stay in the loop
            </h4>
            <p className="text-sm text-white/50 leading-[1.6] mb-4">
              Get early access to seasonal offers and hidden gems we only share
              by email.
            </p>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white/5 border border-white/10 text-white text-sm px-4 py-2.5 placeholder:text-white/30 focus:outline-none focus:border-[#b69d74] transition-colors duration-300"
              />
              <button className="px-4 py-2.5 bg-[#b69d74] text-white text-sm font-medium hover:bg-[#c4ae82] transition-colors duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          className="mt-14 sm:mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs text-white/30">
            © 2026 PEACEREST. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white/60 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LARGE WATERMARK */}
      <div className="relative overflow-hidden pb-2">
        <p className="text-[12vw] sm:text-[10vw] font-medium text-white/[0.03] leading-none text-center select-none whitespace-nowrap tracking-tight">
          PEACEREST
        </p>
      </div>
    </footer>
  );
}
