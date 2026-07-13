import { useAlertContext } from '../../../../context/alert-context/useAlertContext';
import { AlertButton } from './AlertButton';
export const AlertNavbar = () => {
  const { handleTab, tempAlert, windAlert, precAlert } = useAlertContext();
  return (
    <nav className="flex border-b border-slate-200 bg-slate-50">
      <AlertButton
        field="Temperatura"
        freak="temperatura"
        freakAlert={tempAlert}
        handleTab={handleTab}
      />
      <AlertButton
        field="Viento"
        freak="viento"
        handleTab={handleTab}
        freakAlert={windAlert}
      />
      <AlertButton
        field="Precipitación"
        freak="precipitacion"
        handleTab={handleTab}
        freakAlert={precAlert}
      />
    </nav>
  );
};
