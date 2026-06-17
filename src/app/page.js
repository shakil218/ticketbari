import { Button } from '@heroui/react';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold text-center">TicketBari is coming soon!</h1>
      <Button variant="secondary" size="lg" className="mt-4">
      Hello TicketBari
    </Button>
    </div>
  );
}
