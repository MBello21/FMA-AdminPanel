import { useFormContext } from '../../../../context/form-context/useFormContext'
import { ModalRecList } from './ModalRecList';

export const ModalRecBlock = ({
    title,
    field,
    show,
    setShow,
    input,
    setInput,
    editIdx,
    setEditIdx,
}) => {
    const { form, handleRecInput, addRec, removeRec, editRec } = useFormContext();
    return (
        <div className="flex flex-col gap-1 ">
            <div className="w-full flex justify-between items-center">
                <label htmlFor="recommendations" className="text-sm text-gray-300">
                    {form.cat === 4 || form.cat === 5
                        ? 'Recomendaciones concretas:'
                        : title}
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
                        value={input}
                        onChange={(event) => handleRecInput(event, setInput)}
                        id="recommendations"
                        className="bg-neutral-900 text-gray-300 p-2 rounded-md w-4/5 me-2 resize-none m-1"
                        rows={2}
                    />
                    <button
                        type="button"
                        onClick={() => addRec(field, input, setInput, editIdx, setEditIdx)}
                        className="w-1/5 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900 h-7"
                    >
                        Añadir
                    </button>
                </div>
                <ModalRecList
                    form={form}
                    field={field}
                    removeRec={removeRec}
                    editRec={editRec}
                    setEditIdx={setEditIdx}
                    setInput={setInput}
                />
            </div>
        </div>
    );
};
