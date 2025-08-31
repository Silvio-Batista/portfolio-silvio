
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function TechCarousel() {
  const icons = [
    "apache.svg",
    "composer.svg",
    "docker.svg",
    "git.svg",
    "github.svg",
    "javascript.svg",
    "laravel.svg",
    "mongodb.svg",
    "mysql.svg",
    "nextjs.svg",
    "node.svg",
    "php.svg",
    "postgresql.svg",
    "postman.svg",
    "python.svg",
    "react.svg",
    "typescript.svg",
  ];

  return (
  <div className="relative rounded-3xl bg-gradient-to-br from-blue-100/60 via-white/60 to-blue-200/60 shadow-xl backdrop-blur-md">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
        }}
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="group w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white/80 shadow-lg border-2 border-blue-200/60 hover:border-blue-500 hover:shadow-blue-300/40 transition-all duration-300 relative overflow-hidden">
              <img
                src={`/icons/${icon}`}
                alt={icon.replace(".svg", "")}
                className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 group-hover:drop-shadow-glow transition-all duration-300"
              />
              <span className="absolute inset-0 rounded-full pointer-events-none group-hover:shadow-[0_0_16px_4px_rgba(37,99,235,0.25)] transition-all duration-300"></span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 8px #3b82f6) drop-shadow(0 0 2px #60a5fa);
        }
      `}</style>
    </div>
  );
}
