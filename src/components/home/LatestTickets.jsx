"use client";

import Image from "next/image";
import { Card, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import TicketCard from "../tickets/TicketCard";

const tickets = [
  {
    id: "l1",
    title: "Dhaka → Sylhet Express Bus",
    price: 950,
    quantity: 42,
    transportType: "AC Bus",
    perks: ["WiFi", "Charging", "Snacks"],
    imageUrl:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "l2",
    title: "Dhaka → Cox's Bazar Night Coach",
    price: 1250,
    quantity: 30,
    transportType: "Luxury Bus",
    perks: ["Recliner Seat", "Blanket", "Water Bottle"],
    imageUrl:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "l3",
    title: "Dhaka → Chattogram Train",
    price: 780,
    quantity: 60,
    transportType: "Train",
    perks: ["Sleeper", "Food"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661953343833-c691a9509d83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "l4",
    title: "Dhaka City Metro Pass",
    price: 100,
    quantity: 200,
    transportType: "Metro Rail",
    perks: ["Fast Travel", "Eco Friendly"],
    imageUrl:
      "https://images.unsplash.com/photo-1704644246328-8ffe8d75885a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "l5",
    title: "Dhaka → Barisal Launch Cabin",
    price: 650,
    quantity: 80,
    transportType: "Launch",
    perks: ["Cabin", "Food Service"],
    imageUrl:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "l6",
    title: "Dhaka → Rajshahi AC Bus",
    price: 900,
    quantity: 55,
    transportType: "AC Bus",
    perks: ["AC", "Comfort Seat"],
    imageUrl:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function LatestTickets() {
  const router = useRouter();
  return (
    <section className="w-full py-12 px-4 md:px-10 bg-background text-foreground">
      <div  className="max-w-7xl mx-auto">

      {/* Heading */}
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Latest Tickets</h2>

        <p className="text-default-500 mt-1">
          Stay updated with the latest ticket listings and travel opportunities.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
      </div>
    </section>
  );
}
