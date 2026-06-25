"use client";

import { Table, Button, Chip, Card } from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { toggleTicketAdvertisement } from "@/lib/actions/tickets";

export default function AdvertiseTickets({ tickets = [] }) {
  const router = useRouter();

  // Count advertised tickets
  const advertisedCount = tickets.filter(
    (ticket) => ticket.isAdvertised,
  ).length;

  const handleToggle = async (ticketId, currentValue) => {
    if (!currentValue && advertisedCount >= 6) {
      toast.error("Maximum 6 tickets can be advertised.");
      return;
    }

    try {
      const result = await toggleTicketAdvertisement(ticketId, !currentValue);

      if (result.modifiedCount > 0) {
        toast.success(
          currentValue
            ? "Ticket removed from advertisement."
            : "Ticket advertised successfully.",
        );

        router.refresh();
      } else {
        toast.error("No changes were made.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Advertise Tickets</h2>

          <p className="text-default-500 mt-1">
            Only admin approved tickets can be advertised. Maximum 6 tickets can
            be advertised at a time.
          </p>
        </div>

        <Chip
          color={advertisedCount >= 6 ? "danger" : "success"}
          variant="flat"
          size="lg"
        >
          {advertisedCount} / 6 Advertised
        </Chip>
      </div>

      <Card className="p-0">
        <Table aria-label="Advertise Tickets Table">
          <Table.ScrollContainer>
            <Table.Content>
              <Table.Header>
                <Table.Column isRowHeader>Ticket</Table.Column>

                <Table.Column>Route</Table.Column>

                <Table.Column>Vendor</Table.Column>

                <Table.Column>Price</Table.Column>

                <Table.Column>Status</Table.Column>

                <Table.Column>Advertisement</Table.Column>

                <Table.Column>Action</Table.Column>
              </Table.Header>

              <Table.Body
                renderEmptyState={() => (
                  <div className="py-10 text-center text-default-500">
                    No approved tickets found.
                  </div>
                )}
              >
                {tickets.map((ticket) => (
                  <Table.Row key={ticket._id} id={ticket._id}>
                    {/* Ticket */}
                    <Table.Cell>
                      <div>
                        <p className="font-semibold">{ticket.title}</p>

                        <p className="text-xs text-default-500">
                          Available Seats : {ticket.quantity}
                        </p>
                      </div>
                    </Table.Cell>

                    {/* Route */}
                    <Table.Cell>
                      {ticket.from} → {ticket.to}
                    </Table.Cell>

                    {/* Vendor */}
                    <Table.Cell>{ticket.vendorName}</Table.Cell>

                    {/* Price */}
                    <Table.Cell>৳{ticket.price}</Table.Cell>

                    {/* Approval Status */}
                    <Table.Cell>
                      <Chip color="accent" variant="flat">
                        {ticket.status}
                      </Chip>
                    </Table.Cell>

                    {/* Advertisement Status */}
                    <Table.Cell>
                      <Chip
                        color={ticket.isAdvertised ? "success" : "warning"}
                        variant="flat"
                      >
                        {ticket.isAdvertised ? "Advertised" : "Not Advertised"}
                      </Chip>
                    </Table.Cell>

                    {/* Action */}
                    <Table.Cell>
                      <Button
                        size="sm"
                        className={ticket.isAdvertised ? "bg-danger" : "bg-success"}
                        onPress={() =>
                          handleToggle(ticket._id, ticket.isAdvertised)
                        }
                      >
                        {ticket.isAdvertised ? "Unadvertise" : "Advertise"}
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </Card>
    </div>
  );
}
