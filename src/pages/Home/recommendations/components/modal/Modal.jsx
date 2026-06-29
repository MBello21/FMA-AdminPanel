import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { ModalHeader } from './components/ModalHeader';
import { ModalForm } from './components/ModalForm';
import { ModalRecList } from './components/ModalRecList';
import { ModalFooter } from './components/ModalFooter';

export const Modal = ({ onClose, freak }) => {
  const {
    form,
    recInput,
    ref,
    addRec,
    removeRec,
    editRec,
    handleChange,
    handleRecInput,
    handleSubmit,
  } = useForm(onClose, freak);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        if (form.title || form.recommendation_list.length > 0) {
          if (
            window.confirm('¿Seguro que quieres salir? Perderás los datos.')
          ) {
            onClose();
          }
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, onClose, form]);

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div
        ref={ref}
        className="bg-neutral-800 rounded-md p-6 w-1/2 flex flex-col justify-center items-center h-auto"
      >
        <ModalHeader onClose={onClose} />
        <ModalForm
          handleChange={handleChange}
          form={form}
          recInput={recInput}
          handleRecInput={handleRecInput}
          addRec={addRec}
        />
        <ModalRecList form={form} editRec={editRec} removeRec={removeRec} />
        <ModalFooter handleSubmit={handleSubmit} onClose={onClose} />
      </div>
    </div>
  );
};
