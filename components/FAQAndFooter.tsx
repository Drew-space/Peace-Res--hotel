"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What makes your projects unique?",
    answer:
      "Our projects are crafted with elite craftsmanship, personalized designs, and located in the most prestigious areas, ensuring a luxurious living experience that stands above the rest.",
  },
  {
    question: "Do you offer customization options?",
    answer:
      "Yes, we provide tailored customization options to match your lifestyle and design preferences. From floor plans to finishes, every detail can be personalized.",
  },
  {
    question: "What amenities are included in the properties?",
    answer:
      "Our properties include wellness spas, premium dining, concierge services, infinity pools, state-of-the-art gyms, and full smart home integrations.",
  },
  {
    question: "How can I schedule a visit?",
    answer:
      "You can schedule a visit directly through our contact form or by reaching out to our support team. Private viewings are available seven days a week.",
  },
  {
    question: "What is the typical timeline from purchase to move-in?",
    answer:
      "Most of our properties are ready for immediate occupancy. For custom projects, the timeline typically ranges from 8 to 14 months depending on the scope.",
  },
];

/* ================= ICONS ================= */

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const MinusIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M5 12h14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h2v3h-2c-.6 0-1 .4-1 1v2h3l-.5 3H13v7A10 10 0 0 0 22 12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A3.6 3.6 0 0 0 12 8.1c0 .3 0 .6.1.9A10.2 10.2 0 0 1 3 4.8a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.7-.5v.1a3.6 3.6 0 0 0 2.9 3.5c-.5.1-1 .2-1.5.1.4 1.3 1.7 2.3 3.2 2.3A7.3 7.3 0 0 1 2 17.6 10.3 10.3 0 0 0 7.6 19c6.8 0 10.5-5.7 10.5-10.6v-.5c.7-.5 1.4-1.2 1.9-2.1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);

/* ================= COMPONENT ================= */

export default function FAQAndFooter() {
  const [openIndex, setOpenIndex] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div className="w-full bg-[#f7f6f4] text-[#1a1a1a] overflow-hidden antialiased">
      {/* FAQ SECTION */}
      <section className="w-full px-5 sm:px-8 lg:px-16 xl:px-20 py-14 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            className="lg:col-span-5 space-y-6 lg:sticky lg:top-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#b69d74]" />
              <p className="text-[#b69d74] uppercase tracking-[0.2em] text-[11px] font-medium">
                FAQ
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.15] font-medium tracking-tight"
            >
              Everything you need to know right now
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[#6b6b6b] leading-[1.6] max-w-sm text-sm sm:text-[15px]"
            >
              Find answers to common questions about our properties, services,
              and the buying process.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-xl aspect-[4/3] w-full group"
            >
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop"
                alt="Luxury interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 sm:p-6">
                <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                  Still curious?
                </p>
                <p className="text-white text-base sm:text-lg font-light">
                  We're here to help
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - ACCORDION */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <div className="divide-y divide-[#e5e5e5] border-t border-[#e5e5e5]">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className={`transition-colors duration-300 ${isOpen ? "bg-white/60" : "hover:bg-white/30"}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full text-left py-5 sm:py-6 px-1 flex items-start gap-4"
                    >
                      {/* Number */}
                      <span
                        className={`hidden sm:block text-xs font-medium mt-0.5 transition-colors duration-300 flex-shrink-0 w-5 ${
                          isOpen ? "text-[#b69d74]" : "text-[#b0b0b0]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h3
                            className={`text-[15px] sm:text-base lg:text-[17px] leading-snug font-medium transition-colors duration-300 pr-2 ${
                              isOpen ? "text-[#1a1a1a]" : "text-[#333]"
                            }`}
                          >
                            {faq.question}
                          </h3>

                          <span
                            className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                              isOpen
                                ? "bg-[#1a1a1a] text-white"
                                : "bg-[#ececea] text-[#1a1a1a]"
                            }`}
                          >
                            {isOpen ? (
                              <MinusIcon className="w-4 h-4" />
                            ) : (
                              <PlusIcon className="w-4 h-4" />
                            )}
                          </span>
                        </div>

                        <div
                          className={`grid transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 mt-3"
                              : "grid-rows-[0fr] opacity-0 mt-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[#6b6b6b] leading-[1.65] text-sm sm:text-[15px] max-w-xl pb-0.5">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-8 sm:mt-10 p-5 sm:p-6 bg-white rounded-xl border border-[#e5e5e5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <h4 className="text-[15px] sm:text-base font-medium mb-0.5">
                  Can't find your answer?
                </h4>
                <p className="text-[#6b6b6b] text-xs sm:text-sm leading-snug">
                  Our team is happy to assist you with any questions.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#333] transition-colors duration-300">
                Contact Us
                <ArrowRight />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
    </div>
  );
}
