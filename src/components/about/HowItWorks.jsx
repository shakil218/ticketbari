"use client";

import { Search, Ticket, CreditCard, BusFront } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Search Your Journey",
    description:
      "Enter your departure, destination, transport type, and travel date to discover available tickets that match your journey.",
  },
  {
    id: 2,
    icon: Ticket,
    title: "Choose Your Ticket",
    description:
      "Compare schedules, prices, and available seats to find the perfect ticket for your travel plans.",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Confirm Booking",
    description:
      "Select your seat quantity and complete your booking securely with a smooth and reliable checkout experience.",
  },
  {
    id: 4,
    icon: BusFront,
    title: "Enjoy Your Journey",
    description:
      "Receive your booking confirmation instantly and travel with confidence on your selected transport.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* Badge */}
        <div className="mb-6 flex justify-center lg:justify-start">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm dark:border-gray-700 dark:bg-zinc-900">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-500" />
            </span>

            <span className="text-sm font-semibold tracking-wide text-gray-700 dark:text-gray-200">
              How It Works
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Book Your Ticket in
            <span className="block bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </h2>

          <p className="mt-5 text-lg text-default-500">
            We&apos;ve simplified the booking process so you can spend less
            time searching and more time enjoying your journey.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-3xl border border-default-200 bg-content1 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="absolute right-6 top-6 text-5xl font-black text-default-100">
                  0{step.id}
                </div>

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-200/20 via-purple-300/20 to-purple-500/20 transition-colors duration-300 text-primary">
                  <Icon size={30} className="text-purple-500"/>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-default-500">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-full top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-default-300 lg:block" />
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}