"use client";

import { Card, Button } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MapPin, Bus, Users, Train, Plane, Ship } from "lucide-react";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const router = useRouter();

  const getTransportIcon = (type) => {
    switch (type?.toLowerCase()) {
      case "bus":
        return <Bus size={14} />;
      case "train":
        return <Train size={14} />;
      case "flight":
        return <Plane size={14} />;
      case "launch":
        return <Ship size={14} />;
      default:
        return <Bus size={14} />;
    }
  };

  return (
    <Card className="group overflow-hidden rounded-2xl border border-divider bg-background shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image Section */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={ticket.imageUrl}
          alt={ticket.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Price Badge */}
        <div className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-sm font-bold text-white backdrop-blur-md">
          ৳ {ticket.price}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground line-clamp-1">
          {ticket.title}
        </h3>

        {/* Route Section (NEW UI UPGRADE) */}
        <div className="flex items-center justify-between rounded-xl bg-default-100 px-3 py-2 text-sm dark:bg-default-50/10">
          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-green-500" />
            <span className="font-medium">{ticket.from}</span>
          </div>

          <span className="text-xs text-gray-400">→</span>

          <div className="flex items-center gap-1">
            <MapPin size={14} className="text-red-500" />
            <span className="font-medium">{ticket.to}</span>
          </div>
        </div>

        {/* Transport + Quantity */}
        <div className="flex items-center justify-between text-sm text-default-500">
          <div className="flex items-center gap-1">
            {getTransportIcon(ticket.transportType)}
            <span>{ticket.transportType}</span>
          </div>

          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{ticket.quantity} seats</span>
          </div>
        </div>

        {/* Perks */}
        <div className="flex flex-wrap gap-2">
          {ticket.perks?.map((perk, i) => (
            <span
              key={i}
              className="rounded-full bg-primary-100 px-2 py-1 text-xs text-primary-600 dark:bg-primary-900/40 dark:text-primary-200"
            >
              {perk}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
        href={`/tickets/${ticket._id}`}
          className="mt-2 w-full px-3 py-2 text-center rounded-xl bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 font-medium text-white transition hover:opacity-90 block"
          
        >
          View Details
        </Link>
      </div>
    </Card>
  );
};

export default TicketCard;
