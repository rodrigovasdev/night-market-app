export default function ProductDetailsLoading() {
  return (
    <div className="flex flex-col md:flex-row w-full py-10 px-5 md:px-20 gap-6 animate-pulse">
      <div className="flex flex-col items-center w-full md:w-1/2 gap-4">
        <div className="rounded-xl w-full md:w-3/4 h-80 md:h-120 border border-gray-300 bg-gray-200" />
        <div className="flex w-full md:w-3/4 gap-3 overflow-hidden">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={`thumb-skeleton-${index}`} className="w-20 h-20 rounded-md bg-gray-200 border border-gray-300" />
          ))}
        </div>
        <div className="w-full md:w-3/4 rounded-xl border border-gray-300 p-4 space-y-3 bg-white">
          <div className="h-6 w-1/2 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-4/5 bg-gray-100 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
      </div>

      <div className="flex flex-col items-center w-full md:w-1/2 gap-5">
        <div className="w-full space-y-4">
          <div className="h-8 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-11/12 bg-gray-100 rounded" />
          <div className="h-4 w-4/5 bg-gray-100 rounded" />
          <div className="h-8 w-1/3 bg-gray-200 rounded" />
          <div className="flex gap-3">
            <div className="h-10 w-40 bg-gray-200 rounded-full" />
            <div className="h-10 w-16 bg-gray-100 rounded-full" />
          </div>
        </div>

        <div className="w-full">
          <div className="h-7 w-1/2 bg-gray-200 rounded mb-4" />
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={`card-skeleton-${index}`}
                className="flex flex-col h-56 md:h-72 bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="w-full h-28 md:h-36 bg-gray-200" />
                <div className="flex flex-col gap-2 p-3">
                  <div className="h-5 w-4/5 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-100 rounded" />
                  <div className="h-4 w-2/3 bg-gray-100 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
