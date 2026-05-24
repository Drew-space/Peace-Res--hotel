import { BedDouble, Maximize, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

const ExploreRooms = () => {
  return (
    <section className="container mx-auto pb-10">
      <div className="flex flex-col justify-center items-center">
        <p>(ROOMS & SUITES) </p>
        <h1>Explore Room & Suites</h1>
        <EsploreRoom />

        <Separator className="mt-20" />
      </div>
    </section>
  );
};

export default ExploreRooms;

const EsploreRoom = () => {
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
      name: "Modern Apartment",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },

    {
      name: "Presidential Room",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    },
  ];
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
      {rooms.map((room, index) => (
        <div key={index} className="w-[450px]">
          {/* Image */}
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover"
            />

            {/* Price Tag */}
            <div className="absolute bottom-4 right-0 bg-white px-5 py-2">
              <p className="text-2xl font-medium">
                $300
                <span className="text-lg">/Night</span>
              </p>
            </div>
          </div>

          {/* Text Content */}
          {/* Text Content */}
          <div className="mt-4 flex items-center justify-between gap-4">
            {/* Room Name */}
            <div className="min-w-0">
              <h1 className="text-2xl font-medium whitespace-nowrap">
                {room.name}
              </h1>
            </div>

            {/* Details */}
            <div className="flex items-center gap-4 text-sm text-gray-500 whitespace-nowrap">
              <div className="flex items-center gap-1">
                <Maximize size={16} />
                <span>90 Sq Ft</span>
              </div>

              <div className="flex items-center gap-1">
                <BedDouble size={16} />
                <span>1 Bed</span>
              </div>

              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>3 Sleeps</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
