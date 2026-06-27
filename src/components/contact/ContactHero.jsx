"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Headset } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden py-16">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 text-center">

        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm dark:border-gray-700 dark:bg-zinc-900">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
            </span>

            <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200">
              Contact Us
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-black leading-tight lg:text-6xl">
          We&apos;d Love to
          <span className="block bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Hear From You
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-default-500">
          Whether you have questions about bookings, need travel assistance,
          or want to share feedback, our support team is here to help every
          step of your journey.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <Link href="/tickets">
            <Button
              size="lg"
              className="bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white"
            >
              Explore Tickets
            </Button>
          </Link>

          <Button
            size="lg"
            variant="outline"
          >
            <Headset size={18} />
            Contact Support
          </Button>

        </div>

      </div>
    </section>
  );
}