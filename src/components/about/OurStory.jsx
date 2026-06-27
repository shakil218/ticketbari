"use client";

import Image from "next/image";
import { Chip, Button } from "@heroui/react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OurStory() {
  const features = [
    "Fast & Secure Ticket Booking",
    "Multiple Transport Options",
    "Instant Booking Confirmation",
    "Trusted by Thousands of Travelers",
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
                alt="Our Story"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 hidden rounded-3xl border border-default-200 bg-background p-6 shadow-xl backdrop-blur lg:block">
              <p className="text-4xl font-bold text-primary">10K+</p>

              <p className="mt-1 text-default-500">Happy Travelers</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Badge */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm dark:border-gray-700 dark:bg-zinc-900">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
                </span>

                <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200">
                  Our Story
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-black leading-tight lg:text-5xl">
              Connecting People Through
              <span className="block bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Smarter Travel
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-default-500">
              TicketBari was created with a simple mission—to make travel easier
              for everyone. Whether you&apos;re booking a bus, train, launch, or
              flight ticket, we provide a seamless, secure, and reliable booking
              experience that saves you time and gives you peace of mind.
            </p>

            <p className="mt-5 text-default-500 leading-7">
              We believe travel should be simple. That&apo;s why we&apos;ve
              built a platform that connects travelers with trusted transport
              providers, making every journey more convenient and enjoyable.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="text-success" size={22} />

                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link href="/tickets">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white"
                >
                  Explore Tickets
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
