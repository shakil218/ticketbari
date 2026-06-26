import RequestedTicketsBookings from "@/components/dashboard/vendor/RequestedTicketsBookings";
import { getBookingsByVendor } from '@/lib/api/bookings';
import { getUserSession } from '@/lib/core/session';

export const metadata = {
  title: "Requested Bookings | TicketBari Dashboard",
  description: "View and manage ticket booking requests from your customers.",
  robots: {
    index: false,
    follow: false,
  },
};


const RequestedTicketsBookingPage = async() => {
  const user = await getUserSession();
  const tickets = await getBookingsByVendor(user?.email);
  return (
    <div>
      <RequestedTicketsBookings requestedBookings={tickets} />
    </div>
  );
};

export default RequestedTicketsBookingPage;