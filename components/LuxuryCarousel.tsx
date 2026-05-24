"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./Button";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
    title: "Luxury Suite",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop",
    title: "Modern Penthouse",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2000&auto=format&fit=crop",
    title: "Ocean View",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop",
    title: "Royal Deluxe",
  },
];

const TWEEN_FACTOR_BASE = 0.32;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export default function LuxuryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    duration: 20,
  });

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__inner") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;

      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }

              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);

        const scale = numberWithinRange(tweenValue, 0.78, 1);
        const opacity = numberWithinRange(tweenValue, 0.4, 1);

        const tweenNode = tweenNodes.current[slideIndex];

        tweenNode.style.transform = `scale(${scale})`;
        tweenNode.style.opacity = `${opacity}`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
  }, [emblaApi, tweenScale, setTweenNodes, setTweenFactor]);

  return (
    <section className="w-full overflow-hidden py-20">
      <div className="mb-14 text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-orange-400">
          Luxury Stay
        </p>

        <h2 className="mt-4 text-5xl font-light  md:text-7xl">
          Our Accommodations
        </h2>
      </div>

      <div className="relative">
        {/* Embla */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_70%] px-4 md:flex-[0_0_60%]"
              >
                <div
                  className="embla__slide__inner relative h-[500px] overflow-hidden rounded-[2.5rem] transition-transform duration-200"
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  {/* Image */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end px-8 pb-14 text-center text-white">
                    <span className="mb-4 text-orange-400">Luxury Hotel</span>

                    <h3 className="mb-6 text-4xl font-light md:text-6xl">
                      {slide.title}
                    </h3>

                    <div className="mb-8 h-[2px] w-24 bg-orange-400" />

                    <div className="flex gap-8 text-sm text-white/90">
                      <span>3 Beds</span>
                      <span>3 Guests</span>
                      <span>1 Bathroom</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left */}
        <button
          onClick={scrollPrev}
          className="absolute left-5 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
        >
          <ChevronLeft />
        </button>

        {/* Right */}
        <button
          onClick={scrollNext}
          className="absolute right-5 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
        >
          <ChevronRight />
        </button>

        {/* Bottom Content */}
        <div className="mx-auto mt-20 flex max-w-3xl flex-col items-center justify-center px-6 text-center">
          <p className="text-lg leading-relaxed text-black/70 md:text-xl">
            Browse our signature offer for every occasion, from family-friendly
            packages to romantic gateways. Book directly for our best guarantee
            plus complimentary service and experience.
          </p>

          <Button className="bg-amber-400 text-white mt-10">
            Book an Apartment
          </Button>
        </div>
      </div>
    </section>
  );
}
