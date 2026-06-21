"use client";

import { useMemo, useState } from "react";
import SearchBox from "./SearchBox";
import TicketCard from "./TicketCard";

export default function AllTicketsClient({ tickets }) {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    transport: "",
    sort: "",
  });

  // 🔥 LIVE FILTER ENGINE
  const filteredTickets = useMemo(() => {
    let result = [...tickets];

    // 🔎 From filter (partial match)
    if (filters.from) {
      result = result.filter((t) =>
        t.from?.toLowerCase().includes(filters.from.toLowerCase()),
      );
    }

    // 🔎 To filter (partial match)
    if (filters.to) {
      result = result.filter((t) =>
        t.to?.toLowerCase().includes(filters.to.toLowerCase()),
      );
    }

    // 🚍 Transport filter
    if (filters.transport) {
      result = result.filter((t) => t.transportType === filters.transport);
    }

    // 💰 Sort by price
    if (filters.sort === "low-high") {
      result.sort((a, b) => a.price - b.price);
    }

    if (filters.sort === "high-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [tickets, filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Search */}
      <SearchBox setFilters={setFilters} />

      {/* Header with total tickets */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        {/* Left Side */}
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            All Available Tickets
          </h1>

          <p className="text-sm text-default-500">
            Browse and book your next journey easily
          </p>
        </div>

        {/* Right Side - Total Count */}
        <div className="rounded-xl border border-divider bg-background/60 px-4 py-2 text-center backdrop-blur-md">
          <p className="text-sm text-default-500 mt-3">
            Showing{" "}
            <span className="font-bold text-primary">
              {filteredTickets.length}
            </span>{" "}
            results out of <span className="font-bold">{tickets.length}</span>{" "}
            tickets
            {filters.sort && (
              <span className="ml-2 text-xs text-default-500">
                (sorted by{" "}
                {filters.sort === "low-high" ? "low → high" : "high → low"})
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <TicketCard key={ticket._id} ticket={ticket} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No tickets found
          </p>
        )}
      </div>
    </div>
  );
}
