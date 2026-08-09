"use client";

import React from "react";

const reviews = [
  {
    id: 1,
    quote:
      "Absolutely outstanding experience from start to finish. Dr. Mitchell transformed my smile completely. The clinic is immaculate and the staff make you feel so at ease. I've never looked forward to a dental visit before!",
    name: "Jennifer Walsh",
    date: "March 2026",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "The implant procedure was painless and the results are phenomenal. Dr. Harrington explained everything thoroughly. The follow-up care has been exceptional. I highly recommend this clinic to anyone seeking world-class dental care.",
    name: "Robert Aldridge",
    date: "February 2026",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "The teeth whitening treatment gave me incredible results. The team is so professional and warm. The modern equipment and techniques made the whole process comfortable and quick. My confidence has soared since my visit!",
    name: "Sophia Laurent",
    date: "January 2026",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    quote:
      "From the moment I walked in, I knew I was in good hands. The staff is incredibly welcoming and the results speak for themselves. Best dental experience I've ever had, hands down.",
    name: "Marcus Chen",
    date: "December 2025",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 5,
    quote:
      "Professional, gentle, and truly caring. They take the time to listen and customize your treatment. My family and I have been coming here for years and wouldn't go anywhere else.",
    name: "Elena Rodriguez",
    date: "November 2025",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 6,
    quote:
      "State-of-the-art facility with a team that genuinely cares about your comfort. The cosmetic work they did exceeded all my expectations. I smile with confidence now!",
    name: "David Park",
    date: "October 2025",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#eab308" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <div className="w-[320px] sm:w-[380px] lg:w-[420px] flex-shrink-0 bg-[#f8f9fa] rounded-2xl border border-[#e9ecef] p-6 sm:p-7 shadow-sm">
    {/* Stars */}
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>

    {/* Quote */}
    <p className="text-[#334155] text-[13px] sm:text-sm leading-[1.7] mb-6">
      "{review.quote}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white shadow-sm flex-shrink-0">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-[13px] sm:text-sm font-semibold text-[#0f172a]">
          {review.name}
        </p>
        <p className="text-[11px] sm:text-xs text-[#64748b] mt-0.5">
          {review.date}
        </p>
      </div>
    </div>
  </div>
);

export default function ReviewsSection() {
  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="w-full bg-white text-[#111] font-sans antialiased py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 mb-10 sm:mb-12 lg:mb-14 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-6 h-[1px] bg-[#b69d74]" />
          <span className="text-[#b69d74] uppercase tracking-[0.2em] text-[11px] sm:text-xs font-medium">
            Testimonials
          </span>
          <span className="w-6 h-[1px] bg-[#b69d74]" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#0f172a]">
          What Our Patients Say
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        {/* Scrolling Track */}
        <div className="flex gap-4 sm:gap-5 lg:gap-6 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
