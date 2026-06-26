import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';

export const metadata = {
  title: {
    default: "Dashboard | TicketBari",
    template: "%s | TicketBari",
  },
  description: "Manage your TicketBari account, bookings, tickets, and dashboard.",
  robots: {
    index: false,
    follow: false,
  },
};

const layout = ({children}) => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

export default layout;