import AddTicketForm from "@/components/dashboard/vendor/AddTicketForm";

export const metadata = {
  title: "Add Ticket | TicketBari Dashboard",
  description: "Create and publish a new ticket from the TicketBari vendor dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AddTicketPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <AddTicketForm />
    </div>
  );
}