"use client";

import React, { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <section className="w-full py-20">
      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/video/hotelvideo.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={toggleVideo}
            className="h-14 w-14 rounded-full ring-white ring-2 flex items-center justify-center transition hover:scale-105"
          >
            {isPlaying ? (
              <Pause size={30} className="text-white fill-white" />
            ) : (
              <Play size={30} className="text-white fill-white ml-1" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
