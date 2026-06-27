"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const contacts = [
  {
    id: 1,
    icon: Mail,
    title: "Email Address",
    value: "support@ticketbari.com",
    description: "Feel free to email us anytime.",
    href: "mailto:support@ticketbari.com",
  },
  {
    id: 2,
    icon: Phone,
    title: "Phone Number",
    value: "+880 1700-000000",
    description: "Call us during office hours.",
    href: "tel:+8801700000000",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Office Address",
    value: "Dhaka, Bangladesh",
    description: "Visit our support office.",
    href: "https://maps.google.com",
  },
  {
    id: 4,
    icon: Clock3,
    title: "Working Hours",
    value: "Sat - Thu",
    description: "9:00 AM - 8:00 PM",
  },
];

export default function ContactInfo() {
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
                      Get in Touch
                    </span>
                  </div>
                </div>

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <h2 className="text-4xl font-bold lg:text-5xl">
            Multiple Ways to
            <span className="block bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Reach Our Team
            </span>
          </h2>

          <p className="mt-5 text-lg text-default-500">
            We&apos;re always happy to help. Contact us using any of the
            methods below and we&apos;ll get back to you as soon as possible.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {contacts.map((item) => {
            const Icon = item.icon;

            const CardContent = (
              <div className="group h-full rounded-3xl border border-default-200 bg-content1 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-200/20 via-purple-300/20 to-purple-500/20 transition-colors duration-300 text-primary">
                  <Icon size={30} className="text-purple-500"/>
                </div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 font-medium wrap-break-word">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-6 text-default-500">
                  {item.description}
                </p>

                {item.href && (
                  <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium">
                    Learn More
                    <ArrowUpRight size={18} />
                  </div>
                )}
              </div>
            );

            return item.href ? (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <div key={item.id}>
                {CardContent}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}