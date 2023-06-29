export const BasicLayout: React.FC = () => {
  return (
    <div className="container w-full h-full">
      <div className="grid grid-cols-4 h-full">
        <div className="md:col-span-1 lg:col-span-0 h-full border border-blue-900 bg-blue-500">
          1
        </div>
        <div className="col-span-3 h-full border border-red-900">
          <div className="h-28 border border-green-500 bg-green-500">
            Search Bar
          </div>
          <div className="h-full bg-red-700">Content</div>
        </div>
      </div>
    </div>
  );
};
