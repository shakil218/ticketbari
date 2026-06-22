import UserBookedTickets from '@/components/dashboard/user/UserBookedTickets';
import React from 'react';

const UserBookedTicketsPage = () => {
  const bookings =[{
      id: "BK-1001",
      title: "Dhaka → Cox’s Bazar Luxury Bus",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
      quantity: 2,
      unitPrice: 1200,
      from: "Dhaka",
      to: "Cox’s Bazar",
      departure: "2026-07-01 08:30 AM",
      status: "pending",
    },]

  return (
    <div>
      <UserBookedTickets bookings={bookings} />
    </div>
  );
};

export default UserBookedTicketsPage;