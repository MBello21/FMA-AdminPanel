import { CATEGORIES } from '../../../../../../constants/categories';

export const ModalForm = ({
  handleChange,
  form,
  recInput,
  handleRecInput,
  addRec,
}) => {
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
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm text-gray-300">
          Recomendaciones
        </label>
        <div className="flex gap-1">
          <input
            name="recInput"
            value={recInput}
            onChange={handleRecInput}
            type="text"
            id="Recommendations"
            className="bg-neutral-900 text-gray-300 p-2 rounded-md w-4/5 me-2"
          />
          <button
            type="button"
            onClick={addRec}
            className="w-1/5 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
          >
            Añadir
          </button>
        </div>
      </div>
    </form>
  );
};
