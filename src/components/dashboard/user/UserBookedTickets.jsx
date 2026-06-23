// components/dashboard/MyBookedTickets.jsx
"use client";

import { Card, Button, Chip } from "@heroui/react";

export default function UserBookedTickets({ bookings = [] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Booked Tickets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((ticket) => (
          <Card key={ticket.id} className="p-4 shadow-sm">

            {/* Image */}
            <img
              src={ticket.imageUrl}
              className="w-full h-40 object-cover rounded-lg"
              alt="ticket"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold mt-3">
              {ticket.ticketTitle}
            </h3>

            {/* Route */}
            <p className="text-sm text-gray-500">
              {ticket.departureFrom} → {ticket.arrivalPoint}
            </p>

            {/* Quantity + Price */}
            <div className="flex justify-between mt-2 text-sm">
              <span>Qty: {ticket.bookingQuantity}</span>
              <span className="font-semibold">
                ${ticket.totalPrice}
              </span>
            </div>

            {/* Date */}
            <p className="text-xs text-gray-500 mt-1">
              Departure: {ticket.departureDate}
            </p>

            {/* Status */}
            <Chip
              className="mt-3"
              variant="soft"
              color={
                ticket.status === "pending"
                  ? "accent"
                  : ticket.status === "rejected"
                  ? "danger"
                  : ticket.status === "accepted"
                  ? "success"
                  : "warning"
              }
            >
              {ticket.status}
            </Chip>

            {/* Countdown UI placeholder */}
            {ticket.status !== "rejected" && (
              <div className="mt-3 text-xs text-gray-500">
                ⏳ Countdown: 02h 14m 32s
              </div>
            )}

            {/* Pay Button */}
            {ticket.status === "accepted" && (
              <Button
                className="w-full mt-4 bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white"
              >
                Pay Now
              </Button>
            )}

          </Card>
        ))}
      </div>
    </div>
  );
}