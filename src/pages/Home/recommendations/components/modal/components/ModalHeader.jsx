export const ModalHeader = ({ onClose }) => {
  return (
    <div className="flex items-center w-full">
      <div className="text-start w-full">
        <h2 className="text-sm text-gray-300">Nueva entrada</h2>
      </div>
      <div className="text-end w-full">
        <button
          onClick={onClose}
          className="border px-2 py-1 border-gray-500 rounded-md text-gray-300 text-sm hover:bg-neutral-900"
        >
          <i className="fa-solid fa-arrow-left  me-2"></i>
          Volver
        </button>
      </div>
    </div>
  );
};
