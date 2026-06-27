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
    // Soft red for light theme, deep translucent red for dark theme
    iconBg: "bg-danger-50 text-danger-600 dark:bg-danger-900/20 dark:text-danger-400",
  },
  {
    title: "Secure Payments",
    desc: "All transactions are encrypted and fully secure.",
    icon: ShieldCheck,
    // Soft green (matches your reference image)
    iconBg: "bg-success-50 text-success-600 dark:bg-success-900/20 dark:text-success-400",
  },
  {
    title: "Verified Vendors",
    desc: "Only approved and trusted vendors are allowed.",
    icon: BadgeCheck,
    // Soft yellow/amber
    iconBg: "bg-warning-50 text-warning-600 dark:bg-warning-900/20 dark:text-warning-400",
  },
  {
    title: "24/7 Support",
    desc: "Our support team is always ready to help you.",
    icon: Headset,
    // Soft blue
    iconBg: "bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400",
  },
  {
    title: "Easy Refund",
    desc: "Simple and fast refund process for cancellations.",
    icon: RefreshCcw,
    // Soft purple
    iconBg: "bg-secondary-50 text-secondary-600 dark:bg-secondary-900/20 dark:text-secondary-400",
  },
  {
    title: "Best Prices",
    desc: "Get the most affordable ticket prices available.",
    icon: Tag,
    // Neutral grey
    iconBg: "bg-default-100 text-default-600 dark:bg-default-800 dark:text-default-400",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-foreground">
            Why Choose <span className="bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">TicketBari?</span>
          </h2>
          <p className="text-lg text-default-500 dark:text-default-400 max-w-xl">
            Experience hassle-free booking with our premium support, trusted partners, and unbeatable guarantees.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={index}
                className="p-8 border border-divider/60 bg-content1 shadow-sm hover:shadow-md dark:hover:shadow-neutral-950/50 transition-all duration-300 rounded-3xl text-center flex flex-col items-center h-full"
              >
                {/* Icon Container with dynamic theme styles */}
                <div className={`flex items-center justify-center w-14 h-14 border  rounded-full bg-linear-to-r from-violet-200/20 via-purple-300/20 to-purple-500/20 transition-colors duration-300 ${item.iconBg}`}>
                  <Icon className="w-7 h-7 text-purple-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold  tracking-tight text-foreground">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base text-default-500 dark:text-default-400 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}