import RevenueOverview from '@/components/dashboard/vendor/RevenueOverview';

export const metadata = {
  title: "Revenue Overview | TicketBari Dashboard",
  description: "View your ticket sales, earnings, and revenue statistics on TicketBari.",
  robots: {
    index: false,
    follow: false,
  },
};

const RevenuePage = () => {
  return (
    <div>
      <RevenueOverview />
    </div>
  );
};

export default RevenuePage;