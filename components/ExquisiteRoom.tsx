"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselSize } from "./CarouselSize";
import { Separator } from "./ui/separator";

const ExquisiteRoom = () => {
  return (
    <section className="container mx-auto pb-10">
      <div className="flex flex-col justify-center items-center">
        <p>(ROOMS & SUITES) </p>
        <h1> Pur Exquisite Room Collection</h1>
        <CarouselSize />
        <Separator className="mt-20" />
      </div>
    </section>
  );
};

export default ExquisiteRoom;
