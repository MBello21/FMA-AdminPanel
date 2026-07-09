import { useSearchParams } from 'react-router';
import useGlobalReducer from '../context/store-context/useGlobalReducer';
import { useEffect, useState } from 'react';
import { PARAM_FILTER } from '../constants/param-filter';
import { getDailyAlerts } from '../services/apiBackend';

export const useAlertUrl = () => {
  const { store, dispatch } = useGlobalReducer();
  const [searchParams] = useSearchParams();
  const date =
    searchParams.get('date') || new Date().toISOString().split('T')[0];
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState('temperatura');
  useEffect(() => {
    const dailyAlerts = async () => {
      setIsLoading(true);
      try {
        const data = await getDailyAlerts(date);
        if (!data || data.error) {
          setError(data.error);
          return;
        }
        dispatch({ type: 'set_alerts', payload: data });
      } catch {
        setError('Datos no encontrados');
      } finally {
        setIsLoading(false);
      }
    };
    dailyAlerts();
  }, [date, dispatch]);
  const filtered = store.alerts.filter((i) =>
    PARAM_FILTER[isActive].some((key) =>
      i.description.toLowerCase().includes(key)
    )
  );
  const hasAlert = (freak) =>
    store.alerts.filter((i) =>
      PARAM_FILTER[freak].some((key) =>
        i.description.toLowerCase().includes(key)
      )
    );
  const getAlertByType = (type) => {
    return store.alerts.find((a) => a.parameter.toLowerCase().includes(type));
  };

  const [visited, setVisited] = useState(new Set(['temperatura']));

  const handleTab = (tab) => {
    setIsActive(tab);
    setVisited((prev) => new Set(prev).add(tab));
  };
  const tempAlert = getAlertByType('temperatura');
  const windAlert = getAlertByType('viento');
  const precAlert = getAlertByType('precipitacion');

  return {
    filtered,
    hasAlert,
    visited,
    isActive,
    handleTab,
    tempAlert,
    windAlert,
    precAlert,
    isLoading,
    error,
  };
};
