"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Card, CardBody } from "@heroui/react";

export default function AdvertisementTickets() {
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

  return (
    <section className="w-full py-10 px-4 md:px-10 bg-gray-50 dark:bg-black">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Featured Tickets
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            className="rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            {/* Image */}
            <div className="relative w-full h-40">
              <Image
                src={ticket.image}
                alt={ticket.title}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>

            <div className="space-y-2">
              {/* Title */}
              <h3 className="text-lg font-semibold">{ticket.title}</h3>

              {/* Info */}
              <p className="text-sm text-gray-500">
                Transport:{" "}
                <span className="font-medium">{ticket.transport}</span>
              </p>

              <p className="text-sm text-gray-500">
                Price:{" "}
                <span className="font-semibold text-green-600">
                  ${ticket.price}
                </span>
              </p>

              <p className="text-sm text-gray-500">
                Available: {ticket.quantity} tickets
              </p>

              {/* Perks */}
              <div className="flex flex-wrap gap-2 mt-2">
                {ticket.perks.map((perk, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                  >
                    {perk}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Button
                className="w-full mt-3"
                color="primary"
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
