import { Spinner } from "@heroui/react";
export default function LoadingSpinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Spinner
          size="xl"
          color="accent"
        />

        <p className="text-sm text-default-500">
          Loading TicketBari...
        </p>
      </div>
    </div>
  );
}