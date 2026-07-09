import { EditProvider } from '../../../../context/edit-context/EditProvider';
import { useEditContext } from '../../../../context/edit-context/useEditContext';
import { EditBlock } from './EditBlock';

export const FreakEditContent = ({
  catLabel,
  setIsEditing,
  generalTitle,
  precaucionTitle,
  prohibicionTitle,
}) => {
  const field = catLabel.label;

  const {
    editForm,
    loading,
    recInput,
    setRecInput,
    workRecInput,
    setWorkRecInput,
    prohRecInput,
    setProhRecInput,
    editWorkIndex,
    setEditWorkIndex,
    editProhIndex,
    setEditProhIndex,
    editIndex,
    setEditIndex,
    handleChange,
    handleSubmit,
  } = useEditContext();
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
      <EditBlock
        title={generalTitle}
        field="recommendation_list"
        input={recInput}
        setInput={setRecInput}
        editIdx={editIndex}
        setEditIdx={setEditIndex}
        defaultOpen={true}
      />
      {precaucionTitle && (
        <EditBlock
          title={precaucionTitle}
          field="work_recommendation_list"
          input={workRecInput}
          setInput={setWorkRecInput}
          editIdx={editWorkIndex}
          setEditIdx={setEditWorkIndex}
          defaultOpen={false}
        />
      )}
      {prohibicionTitle && (
        <EditBlock
          title={prohibicionTitle}
          field="prohibition_list"
          input={prohRecInput}
          setInput={setProhRecInput}
          editIdx={editProhIndex}
          setEditIdx={setEditProhIndex}
          defaultOpen={false}
        />
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={(e) => handleSubmit(e, () => setIsEditing(false))}
          className="px-6 py-2 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
          type="submit"
          disabled={loading}
        >
          {loading && <i className="fa-solid fa-spinner fa-spin mx-2"></i>}
          {loading ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </div>
  );
};

export const FreakEdit = ({
  catLabel,
  initialData,
  setIsEditing,
  generalTitle,
  precaucionTitle,
  prohibicionTitle,
}) => {
  return (
    <EditProvider initialData={initialData}>
      <FreakEditContent
        catLabel={catLabel}
        setIsEditing={setIsEditing}
        generalTitle={generalTitle}
        precaucionTitle={precaucionTitle}
        prohibicionTitle={prohibicionTitle}
      />
    </EditProvider>
  );
};
