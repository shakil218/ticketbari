import TicketCard from "../tickets/TicketCard";
import { getAllApprovedTickets } from "@/lib/api/tickets";

export default async function AdvertisementTickets() {
  const tickets = await getAllApprovedTickets();

  const advertiseTickets = tickets.filter(
    (ticket) => ticket.isAdvertised === true
  );

  console.log({"Tickets": tickets}, {"Advertise":advertiseTickets});

  return (
    <section className="w-full py-10 px-4 md:px-10 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Featured <span className="bg-linear-to-r from-violet-600 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Tickets</span>
          </h2>

          <p className="text-default-500 mt-1">
            Promoted deals and exclusive premium services.
          </p>
        </div>

        {advertiseTickets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advertiseTickets.map((ticket) => (
              <TicketCard
                key={ticket._id}
                ticket={ticket}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold">
              No advertised tickets available
            </h3>
            <p className="text-default-500 mt-2">
              Please check back later for featured offers.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}