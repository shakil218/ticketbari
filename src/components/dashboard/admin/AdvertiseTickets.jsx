"use client";

import { Switch } from "@heroui/react";

// fake data
const advertisedTickets = [
  {
    id: "A-1",
    title: "Dhaka → Cox’s Bazar Luxury Bus",
    isAdvertised: true,
  },
];

export default function AdvertiseTicketsPage() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Advertise Tickets
      </h2>

      <div className="border rounded-xl overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th>Status</th>
              <th>Advertise</th>
            </tr>
          </thead>

          <tbody>
            {advertisedTickets.map((t) => (
              <tr key={t.id} className="border-t">

                <td className="p-3">{t.title}</td>

                <td>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
                    approved
                  </span>
                </td>

                <td>
                  <Switch defaultSelected />
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}