import TicketCard from "../tickets/TicketCard";
import { getApprovedTickets } from "@/lib/api/tickets";

export default async function LatestTickets() {
  const tickets = await getApprovedTickets();

  // Show only approved & visible tickets
  const latestTickets = tickets
    .filter(
      (ticket) =>
        ticket.status === "approved" && !ticket.isHidden
    )
    .sort(
      (a, b) =>
        new Date(b.updatedAt) - new Date(a.updatedAt)
    )
    .slice(0, 6);

  return (
    <section className="w-full py-12 px-4 md:px-10 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Latest Tickets
          </h2>

          <p className="text-default-500 mt-1 text-center">
            Stay updated with the latest ticket listings and travel
            opportunities.
          </p>
        </div>

        {latestTickets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestTickets.map((ticket) => (
              <TicketCard
                key={ticket._id}
                ticket={ticket}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-20">
            <p className="text-default-500 text-lg">
              No latest tickets available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}