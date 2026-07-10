import { useNavigate, useSearchParams } from 'react-router';
import { resetPass } from '../services/apiBackend';
import { useState } from 'react';

const rules = [
  { id: 'length', test: (v) => v.length >= 8, label: 'Mínimo 8 caracteres' },
  { id: 'upper', test: (v) => /[A-Z]/.test(v), label: 'Una mayúscula' },
  { id: 'lower', test: (v) => /[a-z]/.test(v), label: 'Una minúscula' },
  { id: 'number', test: (v) => /\d/.test(v), label: 'Un número' },
  {
    id: 'special',
    test: (v) => /[^A-Za-z0-9]/.test(v),
    label: 'Un carácter especial',
  },
];

export const useResetPass = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [touched, setTouched] = useState({});
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [pass, setPass] = useState({
    password: '',
    confirmPass: '',
  });
  const validation = rules.map((r) => ({
    ...r,
    passed: r.test(pass.password),
  }));
  const passedCount = validation.filter((r) => r.passed).length;

  const allRulesPass = passedCount === rules.length;
  const confirmMatch = pass.password === pass.confirmPass;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPass({ ...pass, [name]: value });
    setTouched((prev) => ({ ...prev, [name]: true }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ password: true, confirmPass: true });

    if (!allRulesPass) {
      setError('La contraseña no cumple todos los requisitos');
      return;
    }
    if (!confirmMatch) {
      setError('Las contraseñas no coinciden');
      return;
    }
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
    passedCount,
    touched,
    validation,
    allRulesPass,
    confirmMatch,
    handleChange,
    handleSubmit,
  };
};
