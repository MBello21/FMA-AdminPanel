import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useGlobalReducer from '../../hooks/useGlobalReducer';
import { getUser } from '../../services/apiBackend';

export const useFetchUser = () => {
  const navigate = useNavigate();

  const { dispatch } = useGlobalReducer();
  useEffect(() => {
    console.log('useFetchUser - token:', localStorage.getItem('token'));
    if (!localStorage.getItem('token')) {
      navigate('/');
      return;
    }
    const fetchUser = async () => {
      try {
        const data = await getUser();
        if (!data || data.error) {
          dispatch({ type: 'logout' });
          navigate('/');
          return;
        }
        dispatch({ type: 'set_user', payload: data });
      } catch {
        dispatch({ type: 'logout' });
        navigate('/');
      }
    };
    fetchUser();
  }, []);
};
