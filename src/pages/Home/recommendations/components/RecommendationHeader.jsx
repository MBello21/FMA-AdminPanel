export const RecommendationHeader = ({ freak, onNew }) => {
  return (
    <header className="flex justify-around w-full h-6.25 p-4 text-gray-300">
      <div className="w-1/2 mx-4">
        <h2 className="font-semibold">{freak}</h2>
      </div>
      <div className="w-1/2 text-end mx-4">
        <button
          onClick={onNew}
          className="border border-gray-300 rounded-md px-2 py-1 hover:bg-neutral-900 font-semibold"
        >
          + Nueva entrada
        </button>
      </div>
    </header>
  );
};
