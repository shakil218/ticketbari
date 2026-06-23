import React from 'react';
import TicketDetails from './TicketDetails';
import { getTicketById } from '@/lib/api/tickets';
import { getUserSession } from '@/lib/core/session';
import {redirect} from 'next/navigation';
import { ShieldX } from "lucide-react";

const TicketDetailsPage = async({params}) => {
const {id}= await params;
const ticket = await getTicketById(id);
const user = await getUserSession();

if (!user){
  redirect(`/auth/signin?redirect=/tickets/${ticket._id}`)
}

if (user?.role === "vendor" || user?.role === "admin") {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md rounded-xl border p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-danger/10 p-4">
            <ShieldX className="h-10 w-10 text-danger" />
          </div>
        </div>
        <h2 className="text-2xl font-bold">
          Access Denied
        </h2>
        <p className="mt-3 text-default-500">
          Only users with a customer account can book tickets. Please sign in
          with a user account to continue.
        </p>
      </div>
    </div>
  );
}

  return (
    <div>
      <TicketDetails passenger={user} ticket={ticket} />
    </div>
  );
};

export default TicketDetailsPage;