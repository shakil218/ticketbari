import AdvertiseTickets from "@/components/dashboard/admin/AdvertiseTickets";
import { getAllApprovedTickets } from "@/lib/api/tickets";

export const metadata = {
  title: "Advertise Tickets | TicketBari Dashboard",
  description: "Manage and advertise approved tickets from the TicketBari admin dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

const AdvertiseTicketsPage = async () => {
  const tickets = await getAllApprovedTickets();

  return (
    <AdvertiseTickets tickets={tickets} />
  );
};

export default AdvertiseTicketsPage;