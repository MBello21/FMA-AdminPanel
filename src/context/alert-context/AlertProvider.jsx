import { useAlertUrl } from '../../hooks/useAlertUrl';
import { AlertContext } from './AlertContext';

export const AlertProvider = ({ children }) => {
  const alertData = useAlertUrl();
  return (
    <AlertContext.Provider value={alertData}>{children}</AlertContext.Provider>
  );
};
