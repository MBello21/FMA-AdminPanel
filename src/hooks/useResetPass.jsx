import { useNavigate, useSearchParams } from 'react-router';
import { resetPass } from '../services/apiBackend';
import { useState } from 'react';

export const useResetPass = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [pass, setPass] = useState({
    password: '',
    confirmPass: '',
  });

  const handleChange = (e) => {
    setPass({
      ...pass,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await resetPass(pass, token);
      if (data.error) {
        setError(data);
        return;
      }
      navigate('/');
    } catch {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return {
    token,
    navigate,
    error,
    setError,
    loading,
    setLoading,
    showPass,
    setShowPass,
    showConfirmPass,
    setShowConfirmPass,
    pass,
    handleChange,
    handleSubmit,
  };
};
