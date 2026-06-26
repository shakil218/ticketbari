import { getTicketById } from "@/lib/api/tickets";
import UpdateTicketForm from "@/components/dashboard/vendor/UpdateTicketForm";

export const metadata = {
  title: "Update Ticket | TicketBari Dashboard",
  description: "Update your ticket information from the TicketBari vendor dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

const UpdateTicketPage = async ({ params }) => {
  const { id } = await params;
  const ticket = await getTicketById(id);

  return <UpdateTicketForm ticket={ticket} />;
};

export default UpdateTicketPage;