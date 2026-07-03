import { useState } from 'react';
import { CATEGORIES } from '../../../../constants/categories'
import { useFormContext } from '../../../../context/form-context/useFormContext';
import { ModalRecBlock } from './ModalRecBlock';

export const ModalForm = () => {
    const {
        form,
        recInput,
        setRecInput,
        workRecInput,
        setWorkRecInput,
        prohRecInput,
        setProhRecInput,
        editIndex,
        setEditIndex,
        editWorkIndex,
        setEditWorkIndex,
        editProhIndex,
        setEditProhIndex,

        handleChange,
    } = useFormContext();
    const [showGeneral, setShowGeneral] = useState(true);
    const [showPrecaucion, setShowPrecaucion] = useState(false);
    const [showProhibicion, setShowProhibicion] = useState(false);
    return (
        <form className="flex flex-col gap-2 w-full p-3  mt-2">
            <div className="flex flex-col gap-1">
                <label htmlFor="cat" className="text-sm text-gray-300">
                    Categoría
                </label>
                <select
                    onChange={handleChange}
                    name="cat"
                    id="cat"
                    className="bg-neutral-900 text-gray-300 p-2 rounded-md"
                >
                    {CATEGORIES.filter((cat) => cat.value !== null).map((cat) => (
                        <option
                            key={cat.label}
                            name="cat"
                            value={cat.value}
                            className="text-gray-300 bg-neutral-900"
                        >
                            {cat.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="title" className="text-sm text-gray-300">
                    Título
                </label>
                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    type="text"
                    id="title"
                    className="bg-neutral-900 text-gray-300 p-2 rounded-md"
                />
            </div>
            <ModalRecBlock
                title="Medidas preventivas:"
                field="recommendation_list"
                show={showGeneral}
                setShow={setShowGeneral}
                input={recInput}
                setInput={setRecInput}
                editIdx={editIndex}
                setEditIdx={setEditIndex}
            />
            {form.cat !== 4 && form.cat !== 5 && (
                <ModalRecBlock
                    title="Recomendaciones en relación a las siguientes labores:"
                    field="work_recommendation_list"
                    show={showPrecaucion}
                    setShow={setShowPrecaucion}
                    input={workRecInput}
                    setInput={setWorkRecInput}
                    editIdx={editWorkIndex}
                    setEditIdx={setEditWorkIndex}
                />
            )}
            {form.cat !== 4 && form.cat !== 5 && (
                <ModalRecBlock
                    title="Prohibición en relacion a las siguientes labores:"
                    field="prohibition_list"
                    show={showProhibicion}
                    setShow={setShowProhibicion}
                    input={prohRecInput}
                    setInput={setProhRecInput}
                    editIdx={editProhIndex}
                    setEditIdx={setEditProhIndex}
                />
            )}
        </form>
    );
};
