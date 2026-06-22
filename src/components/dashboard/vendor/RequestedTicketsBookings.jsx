"use client";

import { Table, Button, Chip } from "@heroui/react";

/* FAKE DATA */
const requestedBookings = [
  {
    id: "REQ-001",
    userName: "Rahim Uddin",
    email: "rahim@gmail.com",
    ticketTitle: "Dhaka → Cox’s Bazar Luxury Bus",
    quantity: 2,
    unitPrice: 1200,
  },
  {
    id: "REQ-002",
    userName: "Karim Hasan",
    email: "karim@gmail.com",
    ticketTitle: "Rajshahi → Dhaka AC Bus",
    quantity: 1,
    unitPrice: 900,
  },
  {
    id: "REQ-003",
    userName: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    ticketTitle: "Sylhet → Chittagong Night Coach",
    quantity: 3,
    unitPrice: 1100,
  },
];

export default function RequestedTicketsBookings() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Requested Bookings
      </h2>

      <Table aria-label="requested bookings">
        <Table.ScrollContainer>
          <Table.Content>
            
            <Table.Header>
              <Table.Column>User</Table.Column>
              <Table.Column>Ticket</Table.Column>
              <Table.Column>Qty</Table.Column>
              <Table.Column>Total</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>

            <Table.Body>
              {requestedBookings.map((req) => (
                <Table.Row key={req.id} id={req.id}>

                  {/* USER */}
                  <Table.Cell>
                    <div>
                      <p className="font-medium">
                        {req.userName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {req.email}
                      </p>
                    </div>
                  </Table.Cell>

                  {/* TICKET */}
                  <Table.Cell>
                    {req.ticketTitle}
                  </Table.Cell>

                  {/* QTY */}
                  <Table.Cell>{req.quantity}</Table.Cell>

                  {/* TOTAL */}
                  <Table.Cell className="font-semibold">
                    ৳{req.quantity * req.unitPrice}
                  </Table.Cell>

                  {/* STATUS */}
                  <Table.Cell>
                    <Chip color="warning">
                      pending
                    </Chip>
                  </Table.Cell>

                  {/* ACTION */}
                  <Table.Cell>
                    <div className="flex gap-2">
                      <Button size="sm" color="success">
                        Accept
                      </Button>

                      <Button size="sm" color="danger">
                        Reject
                      </Button>
                    </div>
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