import Link from "next/link";
import { ShieldX, Home, ArrowLeft } from "lucide-react";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="flex items-center justify-center w-28 h-28 rounded-full bg-danger/10">
            <ShieldX className="w-14 h-14 text-danger" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl font-bold">
          Access Denied
        </h1>

        {/* Message */}
        <p className="mt-4 text-default-500 leading-relaxed">
          Sorry, you don&apos;t have permission to access this page.
          This area is restricted based on your account role.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-500 via-purple-500 to-indigo-500 px-6 py-3 text-white font-medium transition hover:opacity-90"
          >
            <Home size={18} />
            Back to Home
          </Link>

        </div>

        {/* Extra Info */}
        <div className="mt-10 rounded-2xl border border-default p-4 bg-default-50">
          <p className="text-sm text-default-500">
            If you believe this is a mistake, please contact support
            or log in with an account that has the required permissions.
          </p>
        </div>

      </div>
    </div>
  );
}