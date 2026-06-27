"use client";

import { Users, Route, ShieldCheck, Building2 } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "10K+",
    title: "Happy Travelers",
    description: "Thousands of users trust TicketBari for their journeys.",
  },
  {
    id: 2,
    icon: Route,
    value: "500+",
    title: "Routes Available",
    description: "Travel across cities with multiple transport options.",
  },
  {
    id: 3,
    icon: Building2,
    value: "50+",
    title: "Transport Partners",
    description: "Working with trusted transport providers.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    value: "99%",
    title: "Secure Booking",
    description: "Safe and reliable booking experience for every traveler.",
  },
];

export default function PlatformStatistics() {
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
              Platform Statistics
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-bold lg:text-5xl">
            Trusted by Travelers,
            <span className="block bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Building Better Journeys
            </span>
          </h2>

          <p className="mt-5 text-lg text-default-500">
            Our growing platform connects travelers with reliable transport
            services while making every booking simple, secure, and convenient.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="group rounded-3xl border border-default-200 bg-content1 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-200/20 via-purple-300/20 to-purple-500/20 transition duration-300 text-primary group-hover:scale-110">
                  <Icon size={30} className="text-purple-500" />
                </div>

                <h3 className="text-4xl font-black">{stat.value}</h3>

                <h4 className="mt-2 text-lg font-semibold">{stat.title}</h4>

                <p className="mt-3 text-sm leading-6 text-default-500">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
