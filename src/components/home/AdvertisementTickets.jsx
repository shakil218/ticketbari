"use client";

import { useRouter } from "next/navigation";
import TicketCard from "../tickets/TicketCard";

const tickets = [
  {
    id: "t1",
    title: "Dhaka to Cox's Bazar Bus",
    price: 1200,
    quantity: 35,
    transportType: "AC Bus",
    perks: ["WiFi", "Snacks", "Charging Port"],
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: "t2",
    title: "Dhaka to Chattogram Train",
    price: 850,
    quantity: 50,
    transportType: "Train",
    perks: ["Sleeper Seat", "Food Included"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661953343833-c691a9509d83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "t3",
    title: "Dhaka City Air-conditioned Bus",
    price: 150,
    quantity: 80,
    transportType: "City Bus",
    perks: ["AC", "Fast Route"],
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
  },
  {
    id: "t4",
    title: "Dhaka to Sylhet Luxury Bus",
    price: 1300,
    quantity: 20,
    transportType: "Luxury Bus",
    perks: ["Recliner Seat", "Blanket", "Snacks"],
    imageUrl:
      "https://images.unsplash.com/photo-1669360109634-8386c704a506?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "t5",
    title: "Launch Ticket Dhaka to Barisal",
    price: 600,
    quantity: 100,
    transportType: "Launch",
    perks: ["Cabin", "Food Service"],
    imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
  {
    id: "t6",
    title: "Dhaka Metro Rail Pass",
    price: 100,
    quantity: 200,
    transportType: "Metro Rail",
    perks: ["Fast Travel", "Eco Friendly"],
    imageUrl:
      "https://images.unsplash.com/photo-1704644246328-8ffe8d75885a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function AdvertisementTickets() {
  const router = useRouter();
  return (
    <section className="w-full py-10 px-4 md:px-10 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        
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
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
      </div>
    </section>
  );
}
