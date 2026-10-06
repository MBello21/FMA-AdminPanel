import { useSearchParams } from 'react-router';
import useGlobalReducer from '../context/store-context/useGlobalReducer';
import { useEffect, useState } from 'react';
import { PARAM_FILTER } from '../constants/param-filter';
import { DIC_TO_CAT } from '../constants/dic-to-cat';
import { getDailyAlerts } from '../services/apiBackend';

const norm = (s) =>
  (s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const matchesFreak = (alert, freak) => {
  const text = norm(`${alert?.parameter ?? ''} ${alert?.description ?? ''}`);
  return (PARAM_FILTER[freak] ?? []).some((key) => text.includes(norm(key)));
};

const levelCat = (alert) => DIC_TO_CAT[alert?.level?.toLowerCase()]?.cat ?? 0;

const worstAlert = (list) =>
  list.length
    ? list.reduce((best, a) => (levelCat(a) > levelCat(best) ? a : best))
    : undefined;

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
      setError(null);
      try {
        const data = await getDailyAlerts(date);
        if (!data || data.error) {
          setError(data?.error ?? 'Datos no encontrados');
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

  const alerts = store.alerts ?? [];

  const filtered = alerts.filter((a) => matchesFreak(a, isActive));
  const hasAlert = (freak) => alerts.filter((a) => matchesFreak(a, freak));
  const getAlertByType = (freak) => worstAlert(hasAlert(freak));

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