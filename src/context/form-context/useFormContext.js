import { useContext } from 'react';
import { FormContext } from './FormContext';

export const useFormContext = () => {
    return useContext(FormContext);
};
