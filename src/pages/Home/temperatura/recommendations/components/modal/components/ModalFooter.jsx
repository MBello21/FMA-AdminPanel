import { useFormContext } from '../../../../../../../hooks/useFormContext';

export const ModalFooter = ({
  onClose,
  confirmLabel,
  onConfirm,
  confirmLoad,
}) => {
  const { loading } = useFormContext();

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
        onClick={onConfirm}
        className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md hover:bg-neutral-900"
      >
        {loading && <i className="fa-solid fa-spinner fa-spin mx-2"></i>}
        {loading ? confirmLoad : confirmLabel}
      </button>
    </div>
  );
};
