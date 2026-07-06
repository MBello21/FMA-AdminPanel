import { EditProvider } from '../../../context/edit-context/EditProvider'
import { useEditContext } from '../../../context/edit-context/useEditContext'

export const FreakEditContent = ({ catLabel, setIsEditing, generalTitle, precaucionTitle, prohibicionTitle }) => {
    const field = catLabel.label;
    const {
        editForm,
        show,
        loading,
        setShow,
        recInput,
        setRecInput,
        editIndex,
        setEditIndex,
        handleChange,
        handleSubmit,
        handleRecInput,
        addRec,
        removeRec,
        editRec,
    } = useEditContext();
    console.log('editForm:', editForm);
    return (
        <div className="flex flex-col m-5">
            <div className="flex items-center gap-3">
                <div
                    className={`${catLabel.color} leading-none px-3 py-1 rounded-full text-sm`}
                >
                    {field}
                </div>
                <h2 className="text-gray-300 font-semibold">{editForm.title}</h2>
            </div>
            <div className="flex flex-col mt-3">
                <h2 className="text-gray-300 text-sm my-1">Título</h2>
                <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    onChange={handleChange}
                    className="bg-neutral-700 text-gray-300 w-full border border-neutral-600 rounded-sm px-2 py-1"
                />
            </div>
            <div className="flex flex-col bg-neutral-700 border border-neutral-600 rounded-sm px-2 py-2 mt-3">
                <div className="w-full flex justify-between items-center">
                    <label htmlFor="recommendations" className="text-sm text-gray-300">
                        {generalTitle}
                    </label>
                    <button type="button" onClick={() => setShow(!show)}>
                        <i
                            className={`fa-solid fa-angle-down text-gray-300 transition-transform duration-500 ${show ? 'rotate-0' : 'rotate-90'
                                }`}
                        ></i>
                    </button>
                </div>
                <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${show ? 'max-h-auto' : 'max-h-0'}`}
                >
                    <div className="flex items-center gap-1">
                        <textarea
                            name="recInput"
                            value={recInput}
                            onChange={(e) => {
                                handleRecInput(e, setRecInput);
                            }}
                            id="recommendations"
                            className="bg-neutral-600 text-gray-300 p-2 rounded-md w-4/5 me-2 resize-none m-1"
                            rows={2}
                        />
                        <button
                            onClick={() =>
                                addRec(
                                    'recommendation_list',
                                    recInput,
                                    setRecInput,
                                    editIndex,
                                    setEditIndex
                                )
                            }
                            type="button"
                            className="w-1/5 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900 h-7"
                        >
                            Añadir
                        </button>
                    </div>
                    <div className="text-gray-300 text-sm mt-2 px-2">
                        <ul>
                            {editForm.recommendation_list.map((i, index) => (
                                <li key={i} className="flex items-center justify-between">
                                    <span>• {i}</span>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                editRec(
                                                    'recommendation_list',
                                                    setEditIndex,
                                                    setRecInput,
                                                    index
                                                )
                                            }
                                            className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
                                        >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => removeRec('recommendation_list', index)}
                                            className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
                                        >
                                            <i className="fa-solid fa-delete-left"></i>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <button
                onClick={(e) => handleSubmit(e, () => setIsEditing(false))}
                className="bg-neutral-900 w-full border border-neutral-100 rounded-md p-1 text-gray-100 mt-3 hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={loading}
            >
                {loading && <i
                    className='fa-solid fa-spinner fa-spin mx-2'>
                </i>}
                {loading ? 'Guardando...' : 'Guardar'}
            </button>
        </div>
    );
};

export const FreakEdit = ({ catLabel, initialData, navigate, setIsEditing, generalTitle, precaucionTitle, prohibicionTitle }) => {
    return (
        <EditProvider initialData={initialData}>
            <FreakEditContent catLabel={catLabel} setIsEditing={setIsEditing} generalTitle={generalTitle} precaucionTitle={precaucionTitle} prohibicionTitle={prohibicionTitle} />
        </EditProvider>
    );
};
