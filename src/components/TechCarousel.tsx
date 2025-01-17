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
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={2000}
    >
      {icons.map((icon, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center">
          <img
            src={`/icons/${icon}`}
            alt={icon.replace(".svg", "")}
            className="w-16 h-16 object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
