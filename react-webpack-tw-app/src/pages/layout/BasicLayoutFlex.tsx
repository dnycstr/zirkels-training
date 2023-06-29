import { SquaresPlusIcon } from '@heroicons/react/20/solid';

export const BasicLayoutFlex: React.FC = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="flex flex-row h-full">
        <div className="w-80 h-full border hidden md:block border-blue-900 bg-blue-500">
          1
        </div>
        <div className="w-full h-full border border-red-900">
          <div className="h-28 border border-green-500 bg-green-500">
            <div className="flex flex-row">
              <div className="w-28 h-full border border-green-500 bg-green-500">
                <button>
                  <SquaresPlusIcon />
                </button>
              </div>
              <div className="w-full h-full border border-green-500 bg-green-500">
                Search Bar
              </div>
            </div>
          </div>
          <div className="h-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};
