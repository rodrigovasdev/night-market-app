export default function ProductCardSkeleton() {
  return (
    <div className="block w-full min-w-0 max-w-90 md:max-w-none" aria-hidden="true">
      <div className="flex h-96 w-full min-w-0 flex-col overflow-hidden border border-transparent bg-white animate-pulse motion-reduce:animate-none">
        <div className="relative h-64 w-full shrink-0 overflow-hidden bg-gray-200" />
        <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-3 overflow-hidden px-3 py-2">
          <div className="flex min-w-0 flex-col gap-2">
            <div className="h-7 w-3/4 rounded bg-gray-200" />
            <div className="h-5 w-full rounded bg-gray-100" />
          </div>
          <div className="flex min-w-0 items-center justify-between gap-1">
            <div className="h-6 w-1/3 rounded bg-gray-200" />
            <div className="h-5 w-20 shrink-0 rounded bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
