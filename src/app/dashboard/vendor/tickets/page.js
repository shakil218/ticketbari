import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { getVendorTickets } from "@/lib/api/tickets";
import VendorTickets from "@/components/dashboard/VendorTickets"

const VendorTicketsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const tickets = await getVendorTickets(session?.user?.email);

  return (
    <div>
      <VendorTickets totalTickets={tickets}/>
    </div>
  );
};

export default VendorTicketsPage;