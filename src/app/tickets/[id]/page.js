import React from 'react';
import TicketDetails from './TicketDetails';
import { getTicketById } from '@/lib/api/tickets';
import { getUserSession } from '@/lib/core/session';
import {redirect} from 'next/navigation';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const ticket = await getTicketById(id);

  if (!ticket) {
    return {
      title: "Ticket Not Found",
      description: "The requested ticket could not be found.",
    };
  }

  return {
    title: `${ticket.from} to ${ticket.to} Ticket | TicketBari`,
    description: `Book your ${ticket.transportType} ticket from ${ticket.from} to ${ticket.to} quickly and securely with TicketBari.`,
  };
}


const TicketDetailsPage = async({params}) => {
const {id}= await params;
const ticket = await getTicketById(id);
const user = await getUserSession();

if (!user){
  redirect(`/auth/signin?redirect=/tickets/${ticket._id}`)
}

  return (
    <div>
      <TicketDetails passenger={user} ticket={ticket} />
    </div>
  );
};

export default TicketDetailsPage;