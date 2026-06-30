import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useGlobalReducer from '../../hooks/useGlobalReducer';
import { getRecommendations, getUser } from '../../services/apiBackend';

export const useFetchUser = () => {
  const navigate = useNavigate();

  const { dispatch } = useGlobalReducer();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/');
      return;
    }
    const fetchUser = async () => {
      try {
        const [userData, recommendations] = await Promise.all([
          getUser(),
          getRecommendations(),
        ]);
        console.log('userData:', userData);
        console.log('recommendations:', recommendations);
        if (!userData || userData.error) {
          dispatch({ type: 'logout' });
          navigate('/');
          return;
        }
        dispatch({ type: 'set_user', payload: userData });
        dispatch({ type: 'set_recommendations', payload: recommendations });
      } catch {
        dispatch({ type: 'logout' });
        navigate('/');
      }
    };
    fetchUser();
  }, []);
};
