import { useContext } from 'react';
import { EditContext } from './EditContext';

export const useEditContext = () => {
    return useContext(EditContext);
};
