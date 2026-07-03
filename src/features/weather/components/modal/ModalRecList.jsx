export const ModalRecList = ({
    form,
    field,
    editRec,
    removeRec,
    setEditIdx,
    setInput,
}) => {
    return (
        <div className="flex flex-col justify-start w-full px-3 py-1 border-b h-auto max-h-50 border-gray-300 overflow-y-auto">
            <ul className=" text-gray-300 text-start mb-1 ">
                {form[field].map((i, index) => (
                    <li key={i} className="flex items-center justify-between">
                        <span>• {i}</span>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
                                onClick={() => editRec(field, setEditIdx, setInput, index)}
                            >
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button
                                type="button"
                                className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
                                onClick={() => removeRec(field, index)}
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
