"use client";

import { Button } from "@heroui/react";

// fake data
const tickets = [
  {
    id: "T-101",
    title: "Dhaka → Cox’s Bazar Luxury Bus",
    vendor: "Rahim Transport",
    status: "pending",
    price: 1200,
  },
  {
    id: "T-102",
    title: "Rajshahi → Dhaka AC Bus",
    vendor: "City Express",
    status: "pending",
    price: 900,
  },
];

export default function ManageTickets() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Manage Tickets
      </h2>

      <div className="overflow-x-auto border rounded-xl">
        <table className="w-full text-sm">

          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th>Vendor</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t) => (
              <tr key={t.id} className="border-t">

                <td className="p-3">{t.title}</td>
                <td>{t.vendor}</td>

                <td>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
                    {t.status}
                  </span>
                </td>

                <td>৳{t.price}</td>

                <td className="flex gap-2 p-2">

                  <Button size="sm" color="success">
                    Approve
                  </Button>

                  <Button size="sm" color="danger">
                    Reject
                  </Button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}