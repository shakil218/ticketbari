"use client";

import { Table, Chip } from "@heroui/react";

export default function UserTransactionHistory({ payments = [] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Transaction History
      </h2>

      <Table aria-label="transaction history table">
        <Table.ScrollContainer>
          <Table.Content>
            <Table.Header>
              <Table.Column>ID</Table.Column>
              <Table.Column>Transaction ID</Table.Column>
              <Table.Column>Ticket</Table.Column>
              <Table.Column>Quantity</Table.Column>
              <Table.Column>Amount</Table.Column>
              <Table.Column>Date</Table.Column>
            </Table.Header>

            <Table.Body>
              {payments.map((tx, index) => (
                <Table.Row key={tx._id} id={tx._id}>
                  {/* Serial Number */}
                  <Table.Cell>
                    <span className="font-medium">
                      {index + 1}
                    </span>
                  </Table.Cell>

                  {/* Transaction ID */}
                  <Table.Cell className="text-xs">
                    <span className="break-all">
                      {tx.transactionId}
                    </span>
                  </Table.Cell>

                  {/* Ticket Title */}
                  <Table.Cell>
                    {tx.ticketTitle}
                  </Table.Cell>

                  {/* Quantity */}
                  <Table.Cell>
                    <Chip
                      size="sm"
                      color="secondary"
                      variant="flat"
                    >
                      {tx.bookingQuantity}
                    </Chip>
                  </Table.Cell>

                  {/* Amount */}
                  <Table.Cell className="font-semibold">
                    ৳{tx.amount}
                  </Table.Cell>

                  {/* Payment Date */}
                  <Table.Cell>
                    <Chip size="sm" variant="flat">
                      {new Date(
                        tx.paymentDate
                      ).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </Chip>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>

      {payments.length === 0 && (
        <div className="text-center py-10">
          <p className="text-default-500">
            No transaction history found.
          </p>
        </div>
      )}
    </div>
  );
}