import { useEffect, useRef } from 'react';
import { ModalHeader } from '../modal/components/ModalHeader';
import { ModalFooter } from '../modal/components/ModalFooter';

export const DeleteModal = ({ onClose, confirmLabel, onConfirm }) => {
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div
        ref={ref}
        className="bg-neutral-800 rounded-md p-6 w-1/2 flex flex-col justify-center items-center h-auto"
      >
        <ModalHeader
          onClose={onClose}
          title="¿Seguro que quieres eliminar esta entrada?"
        />
        <ModalFooter confirmLabel={confirmLabel} handleSubmit={onConfirm} />
      </div>
    </div>
  );
};
