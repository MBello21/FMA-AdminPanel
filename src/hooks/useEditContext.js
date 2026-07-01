import { useContext } from 'react';
import { EditContext } from '../context/EditContext';

export const useEditContext = () => {
  return useContext(EditContext);
};
