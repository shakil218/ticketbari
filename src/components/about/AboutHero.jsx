"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { CircleHelp, ShieldCheck, Route, Users } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          {/* Badge */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm dark:border-gray-700 dark:bg-zinc-900">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
              </span>

              <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200">
                About TicketBari
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight lg:text-6xl">
            Your Journey
            <span className="block bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Begins With Trust
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-default-500">
            TicketBari is your trusted online ticket booking platform, helping
            travelers easily book bus, train, launch, and flight tickets with
            secure payments and instant confirmation.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/tickets">
              <Button
                size="lg"
                className="bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white"
              >
                Explore Tickets
              </Button>
            </Link>

            <Link href="/contact">
              <Button size="lg" variant="bordered">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-5">
            <div className="rounded-2xl border border-divider bg-content1 p-5">
              <Users className="mb-3 text-primary" />
              <h3 className="text-2xl font-bold">10K+</h3>
              <p className="text-sm text-default-500">Happy Travelers</p>
            </div>

            <div className="rounded-2xl border border-divider bg-content1 p-5">
              <Route className="mb-3 text-success" />
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-sm text-default-500">Routes</p>
            </div>

            <div className="rounded-2xl border border-divider bg-content1 p-5">
              <ShieldCheck className="mb-3 text-warning" />
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-sm text-default-500">Secure Booking</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-divider shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
              alt="Travel"
              width={700}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-divider bg-background/90 p-5 shadow-xl backdrop-blur lg:block">
            <div className="flex items-center gap-3">
              <CircleHelp className="text-secondary" />

              <div>
                <h4 className="font-bold">Trusted by Thousands</h4>

                <p className="text-sm text-default-500">
                  Fast • Secure • Reliable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
