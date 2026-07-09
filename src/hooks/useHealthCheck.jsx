import { useEffect } from 'react';
import { getHealthy } from '../services/apiBackend';
import useGlobalReducer from '../context/store-context/useGlobalReducer';

export const useHealthCheck = () => {
    const { dispatch } = useGlobalReducer();

    useEffect(() => {
        const health = async () => {
            try {
                const isConnect = await getHealthy();
                dispatch({ type: 'set_api_connect', payload: isConnect });
            } catch {
                dispatch({ type: 'set_api_connect', payload: false });
            }
        };
        health();
        const interval = setInterval(health, 15000);
        return () => clearInterval(interval);
    }, [dispatch]);
};