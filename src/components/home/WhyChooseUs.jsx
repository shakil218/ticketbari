"use client";

import { Card } from "@heroui/react";
import {
  Rocket,
  ShieldCheck,
  BadgeCheck,
  RefreshCcw,
  Tag,
  Headset,
} from "lucide-react";

const features = [
  {
    title: "Fast Booking",
    desc: "Book tickets in just a few clicks without hassle.",
    icon: Rocket,
  },
  {
    title: "Secure Payments",
    desc: "All transactions are encrypted and fully secure.",
    icon: ShieldCheck,
  },
  {
    title: "Verified Vendors",
    desc: "Only approved and trusted vendors are allowed.",
    icon: BadgeCheck,
  },
  {
    title: "24/7 Support",
    desc: "Our support team is always ready to help you.",
    icon: Headset,
  },
  {
    title: "Easy Refund",
    desc: "Simple and fast refund process for cancellations.",
    icon: RefreshCcw,
  },
  {
    title: "Best Prices",
    desc: "Get the most affordable ticket prices available.",
    icon: Tag,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-12 px-4 md:px-10 bg-background text-foreground">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Why Choose TicketBari?
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <Card
              key={index}
              className="p-6 border border-divider bg-background hover:shadow-xl transition rounded-xl"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 border border-divider rounded-full bg-primary-100 text-primary-600 mb-4 dark:bg-primary-900 dark:text-primary-200">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-default-500">
                {item.desc}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}