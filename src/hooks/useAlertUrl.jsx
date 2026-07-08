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
  const [isActive, setIsActive] = useState('temperatura');
  useEffect(() => {
    const dailyAlerts = async () => {
      const data = await getDailyAlerts(date);
      dispatch({ type: 'set_alerts', payload: data });
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

  const [visited, setVisited] = useState(new Set());

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
  };
};
