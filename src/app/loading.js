export default function LoadingSpinner() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="relative h-12 w-12">

          {/* background ring */}
          <div className="absolute inset-0 rounded-full border-4 border-default-200" />

          {/* animated ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />

        </div>

        {/* Text */}
        <p className="text-sm text-default-500">
          Loading TicketBari...
        </p>

      </div>
    </div>
  );
}