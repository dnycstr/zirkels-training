export const BasicForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-80 w-6/12  bg-gray-300">
      <input
        type="text"
        className="h-12 w-80 rounded-xl border-2 border-red-700 px-4 text-3xl"
        placeholder="Email"
      />
      <input
        type="text"
        className="h-12 w-80 rounded-xl border-2 border-black px-4 text-3xl"
        placeholder="Phone Number"
      />
      <div>
        <button className="h-12 w-80 rounded-xl border-2 bg-gray-700 px-2 text-white">
          Save
        </button>
      </div>
    </div>
  );
};
