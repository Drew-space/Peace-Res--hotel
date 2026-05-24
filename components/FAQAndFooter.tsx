"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What makes your projects unique?",
    answer:
      "Our projects are crafted with elite craftsmanship, personalized designs, and located in the most prestigious areas, ensuring a luxurious living experience.",
  },
  {
    question: "Do you offer customization options?",
    answer:
      "Yes, we provide tailored customization options to match your lifestyle and design preferences.",
  },
  {
    question: "What amenities are included in the properties?",
    answer:
      "Our properties include wellness spas, premium dining, concierge services, pools, gyms, and smart home integrations.",
  },
  {
    question: "How can I schedule a visit?",
    answer:
      "You can schedule a visit directly through our contact form or by reaching out to our support team.",
  },
];

/* ================= ICONS (INLINE SVG) ================= */

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h2v3h-2c-.6 0-1 .4-1 1v2h3l-.5 3H13v7A10 10 0 0 0 22 12z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.9-2.6 1.1A3.6 3.6 0 0 0 12 8.1c0 .3 0 .6.1.9A10.2 10.2 0 0 1 3 4.8a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.7-.5v.1a3.6 3.6 0 0 0 2.9 3.5c-.5.1-1 .2-1.5.1.4 1.3 1.7 2.3 3.2 2.3A7.3 7.3 0 0 1 2 17.6 10.3 10.3 0 0 0 7.6 19c6.8 0 10.5-5.7 10.5-10.6v-.5c.7-.5 1.4-1.2 1.9-2.1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
  </svg>
);

/* ================= COMPONENT ================= */

export default function FAQAndFooter() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full bg-[#f5f5f3] text-black overflow-hidden">
      {/* FAQ SECTION */}
      <section className="w-full px-5 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* LEFT */}
          <div className="space-y-8">
            <div>
              <p className="text-[#b69d74] uppercase tracking-wide text-sm mb-4">
                FAQ
              </p>

              <h2 className="text-[2.8rem] md:text-[5rem] leading-[0.95] font-medium tracking-tight max-w-[650px]">
                Everything you need to know right now
              </h2>
            </div>

            <div className="relative overflow-hidden rounded-[22px] h-[300px] md:h-[420px] w-full">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop"
                alt="faq"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-[4rem] md:text-[7rem] font-light">
                FAQ
              </h3>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-black/10 py-7">
                  <div className="flex justify-between gap-5">
                    <div className="flex-1">
                      <h3 className="text-[1.5rem] md:text-[2rem] font-medium">
                        {faq.question}
                      </h3>

                      <div
                        className={`grid transition-all duration-500 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-5"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-[#6f6f6f] leading-8">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-12 h-12 rounded-2xl bg-[#ececea] flex items-center justify-center hover:bg-black hover:text-white transition"
                    >
                      {isOpen ? <XIcon /> : <PlusIcon />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#efefed] px-5 md:px-10 lg:px-16 pt-16 md:pt-24 pb-8">
        {/* TOP */}
        <div className="flex flex-col xl:flex-row justify-between gap-10">
          <h2 className="text-[2.5rem] md:text-[3rem] font-light">PEACEREST</h2>

          <p className="max-w-[600px] text-[#4e4e4e] leading-8">
            Founded with the vision of redefining urban living, Livora isn’t
            just a platform — it’s a promise of curated comfort.
          </p>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-20">
          <div>
            <h3 className="text-[2rem] mb-5">Discover</h3>
            <ul className="space-y-4">
              {["Home", "Rooms", "Restaurant", "Pages", "Blog"].map((item) => (
                <li key={item} className="hover:translate-x-1 transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[2rem] mb-5">Experiences</h3>
            <ul className="space-y-4">
              {[
                "Dining",
                "Wellness & Spa",
                "Restaurant",
                "Menu",
                "Activities",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[2rem] mb-5">Contact Us</h3>

            <div className="space-y-4">
              <p>booking@livora.com</p>
              <p>+331 5856 7960</p>
              <p>42 avenue Hudson, Austria</p>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-8">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <GlobeIcon />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-black/15 mt-20 pt-7 flex justify-between flex-col md:flex-row gap-5">
          <p>© 2025 All Rights Reserved</p>

          <div className="flex gap-8">
            <p>Terms</p>
            <p>Cookies</p>
            <p>Privacy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
