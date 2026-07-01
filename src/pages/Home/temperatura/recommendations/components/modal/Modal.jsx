import { ModalHeader } from './components/ModalHeader';
import { ModalForm } from './components/modal-form/ModalForm';
import { ModalFooter } from './components/ModalFooter';
import { FormProvider } from '../../../../../../context/FormProvider';
import { useFormContext } from '../../../../../../hooks/useFormContext';

const ModalContent = ({ onClose }) => {
  const { ref, handleSubmit } = useFormContext();

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div
        ref={ref}
        className="bg-neutral-800 rounded-md p-6 w-1/2 flex flex-col justify-center items-center h-auto"
      >
        <ModalHeader onClose={onClose} title="Nueva entrada" />
        <ModalForm />
        <ModalFooter
          onClose={onClose}
          confirmLabel="Guardar"
          onConfirm={handleSubmit}
          confirmLoad="Guardando..."
        />
      </div>
    </div>
  );
};

export const Modal = ({ onClose, freak }) => {
  return (
    <FormProvider onClose={onClose} freak={freak}>
      <ModalContent onClose={onClose} />
    </FormProvider>
  );
};
