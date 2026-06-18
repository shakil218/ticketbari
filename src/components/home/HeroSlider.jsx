"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  const heroSlides = [
    {
      id: 1,
      title: "Book Tickets Across Bangladesh",
      description: "Find bus, train, launch and flight tickets in seconds.",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
    },
    {
      id: 2,
      title: "Travel Smarter, Travel Faster",
      description: "Compare schedules, prices and routes from trusted vendors.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 3,
      title: "Become a Ticket Vendor",
      description:
        "Manage your routes, schedules and bookings from one dashboard.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    },
  ];

  return (
    <section className="overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-125 md:h-150"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="max-w-3xl px-8 md:px-16">
                  <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
                    Trusted Ticket Booking Platform
                  </span>

                  <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mb-8 max-w-xl text-lg text-white/80">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/tickets"
                      className="rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:scale-105"
                    >
                      Find Tickets
                    </Link>

                    <Link
                      href="/register-vendor"
                      className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                      Become a Vendor
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
