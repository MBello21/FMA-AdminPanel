import { ModalHeader } from './ModalHeader';
import { ModalForm } from './ModalForm';
import { ModalFooter } from './ModalFooter';
import { FormProvider } from '../../../../context/form-context/FormProvider'
import { useFormContext } from '../../../../context/form-context/useFormContext'

const ModalContent = ({ onClose }) => {
    const { ref, handleSubmit } = useFormContext();

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div
                ref={ref}
                className="bg-neutral-800 rounded-md p-6 w-1/2 flex flex-col items-center h-auto max-h-[90vh] overflow-y-auto"
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

export const Modal = ({ onClose }) => {
    return (
        <FormProvider onClose={onClose}>
            <ModalContent onClose={onClose} />
        </FormProvider>
    );
};
