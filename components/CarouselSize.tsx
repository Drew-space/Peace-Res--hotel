import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { BedDouble, Users, Maximize } from "lucide-react";

const rooms = [
  {
    name: "Deluxe Room",
    image: "/images/room1.jpg",
  },
  {
    name: "Standard Room",
    image: "/images/room2.jpg",
  },
  {
    name: "Superior Room",
    image: "/images/room3.jpeg",
  },

  {
    name: "Luxury Suite",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
  },
  {
    name: "Ocean View Room",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    name: "Executive Room",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    name: "Classic Room",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    name: "Family Suite",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
  },
  {
    name: "Presidential Room",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
  },
  {
    name: "Modern Apartment",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
];

export function CarouselSize() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="gap-2">
        {rooms.map((room, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="w-[330px] px-2 py-4">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-[260px] w-full object-cover"
                />

                {/* Price Tag */}
                <div className="absolute bottom-4 right-0 bg-white px-6 py-2">
                  <p className="text-2xl font-medium">
                    $300<span className="text-lg">/Night</span>
                  </p>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-4">
                <h1 className="text-4xl font-medium">{room.name}</h1>

                {/* Details */}
                <div className="flex items-center gap-5 mt-4 text-gray-500">
                  <div className="flex items-center gap-2">
                    <Maximize size={18} />
                    <span>90 Sq Ft</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <BedDouble size={18} />
                    <span>1 Bed</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users size={18} />
                    <span>3 Sleeps</span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
