import { AlertProvider } from '../../context/alert-context/AlertProvider';
import { useAlertContext } from '../../context/alert-context/useAlertContext';
import { AlertHeader } from './components/AlertHeader';
import { AlertBody } from './components/alert-body/AlertBody';

const AlertRecContent = () => {
  const { filtered, isLoading } = useAlertContext();
  return (
    <>
      {filtered.length > 0 ? (
        filtered.map((alert) => (
          <div
            className="flex flex-col items-center justify-center bg-neutral-100 min-h-screen overflow-y-auto p-3 "
            key={alert.id}
          >
            <AlertHeader alert={alert} />
            <AlertBody alert={alert} />
          </div>
        ))
      ) : (
        <div
          className={`flex flex-col items-center justify-center bg-neutral-100 min-h-screen overflow-y-auto p-3 transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'} `}
        >
          <AlertHeader alert={null} />
          <AlertBody alert={null} />
        </div>
      )}
    </>
  );
};

export const AlertRec = () => {
  return (
    <AlertProvider>
      <AlertRecContent />
    </AlertProvider>
  );
};
