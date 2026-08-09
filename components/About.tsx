"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

// Animated counter component
const AnimatedNumber = ({
  value,
  suffix,
}: {
  value: string;
  suffix: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  const numericMatch = value.match(/^([\d.]+)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const hasK = value.includes("K");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, numericValue, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest).toString()),
    });
    return () => controls.stop();
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}
      {hasK ? "K" : ""}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    {
      number: "98",
      suffix: "%",
      title: "Positive Feedback",
      description:
        "Guests who leave smiling. We've tracked every review since day one, and the numbers keep climbing.",
    },
    {
      number: "15",
      suffix: "+",
      title: "Years of Expertise",
      description:
        "Not industry experience — hospitality obsession. Every mistake turned into a standard, every guest into a lesson.",
    },
    {
      number: "25K",
      suffix: "+",
      title: "Happy Clients",
      description:
        "From honeymooners to business travelers. Some come back three times a year. A few never really leave.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
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

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="w-full bg-[#fafafa] text-[#111] font-sans antialiased">
      {/* HERO STRIP */}
      <div className="w-full px-5 sm:px-8 lg:px-16 pt-12 sm:pt-14 lg:pt-16 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
            {/* LEFT - LABEL */}
            <motion.div
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-5 h-[1px] bg-[#b69d74]" />
                <span className="text-[#b69d74] uppercase tracking-[0.2em] text-[11px] font-medium">
                  About Us
                </span>
              </div>
            </motion.div>

            {/* RIGHT - MAIN TEXT */}
            <motion.div
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                className="text-xl sm:text-2xl lg:text-[1.75rem] leading-[1.25] font-medium tracking-tight mb-3"
              >
                We don't just find you a room. We find you a feeling.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-[#666] text-sm sm:text-[15px] leading-[1.6] max-w-lg"
              >
                Since 2016, we've been quietly curating spaces where travelers
                actually want to stay — not just sleep. Our team is small,
                obsessive, and based across three time zones.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* IMAGE STRIP */}
      <div className="w-full px-5 sm:px-8 lg:px-16 mb-10 sm:mb-12 lg:mb-14">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={scaleUp}
              className="aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop"
                alt="Interior detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              variants={scaleUp}
              className="aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden mt-4 sm:mt-6 lg:mt-8"
            >
              <img
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=600&auto=format&fit=crop"
                alt="Lobby space"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div
              variants={scaleUp}
              className="aspect-[3/4] rounded-lg sm:rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600&auto=format&fit=crop"
                alt="Room detail"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="w-full px-5 sm:px-8 lg:px-16 pb-14 sm:pb-16 lg:pb-18">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <motion.div
            className="flex items-center gap-2.5 mb-6 sm:mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
          >
            <span className="w-5 h-[1px] bg-[#b69d74]" />
            <span className="text-[#b69d74] uppercase tracking-[0.2em] text-[11px] font-medium">
              By the Numbers
            </span>
          </motion.div>

          {/* STATS GRID */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e5e5e5] rounded-xl overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-[#fafafa] p-5 sm:p-6 lg:p-7 group hover:bg-[#f5f5f5] transition-colors duration-500"
              >
                <div className="mb-4 sm:mb-5">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-[#111]">
                    <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-medium text-[#111]">
                    {stat.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#777] leading-[1.55] max-w-[240px]">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-5 h-[2px] w-0 bg-[#b69d74] group-hover:w-8 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
