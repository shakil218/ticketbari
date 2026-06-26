"use client";

import SearchBox from "./SearchBox";
import TicketCard from "./TicketCard";
import Pagination from "./Pagination";

export default function AllTicketsClient({
  tickets,
  totalTickets,
  currentPage,
  totalPages,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Search */}
      <SearchBox />

      {/* Header */}
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            All Available Tickets
          </h1>

          <p className="text-sm text-default-500">
            Browse and book your next journey easily
          </p>
        </div>

        <div className="rounded-xl border border-divider bg-background/60 px-4 py-3 backdrop-blur-md">
          <p className="text-sm text-default-500">
            Showing{" "}
            <span className="font-bold text-primary">
              {tickets.length}
            </span>{" "}
            of{" "}
            <span className="font-bold">
              {totalTickets}
            </span>{" "}
            tickets
          </p>
        </div>
      </div>

      {/* Ticket Grid */}
      {tickets.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket._id}
                ticket={ticket}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <div className="flex h-72 items-center justify-center rounded-2xl border border-dashed">
          <div className="text-center">
            <h3 className="text-xl font-semibold">
              No Tickets Found
            </h3>

            <p className="mt-2 text-default-500">
              Try changing your search filters.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}