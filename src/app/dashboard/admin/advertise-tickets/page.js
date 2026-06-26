import AdvertiseTickets from "@/components/dashboard/admin/AdvertiseTickets";
import { getAllApprovedTickets } from "@/lib/api/tickets";

const AdvertiseTicketsPage = async () => {
  const tickets = await getAllApprovedTickets();

  return (
    <AdvertiseTickets tickets={tickets} />
  );
};

export default AdvertiseTicketsPage;