export const ModalRecList = ({ form, editRec, removeRec }) => {
  return (
    <div className="flex flex-col justify-start w-full px-3 py-1 border-b border-gray-300">
      <ul className=" text-gray-300 text-start mb-1 ">
        {form.recommendation_list.map((i, index) => (
          <li key={i} className="flex items-center justify-between">
            <span>• {i}</span>
            <div className="flex gap-2">
              <button
                className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
                onClick={() => editRec(index)}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
                onClick={() => removeRec(index)}
              >
                <i className="fa-solid fa-delete-left"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
