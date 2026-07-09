import { useState } from 'react';
import { useEditContext } from '../../../../context/edit-context/useEditContext';

export const EditBlock = ({
  title,
  field,
  input,
  setInput,
  editIdx,
  setEditIdx,
  defaultOpen,
}) => {
  const { editForm, addRec, removeRec, editRec, handleRecInput } =
    useEditContext();
  const [show, setShow] = useState(defaultOpen);
  return (
    <div className="flex flex-col bg-neutral-700 border border-neutral-600 rounded-sm px-2 py-2 mt-3">
      <div
        className="w-full flex justify-between items-center"
        onClick={() => setShow(!show)}
      >
        <label htmlFor="recommendations" className="text-sm text-gray-300">
          {title}
        </label>
        <button type="button">
          <i
            className={`fa-solid fa-angle-down text-gray-300 transition-transform duration-500 ${
              show ? 'rotate-0' : 'rotate-90'
            }`}
          ></i>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${show ? 'max-h-auto' : 'max-h-0'}`}
      >
        <div className="flex items-center gap-1">
          <textarea
            name={input}
            value={input}
            onChange={(e) => {
              handleRecInput(e, setInput);
            }}
            id="recommendations"
            className="bg-neutral-600 text-gray-300 p-2 rounded-md w-4/5 me-2 resize-none m-1"
            rows={2}
          />
          <button
            onClick={() => addRec(field, input, setInput, editIdx, setEditIdx)}
            type="button"
            className="w-1/5 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900 h-7"
          >
            Añadir
          </button>
        </div>
        <div className="text-gray-300 text-sm mt-2 px-2">
          <ul>
            {editForm[field].map((i, index) => (
              <li key={i} className="flex items-center justify-between">
                <span>• {i}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => editRec(field, setEditIdx, setInput, index)}
                    className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    onClick={() => removeRec(field, index)}
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
  );
};
