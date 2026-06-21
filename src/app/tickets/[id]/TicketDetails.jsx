"use client";

import Image from "next/image";
import {
  Wifi,
  Snowflake,
  Droplets,
  Plug,
  Armchair,
  Bus,
  Minus,
  Plus,
  Ticket,
  Clock3,
} from "lucide-react";
import { Button } from "@heroui/react";
import { useState } from "react";

export default function TicketDetails() {
  const [quantity, setQuantity] = useState(1);

  const price = 1500;
  const available = 14;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          {/* Image */}
          <div className="relative h-62.5 md:h-100 overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1400"
              alt="Bus"
              fill
              className="object-cover"
            />

            <div className="absolute top-4 right-4 bg-black/70 text-white rounded-xl px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wide">
                <Clock3 size={14} />
                Departure In
              </div>

              <div className="text-2xl font-bold">
                05h 23m 11s
              </div>
            </div>
          </div>

          {/* Details Card */}
          <div className="rounded-2xl border border-default-200 bg-background p-6">
            {/* Top */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Luxury AC Sleeper
                </span>

                <h1 className="text-3xl font-bold mt-3">
                  Dhaka to Cox&aposs Bazar
                </h1>
              </div>

              <div className="text-right">
                <div className="text-success text-5xl font-bold">
                  ৳1,500
                </div>

                <span className="text-default-500 text-sm">
                  per seat
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-dashed border-default-300" />

            {/* Journey */}
            <div className="grid grid-cols-3 items-center">
              {/* Departure */}
              <div>
                <h3 className="text-3xl font-bold">
                  10:30 PM
                </h3>

                <p className="text-default-500 mt-1">
                  12 Oct 2024
                </p>

                <p className="font-semibold mt-2">
                  Dhaka (Kalyanpur)
                </p>
              </div>

              {/* Middle */}
              <div className="flex flex-col items-center">
                <Bus className="text-default-400" size={22} />

                <div className="w-full flex items-center mt-3">
                  <div className="w-3 h-3 rounded-full bg-foreground" />

                  <div className="flex-1 h-0.5 bg-default-300" />

                  <div className="w-3 h-3 rounded-full bg-foreground" />
                </div>

                <p className="text-default-400 text-sm mt-2">
                  9h 30m
                </p>
              </div>

              {/* Arrival */}
              <div className="text-right">
                <h3 className="text-3xl font-bold">
                  08:00 AM
                </h3>

                <p className="text-default-500 mt-1">
                  13 Oct 2024
                </p>

                <p className="font-semibold mt-2">
                  Cox&aposs Bazar
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-dashed border-default-300" />

            {/* Perks */}
            <div>
              <h4 className="text-sm font-bold tracking-widest uppercase text-default-500 mb-4">
                Included Perks
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: Wifi,
                    label: "Free WiFi",
                  },
                  {
                    icon: Snowflake,
                    label: "AC",
                  },
                  {
                    icon: Droplets,
                    label: "Water",
                  },
                  {
                    icon: Plug,
                    label: "Charging Port",
                  },
                  {
                    icon: Armchair,
                    label: "Reclining Seats",
                  },
                ].map((perk) => (
                  <div
                    key={perk.label}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-default-200 bg-content1"
                  >
                    <perk.icon
                      size={18}
                      className="text-success"
                    />

                    <span className="text-sm">
                      {perk.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT BOOKING CARD */}
        <div>
          <div className="sticky top-24 rounded-2xl border border-default-200 bg-background p-5 shadow-sm">
            <h2 className="text-2xl font-bold">
              Book Seats
            </h2>

            <p className="text-default-500 mt-1">
              Select quantity to continue
            </p>

            {/* Quantity */}
            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium">
                  Quantity
                </span>

                <span className="text-default-500">
                  {available} Available
                </span>
              </div>

              <div className="flex items-center justify-between border border-default-300 rounded-xl px-4 py-3">
                <button
                  onClick={() =>
                    setQuantity(Math.max(1, quantity - 1))
                  }
                >
                  <Minus size={18} />
                </button>

                <span className="text-3xl font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() =>
                    setQuantity(
                      Math.min(available, quantity + 1)
                    )
                  }
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Total */}
            <div className="mt-8 rounded-xl bg-default-100 p-4">
              <div className="flex justify-between items-center">
                <span className="text-default-500">
                  Total Price
                </span>

                <span className="text-4xl font-bold">
                  ৳{(price * quantity).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Button */}
            <Button
              size="lg"
              startContent={<Ticket size={18} />}
              className="w-full mt-8 bg-success text-white font-semibold"
            >
              Confirm Booking
            </Button>

            <p className="text-xs text-default-500 text-center mt-5">
              By booking, you agree to our Terms &
              Conditions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}