"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const icons = [
  "docker.svg",
  "git.svg",
  "github.svg",
  "javascript.svg",
  "laravel.svg",
  "mongodb.svg",
  "nextjs.svg",
  "node.svg",
  "php.svg",
  "postgresql.svg",
  "postman.svg",
  "python.svg",
  "react.svg",
  "typescript.svg",
];

export default function TechCarousel() {
  return (
    <div className="relative rounded-xl glass-card overflow-hidden py-4 border-terminal-purple/15">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        breakpoints={{
          320: { slidesPerView: 3 },
          480: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
        }}
      >
        {icons.map((icon) => (
          <SwiperSlide key={icon} className="flex justify-center items-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-card border border-card hover:border-terminal-purple/40 hover:shadow-glow-purple transition-all duration-300 group">
              <img
                src={`/icons/${icon}`}
                alt={icon.replace(".svg", "")}
                className="w-9 h-9 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
