"use client";

import { Button } from "@heroui/react";

// fake data
const users = [
  {
    id: "U-1",
    name: "Rahim Uddin",
    email: "rahim@gmail.com",
    role: "vendor",
    fraud: false,
  },
  {
    id: "U-2",
    name: "Karim Hasan",
    email: "karim@gmail.com",
    role: "user",
    fraud: false,
  },
];

export default function ManageUsers() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Manage Users
      </h2>

      <div className="overflow-x-auto border rounded-xl">

        <table className="w-full text-sm">

          <thead className="bg-gray-50">
            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">

                <td className="p-3">{u.name}</td>
                <td>{u.email}</td>

                <td>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">
                    {u.role}
                  </span>
                </td>

                <td className="flex gap-2 p-2">

                  <Button size="sm">
                    Make Admin
                  </Button>

                  <Button size="sm" color="secondary">
                    Make Vendor
                  </Button>

                  {u.role === "vendor" && (
                    <Button size="sm" color="danger">
                      Mark Fraud
                    </Button>
                  )}

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}