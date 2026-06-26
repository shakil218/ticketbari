import { getUserSession } from "@/lib/core/session";
import { getVendorTickets } from "@/lib/api/tickets";
import VendorAddedTickets from "@/components/dashboard/vendor/VendorAddedTickets";

export const metadata = {
  title: "My Tickets | TicketBari Dashboard",
  description: "View and manage the tickets you have added to TicketBari.",
  robots: {
    index: false,
    follow: false,
  },
};

const VendorTicketsPage = async () => {
  const user = await getUserSession();

  const tickets = await getVendorTickets(user?.email);

  return (
    <div>
      <VendorAddedTickets totalTickets={tickets}/>
    </div>
  );
};

export default VendorTicketsPage;