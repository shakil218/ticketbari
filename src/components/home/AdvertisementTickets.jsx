"use client";

import Image from "next/image";
import { Card, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const tickets = [
  {
    id: "t1",
    title: "Dhaka to Cox's Bazar Bus",
    price: 1200,
    quantity: 35,
    transport: "AC Bus",
    perks: ["WiFi", "Snacks", "Charging Port"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: "t2",
    title: "Dhaka to Chattogram Train",
    price: 850,
    quantity: 50,
    transport: "Train",
    perks: ["Sleeper Seat", "Food Included"],
    image:
      "https://plus.unsplash.com/premium_photo-1661953343833-c691a9509d83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "t3",
    title: "Dhaka City Air-conditioned Bus",
    price: 150,
    quantity: 80,
    transport: "City Bus",
    perks: ["AC", "Fast Route"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
  {
    id: "t4",
    title: "Dhaka to Sylhet Luxury Bus",
    price: 1300,
    quantity: 20,
    transport: "Luxury Bus",
    perks: ["Recliner Seat", "Blanket", "Snacks"],
    image:
      "https://images.unsplash.com/photo-1669360109634-8386c704a506?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "t5",
    title: "Launch Ticket Dhaka to Barisal",
    price: 600,
    quantity: 100,
    transport: "Launch",
    perks: ["Cabin", "Food Service"],
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
  {
    id: "t6",
    title: "Dhaka Metro Rail Pass",
    price: 100,
    quantity: 200,
    transport: "Metro Rail",
    perks: ["Fast Travel", "Eco Friendly"],
    image:
      "https://images.unsplash.com/photo-1704644246328-8ffe8d75885a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AdvertisementTickets() {
  const router = useRouter();
  return (
    <section className="w-full py-10 px-4 md:px-10 bg-background text-foreground">
      {/* Title */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Featured Tickets
        </h2>

        <p className="text-default-500 mt-1">
          Promoted deals and exclusive premium services.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            className="overflow-hidden rounded-xl border border-divider shadow-md hover:shadow-xl transition-all bg-background"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={ticket.image}
                alt={ticket.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground">
                {ticket.title}
              </h3>

              {/* Transport */}
              <p className="text-sm text-default-500">
                Transport:{" "}
                <span className="font-medium text-foreground">
                  {ticket.transport}
                </span>
              </p>

              {/* Price */}
              <p className="text-sm text-default-500">
                Price:{" "}
                <span className="font-semibold text-success">
                  ${ticket.price}
                </span>
              </p>

              {/* Quantity */}
              <p className="text-sm text-default-500">
                Available: {ticket.quantity} tickets
              </p>

              {/* Perks */}
              <div className="flex flex-wrap gap-2 mt-2">
                {ticket.perks.map((perk, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-200"
                  >
                    {perk}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Button
                className="w-full mt-3 bg-linear-to-r from-violet-200 via-purple-300 to-purple-500 text-black hover:opacity-90"
                onPress={() => router.push(`/tickets/${ticket.id}`)}
              >
                See Details
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
