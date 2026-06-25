"use client";

import { useState } from "react";
import { Table, Button, Chip } from "@heroui/react";
import { toast } from "react-toastify";
import { updateBookingTicketsStatus } from "@/lib/actions/bookings";

export default function RequestedTicketsBookings({ requestedBookings }) {
  const [bookings, setBookings] = useState(requestedBookings);
  const [loadingId, setLoadingId] = useState("");

  const handleStatusUpdate = async (id, status) => {
    try {
      setLoadingId(id);

      const result = await updateBookingTicketsStatus(id, {
        status,
      });

      if (result?.modifiedCount > 0) {
        setBookings((prev) =>
          prev.map((booking) =>
            booking._id === id ? { ...booking, status } : booking,
          ),
        );

        toast.success(`Booking ${status} successfully`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update booking status");
    } finally {
      setLoadingId("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Requested Bookings</h2>

      <Table aria-label="requested bookings">
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column>Ticket</Table.Column>
              <Table.Column>Qty</Table.Column>
              <Table.Column>Total</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>

            <Table.Body>
              {bookings.map((req) => (
                <Table.Row key={req._id} id={req._id}>
                  {/* TICKET */}
                  <Table.Cell className="font-semibold">
                    {req.ticketTitle}
                  </Table.Cell>

                  {/* QTY */}
                  <Table.Cell>{req.bookingQuantity}</Table.Cell>

                  {/* TOTAL */}
                  <Table.Cell className="font-semibold">
                    ৳{req.totalPrice}
                  </Table.Cell>

                  {/* STATUS */}
                  <Table.Cell>
                    <Chip
                      className="mt-3"
                      variant="soft"
                      color={
                        req.status === "pending"
                          ? "warning"
                          : req.status === "rejected"
                            ? "danger"
                            : req.status === "accepted"
                              ? "success"
                              : req.status === "paid"
                                ? "accent"
                                : "default"
                      }
                    >
                      {req.status}
                    </Chip>
                  </Table.Cell>

                  {/* ACTION */}
                  <Table.Cell>
                    {req.status === "pending" ? (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="primary"
                          isLoading={loadingId === req._id}
                          onPress={() =>
                            handleStatusUpdate(req._id, "accepted")
                          }
                        >
                          Accept
                        </Button>

                        <Button
                          size="sm"
                          variant="danger"
                          isLoading={loadingId === req._id}
                          onPress={() =>
                            handleStatusUpdate(req._id, "rejected")
                          }
                        >
                          Reject
                        </Button>
                      </div>
                    ) : (
                      <span className="text-default-500 text-sm">
                        Completed
                      </span>
                    )}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}
