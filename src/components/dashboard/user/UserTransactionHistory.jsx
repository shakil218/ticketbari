"use client";

import {
  Table,
  Chip,
} from "@heroui/react";

export default function UserTransactionHistory() {
  const transactions = [
  {
    id: "TX-9001",
    transactionId: "pi_123456ABC",
    title: "Dhaka → Cox’s Bazar Luxury Bus",
    amount: 2400,
    date: "2026-06-18",
  },
  {
    id: "TX-9002",
    transactionId: "pi_78910XYZ",
    title: "Rajshahi → Dhaka AC Bus",
    amount: 900,
    date: "2026-06-19",
  },
];
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
              <Table.Column>Transaction Id</Table.Column>
              <Table.Column>Ticket</Table.Column>
              <Table.Column>Amount</Table.Column>
              <Table.Column>Date</Table.Column>
            </Table.Header>

            <Table.Body>
              {transactions.map((tx) => (
                <Table.Row key={tx.id} id={tx.id}>

                  <Table.Cell>
                    <span className="font-medium">
                      {tx.id}
                    </span>
                  </Table.Cell>

                  <Table.Cell className="text-xs text-gray-500">
                    {tx.transactionId}
                  </Table.Cell>

                  <Table.Cell>
                    {tx.title}
                  </Table.Cell>

                  <Table.Cell className="font-semibold">
                    ৳{tx.amount}
                  </Table.Cell>

                  <Table.Cell>
                    <Chip size="sm" variant="flat">
                      {tx.date}
                    </Chip>
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