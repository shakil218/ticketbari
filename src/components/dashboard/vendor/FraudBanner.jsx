import { Card } from "@heroui/react";
import { TriangleAlert } from "lucide-react";

export default function FraudBanner() {
  return (
    <Card className="border border-danger bg-danger-50 dark:bg-danger-950/20 p-5">
      <div className="flex items-start gap-3">
        <TriangleAlert className="w-6 h-6 text-danger shrink-0 mt-0.5" />

        <div>
          <h2 className="text-lg font-semibold text-danger">
            Vendor Account Suspended
          </h2>

          <p className="mt-2 text-sm text-default-700 dark:text-default-300 leading-6">
            Your vendor account has been marked as{" "}
            <strong>Fraud</strong> by an administrator.
          </p>

          <p className="mt-2 text-sm text-default-600 dark:text-default-400 leading-6">
            You can still access your dashboard and view your profile,
            tickets, bookings, and revenue information. However,
            creating, updating, deleting tickets, or managing booking
            requests has been disabled until your account is restored by
            an administrator.
          </p>
        </div>
      </div>
    </Card>
  );
}