"use client";

import Image from "next/image";
import { Bus, Minus, Plus, Ticket, Clock3 } from "lucide-react";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { submitTicketBooking } from "@/lib/actions/bookings";

export default function TicketDetails({ passenger, ticket }) {
  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const price = ticket?.price || 0;
  const available = ticket?.quantity || 0;

  const isDeparturePassed =
    ticket?.departureTime &&
    new Date(ticket.departureTime).getTime() <= Date.now();

  const isBookingDisabled = isDeparturePassed || available === 0;

  // =========================
  // LIVE COUNTDOWN TIMER
  // =========================
  useEffect(() => {
    if (!ticket?.departureTime) return;

    const target = new Date(ticket.departureTime).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("Departed");
        clearInterval(interval);
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const formatted =
        (days > 0 ? `${days}d ` : "") +
        `${hours.toString().padStart(2, "0")}h ` +
        `${minutes.toString().padStart(2, "0")}m ` +
        `${seconds.toString().padStart(2, "0")}s`;

      setTimeLeft(formatted);
    }, 1000);

    return () => clearInterval(interval);
  }, [ticket?.departureTime]);

  const handleBooking = async () => {
    const bookingTicketInfo = {
      ticketId : ticket?._id,
      ticketTitle: ticket?.title,
      imageUrl: ticket?.imageUrl,
      departureFrom: ticket?.from,
      arrivalPoint: ticket?.to,
      departureDate: ticket?.departureTime,
      bookingQuantity: quantity,
      totalPrice: price * quantity,
      passengerName: passenger?.name,
      passengerEmail: passenger?.email,
      status: "pending",
    }
    try {
      setLoading(true);
      const res = await submitTicketBooking(bookingTicketInfo);

      if (res?.insertedId) {
        toast.success("Ticket booked successfully!");
        router.push("/dashboard/user/my-bookings");
      } else {
      toast.error("Failed to book the ticket.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* IMAGE */}
          <div className="relative h-65 md:h-100 overflow-hidden rounded-2xl">
            <Image
              src={ticket?.imageUrl}
              alt={ticket?.title}
              fill
              className="object-cover"
            />

            {/* COUNTDOWN */}
            <div className="absolute top-4 right-4 bg-black/70 text-white rounded-xl px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wide">
                <Clock3 size={14} />
                Departure In
              </div>

              <div className="text-2xl font-bold">{timeLeft}</div>
            </div>
          </div>

          {/* DETAILS */}
          <div className="rounded-2xl border border-default-200 bg-background p-6">
            {/* HEADER */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {ticket?.transportType}
                </span>

                <h1 className="text-3xl font-bold mt-3">{ticket?.title}</h1>

                {/* BADGES */}
                <div className="mt-3 flex gap-2 flex-wrap">
                  <span className="rounded-full bg-success/10 px-3 py-1 text-xs text-success">
                    {available} Seats
                  </span>

                  <span className="rounded-full bg-warning/10 px-3 py-1 text-xs text-warning">
                    {ticket?.status}
                  </span>
                </div>
              </div>

              {/* PRICE */}
              <div className="text-right">
                <div className="text-success text-4xl font-bold">
                  ৳{price.toLocaleString()}
                </div>
                <span className="text-default-500 text-sm">per seat</span>
              </div>
            </div>

            <div className="my-6 border-t border-dashed border-default-300" />

            {/* JOURNEY */}
            <div className="grid grid-cols-3 items-center">
              {/* FROM */}
              <div>
                <h3 className="text-xl font-bold">{ticket?.from}</h3>

                <p className="text-default-500 text-sm mt-1">Departure</p>

                {/* NEW: Departure Time */}
                <p className="text-xs text-primary font-medium mt-2">
                  {ticket?.departureTime
                    ? new Date(ticket.departureTime).toLocaleTimeString(
                        "en-BD",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )
                    : ""}
                </p>
              </div>

              {/* MIDDLE */}
              <div className="flex flex-col items-center">
                <Bus className="text-default-400" size={22} />

                <div className="w-full flex items-center mt-3">
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                  <div className="flex-1 h-0.5 bg-default-300" />
                  <div className="w-3 h-3 rounded-full bg-foreground" />
                </div>

                <p className="text-default-400 text-sm mt-2">
                  {ticket?.transportType}
                </p>
              </div>

              {/* TO */}
              <div className="text-right">
                <h3 className="text-xl font-bold">{ticket?.to}</h3>

                <p className="text-default-500 text-sm mt-1">Destination</p>

                {/* OPTIONAL: arrival time or label */}
                <p className="text-xs text-default-400 mt-2">Arrival Point</p>
              </div>
            </div>

            <div className="my-6 border-t border-dashed border-default-300" />

            {/* PERKS */}
            <div>
              <h4 className="text-sm font-bold uppercase text-default-500 mb-4">
                Included Perks
              </h4>

              <div className="flex flex-wrap gap-3">
                {ticket?.perks?.map((perk) => (
                  <div
                    key={perk}
                    className="px-4 py-2 rounded-xl border border-default-200 bg-content1 text-sm"
                  >
                    {perk}
                  </div>
                ))}
              </div>
            </div>

            {/* VENDOR */}
            <div className="mt-6 text-sm border border-default-200 rounded-xl p-4">
              <p>
                <span className="font-semibold">Vendor:</span>{" "}
                {ticket?.vendorName}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {ticket?.vendorEmail}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="sticky top-24 rounded-2xl border border-default-200 bg-background p-5 shadow-sm">
            <h2 className="text-2xl font-bold">Book Seats</h2>

            <p className="text-default-500 mt-1">Select quantity</p>

            {/* QUANTITY */}
            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Quantity</span>
                <span className="text-default-500">{available} Available</span>
              </div>

              <div className="flex items-center justify-between border rounded-xl px-4 py-3">
                <button
                  disabled={isBookingDisabled}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Minus size={18} />
                </button>

                <span className="text-2xl font-bold">{quantity}</span>

                <button
                  disabled={isBookingDisabled}
                  onClick={() => setQuantity(Math.min(available, quantity + 1))}
                  className="disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* TOTAL */}
            <div className="mt-8 rounded-xl bg-default-100 p-4">
              <div className="flex justify-between items-center">
                <span className="text-default-500">Total Price</span>

                <span className="text-3xl font-bold">
                  ৳{(price * quantity).toLocaleString()}
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <Button
              size="lg"
              isDisabled={isBookingDisabled || loading}
              isLoading={loading}
              onClick={handleBooking}
              className="w-full mt-8 rounded-lg bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white font-semibold disabled:opacity-40"
            >
              <Ticket size={18} />
              {available === 0
                ? "Sold Out"
                : isDeparturePassed
                  ? "Departure Closed"
                  : "Book Now"}
            </Button>

            {available === 0 ? (
              <p className="mt-3 text-center text-sm text-danger">
                No seats available for this ticket.
              </p>
            ) : isDeparturePassed && available > 0 ? (
              <p className="mt-3 text-center text-sm text-warning">
                Booking is closed because the departure time has passed.
              </p>
            ) : (
              <p className="text-xs text-default-500 text-center mt-5">
                By booking you agree to terms
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
