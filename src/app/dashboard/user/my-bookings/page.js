import UserBookedTickets from '@/components/dashboard/user/UserBookedTickets';
import { getBookingsByPassenger } from '@/lib/api/bookings';
import { getUserSession } from '@/lib/core/session';

export const metadata = {
  title: "My Bookings | TicketBari Dashboard",
  description: "View and manage your booked tickets on TicketBari.",
  robots: {
    index: false,
    follow: false,
  },
};

const UserBookedTicketsPage = async () => {
  const user = await getUserSession();
  const bookings = await getBookingsByPassenger(user?.id);
 
  return (
    <div>
      <UserBookedTickets passenger={user} bookings={bookings} />
    </div>
  );
};

export default UserBookedTicketsPage;