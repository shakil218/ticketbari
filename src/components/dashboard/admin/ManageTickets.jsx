"use client";

import { toast } from "react-toastify";
import { Button, Chip } from "@heroui/react";
import { updateTicketStatus } from "@/lib/actions/tickets";
import { useRouter } from "next/navigation";

export default function ManageTickets({ tickets = [] }) {

  const router = useRouter();

  const handleStatusUpdate = async (
    ticketId,
    status
  ) => {
    try {
      const result = await updateTicketStatus(
        ticketId,
        status
      );

      if (result?.modifiedCount > 0) {
        toast.success(
          `Ticket ${status} successfully`
        );

        router.refresh();
      }
    } catch (error) {
      toast.error("Failed to update ticket");
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Manage Tickets
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border rounded-xl">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">
                Ticket
              </th>
              <th>Vendor</th>
              <th>Route</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr
                key={ticket._id}
                className="border-b"
              >
                <td className="p-4">
                  {ticket.title}
                </td>

                <td>
                  {ticket.vendorName}
                </td>

                <td>
                  {ticket.from} → {ticket.to}
                </td>

                <td>
                  ৳{ticket.price}
                </td>

                <td>
                  <Chip
                    variant="soft"
                    color={
                      ticket.status ===
                      "approved"
                        ? "success"
                        : ticket.status ===
                            "rejected"
                          ? "danger"
                          : "warning"
                    }
                  >
                    {ticket.status}
                  </Chip>
                </td>

                <td>
                  <div className="flex gap-2 justify-center">
                    <Button
                      size="sm"
                      vatiant="primary"
                      isDisabled={
                        ticket.status ===
                        "approved"
                      }
                      onPress={() =>
                        handleStatusUpdate(
                          ticket._id,
                          "approved"
                        )
                      }
                    >
                      Approve
                    </Button>

                    <Button
                      size="sm"
                      variant="danger"
                      isDisabled={
                        ticket.status ===
                        "rejected"
                      }
                      onPress={() =>
                        handleStatusUpdate(
                          ticket._id,
                          "rejected"
                        )
                      }
                    >
                      Reject
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}