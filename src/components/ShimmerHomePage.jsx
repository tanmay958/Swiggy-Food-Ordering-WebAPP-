export default function Component() {
  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-6"></div>
      <h2 className="text-2xl font-bold mb-6">
        Top restaurant chains in Bangalore
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="animate-pulse">
          <div className="bg-gray-300 h-48 w-full rounded-md" />
          <div className="space-y-2 mt-2">
            <div className="bg-gray-200 h-6 w-3/4 rounded-md" />
            <div className="bg-gray-200 h-4 w-1/2 rounded-md" />
            <div className="bg-gray-200 h-4 w-1/4 rounded-md" />
          </div>
        </div>
        <div className="animate-pulse">
          <div className="bg-gray-300 h-48 w-full rounded-md" />
          <div className="space-y-2 mt-2">
            <div className="bg-gray-200 h-6 w-3/4 rounded-md" />
            <div className="bg-gray-200 h-4 w-1/2 rounded-md" />
            <div className="bg-gray-200 h-4 w-1/4 rounded-md" />
          </div>
        </div>
        <div className="animate-pulse">
          <div className="bg-gray-300 h-48 w-full rounded-md" />
          <div className="space-y-2 mt-2">
            <div className="bg-gray-200 h-6 w-3/4 rounded-md" />
            <div className="bg-gray-200 h-4 w-1/2 rounded-md" />
            <div className="bg-gray-200 h-4 w-1/4 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
