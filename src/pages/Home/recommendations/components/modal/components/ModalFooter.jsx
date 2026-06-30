import { useFormContext } from '../../../../../../hooks/useFormContext';

export const ModalFooter = ({ onClose, confirmLabel }) => {
  const { handleSubmit } = useFormContext();
  return (
    <div className="w-full flex justify-end gap-3 mt-3">
      <button
        onClick={onClose}
        className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
      >
        Cancelar
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
      >
        {confirmLabel}
      </button>
    </div>
  );
};
