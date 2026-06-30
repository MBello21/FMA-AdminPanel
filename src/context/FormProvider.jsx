import { useForm } from '../pages/Home/recommendations/hooks/useForm';
import { FormContext } from './FormContext';

export const FormProvider = ({ children, onClose, freak }) => {
  const formData = useForm(onClose, freak);
  return (
    <FormContext.Provider value={formData}>{children}</FormContext.Provider>
  );
};
