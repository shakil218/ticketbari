import React from 'react';
import TicketDetails from './TicketDetails';
import { getTicketById } from '@/lib/api/tickets';
import { getUserSession } from '@/lib/core/session';
import {redirect} from 'next/navigation';

const TicketDetailsPage = async({params}) => {
const {id}= await params;
const ticket = await getTicketById(id);
const user = await getUserSession();

if (!user){
  redirect(`/auth/signin?redirect=/tickets/${ticket._id}`)
}

  return (
    <div>
      <TicketDetails ticket={ticket} />
    </div>
  );
};

export default TicketDetailsPage;