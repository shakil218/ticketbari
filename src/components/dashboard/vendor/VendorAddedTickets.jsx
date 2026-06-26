
"use client";
import React, { useState } from "react";
import { Card, Button, Chip } from "@heroui/react";
import {
  MapPin,
  Calendar,
  DollarSign,
  Layers,
  Pencil,
  Trash2,
  Bus,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { deleteTicket } from "@/lib/actions/tickets";

export default function VendorAddedTickets({ totalTickets }) {
  const [tickets, setTickets] = useState(totalTickets);

  const handleDelete = async (ticketId) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this ticket?",
    );

    if (!confirmed) return;

    try {
      const result = await deleteTicket(ticketId);

      if (result.deletedCount > 0) {
        setTickets((prev) => prev.filter((ticket) => ticket._id !== ticketId));

        toast.success("Ticket deleted successfully.");
      } else {
        toast.error("Failed to delete ticket.");
      }
    } catch (error) {
  console.error("DELETE ERROR:", error);

  toast.error(error?.message || "Something went wrong.");
}
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case "approved":
        return { color: "success", text: "Approved" };
      case "rejected":
        return { color: "danger", text: "Rejected" };
      default:
        return { color: "warning", text: "Pending" };
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Block Layout */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            My Added Tickets
          </h1>
          <p className="text-sm text-default-500 mt-1">
            View, modify, and track validation reviews for your uploaded route
            listings.
          </p>
        </div>

        {tickets.length === 0 ? (
          <Card className="p-12 text-center border border-dashed border-divider flex flex-col items-center justify-center">
            <AlertCircle className="w-12 h-12 text-default-300 mb-3" />
            <p className="text-base font-medium text-default-700">
              No Tickets Created Yet
            </p>
            <Link
              href="/dashboard/vendor/add-ticket"
              className="bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white rounded-xl px-3 py-2 mt-4"
            >
              Create Your First Ticket
            </Link>
          </Card>
        ) : (
          /* 3-COLUMN RESPONSIVE LAYOUT GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => {
              const statusConfig = getStatusConfig(ticket.status);
              const isRejected = ticket.status === "rejected";

              return (
                <Card
                  key={ticket._id}
                  className="overflow-hidden border border-divider shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full bg-content1 rounded-2xl"
                >
                  <div>
                    {/* Media Header Container Layout */}
                    <div className="relative w-full h-44 bg-default-100">
                      {ticket.imageUrl ? (
                        <Image
                          src={ticket.imageUrl}
                          alt={ticket.title}
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-default-400">
                          <Bus className="w-10 h-10 mb-1" />
                          <span className="text-xs uppercase tracking-wider font-semibold">
                            No Preview Cover
                          </span>
                        </div>
                      )}

                      {/* Floating Verification Badge Status */}
                      <div className="absolute top-3 right-3 z-10">
                        <Chip
                          size="sm"
                          color={statusConfig.color}
                          variant="flat"
                          className="font-bold uppercase tracking-wider text-[10px] px-2.5"
                        >
                          {statusConfig.text}
                        </Chip>
                      </div>
                    </div>

                    {/* Meta Body Info Details */}
                    <div className="p-5 space-y-4">
                      <div>
                        <h3 className="font-bold text-slate-800 dark:text-white line-clamp-1 text-lg mb-1">
                          {ticket.title}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-default-100 text-default-600 border border-default-200">
                          {ticket.transportType}
                        </span>
                      </div>

                      {/* Router Map Destinations Panel */}
                      <div className="space-y-2 text-sm text-default-600 dark:text-default-300 relative pl-4">
                        <div className="absolute left-0 top-2 bottom-2 w-0.5 border-l border-dashed border-default-300"></div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-default-400 shrink-0" />
                          <span className="truncate">
                            From: <strong>{ticket.from}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-success shrink-0" />
                          <span className="truncate">
                            To: <strong>{ticket.to}</strong>
                          </span>
                        </div>
                      </div>

                      {/* Dynamic database perks mapping */}
                      {ticket.perks && ticket.perks.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {ticket.perks.map((perk, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-default-50 text-default-500 border border-default-200 px-1.5 py-0.5 rounded flex items-center gap-0.5 font-medium"
                            >
                              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                              {perk}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Departure Calendar Metric UI */}
                      <div className="text-xs text-default-400 pt-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {new Date(ticket.departureTime).toLocaleString([], {
                            dateStyle: "medium",
                            timeStyle: "short",
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Layout Action Base Panel */}
                  <div className="border-t border-divider p-4 bg-default-50/50 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-default-500 text-xs gap-1">
                        <Layers className="w-3.5 h-3.5" />
                        <span>
                          Available Units:{" "}
                          <strong className="text-default-800 dark:text-default-200">
                            {ticket.quantity}
                          </strong>
                        </span>
                      </div>
                      <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-extrabold text-lg">
                        <DollarSign className="w-4 h-4 -mr-0.5" />
                        <span>
                          {ticket.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Operational Layout Modifiers / Buttons */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <Link
                        href={`/dashboard/vendor/my-added-tickets/update/${ticket._id}`}
                        size="sm"
                        variant="bordered"
                        className="rounded-xl font-medium border-default-300 hover:bg-default-100 flex items-center justify-center gap-1.5"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                        Update
                      </Link>

                      <Button
                        size="sm"
                        color="danger"
                        variant="flat"
                        isDisabled={isRejected}
                        onClick={() => handleDelete(ticket._id)}
                        className="rounded-xl font-medium flex items-center justify-center gap-1.5"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
