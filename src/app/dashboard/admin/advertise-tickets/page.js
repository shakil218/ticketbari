import AdvertiseTickets from "@/components/dashboard/admin/AdvertiseTickets";
import { getApprovedTickets } from "@/lib/api/tickets";

const AdvertiseTicketsPage = async () => {
  const tickets = await getApprovedTickets();

  return (
    <AdvertiseTickets tickets={tickets} />
  );
};

export default AdvertiseTicketsPage;