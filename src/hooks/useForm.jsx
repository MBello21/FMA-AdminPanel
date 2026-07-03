import { useEffect, useRef, useState } from 'react';
import { postRecommendations } from '../services/apiBackend';
import useGlobalReducer from '../context/store-context/useGlobalReducer';

const errorBackend = {
    'All fields are required': 'Todos los campos son requeridos',
};

export const useForm = (onClose, freak, id) => {
    const { store, dispatch } = useGlobalReducer();
    const ref = useRef();
    const [recInput, setRecInput] = useState('');
    const [workRecInput, setWorkRecInput] = useState('');
    const [prohRecInput, setProhRecInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editWorkIndex, setEditWorkIndex] = useState(null);
    const [editProhIndex, setEditProhIndex] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        freak: freak,
        cat: 1,
        title: '',
        recommendation_list: [],
        work_recommendation_list: [],
        prohibition_list: [],
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
    const handleRecInput = (event, setInput) => {
        event.preventDefault();
        setInput(event.target.value);
    };
    const addRec = (field, input, setInput, editIdx, setEditIdx) => {
        if (!input.trim()) return;
        if (editIdx !== null) {
            const newList = [...form[field]];
            newList[editIdx] = input.trim();
            setForm({ ...form, [field]: newList });
            setEditIdx(null);
        } else {
            // añade al final
            setForm({
                ...form,
                [field]: [...form[field], input.trim()],
            });
        }
        setInput('');
    };

    const removeRec = (field, index) => {
        setForm({
            ...form,
            [field]: form[field].filter((_, i) => i !== index),
        });
    };

    const editRec = (field, setEditIdx, setInput, index) => {
        setInput(form[field][index]);
        setEditIdx(index);
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                if (form.title || form.recommendation_list.length > 0) {
                    if (
                        window.confirm('¿Seguro que quieres salir? Perderás los datos.')
                    ) {
                        onClose();
                    }
                } else {
                    onClose();
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, onClose, form]);

    return {
        form,
        recInput,
        setRecInput,
        workRecInput,
        setWorkRecInput,
        prohRecInput,
        setProhRecInput,
        editIndex,
        setEditIndex,
        editWorkIndex,
        setEditWorkIndex,
        editProhIndex,
        setEditProhIndex,
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
