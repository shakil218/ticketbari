"use client";

import Link from "next/link";
import { Button, Card } from "@heroui/react";
import { TriangleAlert, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <Card className="w-full max-w-xl p-10 text-center shadow-xl">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-danger/10">
          <TriangleAlert className="h-12 w-12 text-danger" />
        </div>

        <h1 className="mt-8 text-7xl font-extrabold tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-default-500">
          The page you&apos;re looking for doesn&apos;t exist, may have been moved,
          or the URL might be incorrect.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            as={Link}
            href="/"
            className="bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 text-white"
          >
            <Home size={18} />
            Back to Home
          </Button>

          <Button
            variant="outline"
            onPress={() => window.history.back()}
          >
            <ArrowLeft size={18} />
            Go Back
          </Button>
        </div>
      </Card>
    </main>
  );
}