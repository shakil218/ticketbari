// components/dashboard/UserProfile.jsx
"use client";

import { Card, Avatar, Chip } from "@heroui/react";

export default function UserProfile({ user }) {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="p-6 shadow-sm">
        
        <div className="flex items-center gap-5">
          <Avatar
            src={user?.image}
            className="w-20 h-20"
          />

          <div>
            <h2 className="text-2xl font-bold">{user?.name||"User Name"}</h2>
            <p className="text-gray-500">{user?.email || "User Email"}</p>

            <Chip color="primary" className="mt-2">
              Role: {user?.role || "User"}
            </Chip>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Account Status</p>
            <p className="font-semibold">Active</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Member Since</p>
            <p className="font-semibold">2026</p>
          </div>
        </div>

      </Card>
    </div>
  );
}