export default function ShimmerMenu() {
  return (
    <div className="animate-pulse">
      <div className="font-bold text-lg mb-2">On The Way...</div>
      <div className="bg-gray-300 h-4 w-3/4 mb-4" />
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-gray-300 h-6 w-12" />
        <div className="flex-1 space-y-3 py-1">
          <div className="h-4 bg-gray-300 rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded" />
            <div className="h-4 bg-gray-300 rounded w-5/6" />
          </div>
        </div>
        <div className="bg-gray-300 h-24 w-24" />
      </div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-gray-300 h-6 w-12" />
        <div className="flex-1 space-y-3 py-1">
          <div className="h-4 bg-gray-300 rounded" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded" />
            <div className="h-4 bg-gray-300 rounded w-5/6" />
          </div>
        </div>
        <div className="bg-gray-300 h-24 w-24" />
      </div>
    </div>
  );
}
