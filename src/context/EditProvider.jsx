import { useEdit } from '../pages/Home/freak/hooks/useEdit';
import { EditContext } from './EditContext';

export const EditProvider = ({ children, initialData }) => {
  const editData = useEdit(initialData);
  return (
    <EditContext.Provider value={editData}>{children}</EditContext.Provider>
  );
};
