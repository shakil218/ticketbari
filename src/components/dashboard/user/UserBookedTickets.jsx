"use client";

import { useEffect, useState } from "react";
import { Card, Button, Chip } from "@heroui/react";


export default function UserBookedTickets({ passenger, bookings = [] }) {
  const [timeLeftMap, setTimeLeftMap] = useState({});
  const [isExpiredMap, setIsExpiredMap] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = {};
      const expiredMap = {};

      bookings.forEach((ticket) => {
        const difference =
          new Date(ticket.departureDate).getTime() - Date.now();

        // ❌ Expired
        if (difference <= 0) {
          updatedTime[ticket._id] = "Expired";
          expiredMap[ticket._id] = true;
          return;
        }

        // ✅ Not expired
        expiredMap[ticket._id] = false;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        updatedTime[ticket._id] = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      });

      setTimeLeftMap(updatedTime);
      setIsExpiredMap(expiredMap);
    }, 1000);

    return () => clearInterval(interval);
  }, [bookings]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Booked Tickets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((ticket) => {
          const isExpired = isExpiredMap[ticket._id];

          return (
            <Card key={ticket._id} className="p-4 shadow-sm">
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

              {/* Qty + Price */}
              <div className="flex justify-between mt-2 text-sm">
                <span>Qty: {ticket.bookingQuantity}</span>
                <span className="font-semibold">৳{ticket.totalPrice}</span>
              </div>

              {/* Date */}
              <p className="text-xs text-gray-500 mt-1">
                Departure: {new Date(ticket.departureDate).toLocaleString()}
              </p>

              {/* Status */}
              <Chip
                className="mt-3"
                variant="soft"
                color={
                  ticket.status === "pending"
                    ? "warning"
                    : ticket.status === "rejected"
                      ? "danger"
                      : ticket.status === "accepted"
                        ? "success"
                        : "default"
                }
              >
                {ticket.status}
              </Chip>

              {/* Countdown */}
              {ticket.status !== "rejected" && (
                <div className="mt-3 text-xs text-gray-500">
                  ⏳ Countdown: {timeLeftMap[ticket._id] || "Loading..."}
                </div>
              )}

              {/* Pay Button (BLOCK if expired) */}
              {ticket.status === "accepted" && (
                <form action="/api/checkout_sessions" method="POST">
                  {/* Pass the dynamic ticket data into hidden inputs */}
                  <input
                    type="hidden"
                    name="ticketId"
                    value={ticket?.ticketId}
                  />
                  <input
                    type="hidden"
                    name="bookingId"
                    value={ticket?._id}
                  />
                  <input
                    type="hidden"
                    name="ticketTitle"
                    value={ticket?.ticketTitle}
                  />
                  <input
                    type="hidden"
                    name="imageUrl"
                    value={ticket?.imageUrl}
                  />
                  <input type="hidden" name="totalPrice" value={ticket?.totalPrice} />
                  <input type="hidden" name="quantity" value={ticket?.bookingQuantity} />
                  <input
                    type="hidden"
                    name="passengerEmail"
                    value={passenger?.email}
                  />
                  <section>
                    <Button
                      disabled={isExpired}
                      type="submit"
                      role="link"
                      className={`w-full mt-4 text-white ${
                        isExpired
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500"
                      }`}
                    >
                      {isExpired ? "Payment Expired" : "Pay Now"}
                    </Button>
                  </section>
                </form>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
