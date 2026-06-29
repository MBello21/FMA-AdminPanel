import { useRef, useState } from 'react';
import { postRecommendations } from '../../../../services/apiBackend';
import useGlobalReducer from '../../../../hooks/useGlobalReducer';

const errorBackend = {
  'All fields are required': 'Todos los campos son requeridos',
};

export const useForm = (onClose, freak) => {
  const { store, dispatch } = useGlobalReducer();
  const ref = useRef();
  const [recInput, setRecInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    freak: freak,
    cat: 1,
    title: '',
    recommendation_list: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await postRecommendations(form);
      console.log(data);
      if (data.error) {
        setError(errorBackend[data.error] || data.error);
        return;
      }
      dispatch({
        type: 'set_recommendations',
        payload: [...store.recommendations, data.recommendation],
      });
      onClose();
    } catch {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  };
  console.log(form);
  const handleChange = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]:
        event.target.name === 'cat'
          ? Number(event.target.value)
          : event.target.value,
    });
  };
  const handleRecInput = (event) => {
    event.preventDefault();
    setRecInput(event.target.value);
  };
  const addRec = () => {
    if (!recInput.trim()) return;
    if (editIndex !== null) {
      // sustituye en la posición original
      const newList = [...form.recommendation_list];
      newList[editIndex] = recInput.trim();
      setForm({ ...form, recommendation_list: newList });
      setEditIndex(null);
    } else {
      // añade al final
      setForm({
        ...form,
        recommendation_list: [...form.recommendation_list, recInput.trim()],
      });
    }
    setRecInput('');
  };

  const removeRec = (index) => {
    setForm({
      ...form,
      recommendation_list: form.recommendation_list.filter(
        (_, i) => i !== index
      ),
    });
  };

  const editRec = (index) => {
    setRecInput(form.recommendation_list[index]);
    setEditIndex(index);
  };
  console.log(form);

  return {
    form,
    recInput,
    loading,
    error,

    ref,
    addRec,
    removeRec,
    editRec,
    handleChange,
    handleRecInput,
    handleSubmit,
  };
};
