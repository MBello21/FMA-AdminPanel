import { useNavigate } from 'react-router';
import useGlobalReducer from '../../hooks/useGlobalReducer';
import { useState } from 'react';
import { login } from '../../services/apiBackend';

const errorBackend = {
  'All fields are required': 'Todos los campos son requeridos',
  'User does not exist': 'El usuario no existe',
  'Invalid user or password': 'Correo o contraseña no validos',
};

export const useAuth = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await login(user);
      if (data.error) {
        setError(errorBackend[data.error] || data.error);
        return;
      }
      dispatch({ type: 'set_token', payload: data.token });
      console.log('navegando a /home');
      navigate('/home');
    } catch {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    store,
    error,
    loading,

    handleChange,
    handleSubmit,
  };
};
