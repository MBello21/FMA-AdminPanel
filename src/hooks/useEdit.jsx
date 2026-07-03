import { useState } from 'react';
import useGlobalReducer from '../context/store-context/useGlobalReducer';
import { getRecommendations, patchFreak } from '../services/apiBackend';

const errorBackend = {
    'Freak not found': 'Fenómeno no encontrado',
};

export const useEdit = (initialData) => {
    const { store, dispatch } = useGlobalReducer();

    const [show, setShow] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [recInput, setRecInput] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editForm, setEditForm] = useState({
        freak: initialData.freak,
        cat: initialData.cat,
        title: initialData.title,
        recommendation_list:
            initialData.recommendation.map(
                (r) => r.recommendation
            ),
        work_recommendation_list:
            initialData.work_recommendation.filter(r => r.type === 'precaucion').map(
                (r) => r.work_recommendation
            ),
        prohibition_list: initialData.work_recommendation.filter(r => r.type === 'prohibicion').map(
            (r) => r.work_recommendation
        ),
    });
    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleRecInput = (event, setInput) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const addRec = (field, input, setInput, editIdx, setEditIdx) => {
        console.log('field:', field);
        console.log('input:', input);
        console.log('editForm[field]:', editForm[field]);
        if (!input.trim()) return;
        if (editIdx !== null) {
            const newList = [...editForm[field]];
            newList[editIdx] = input.trim();
            setEditForm({ ...editForm, [field]: newList });
            setEditIdx(null);
        } else {
            setEditForm({
                ...editForm,
                [field]: [...editForm[field], input.trim()],
            });
        }
        setInput('');
    };
    const removeRec = (field, index) => {
        setEditForm({
            ...editForm,
            [field]: editForm[field].filter((_, i) => i !== index),
        });
    };
    const editRec = (field, setEditIdx, setInput, index) => {
        setInput(editForm[field][index]);
        setEditIdx(index);
    };

    const handleSubmit = async (e, onSuccess) => {
        e.preventDefault()
        setLoading(true)
        try {
            const data = await patchFreak(initialData.id, editForm)
            if (data.error) {
                setError(errorBackend[data.error] || data.error)
            }
            const freshRecommendations = await getRecommendations();
            dispatch({
                type: 'set_recommendations',
                payload: freshRecommendations
            })
            onSuccess()
        } catch {
            setError('Error de conexión')
        } finally {
            setLoading(false);
        }
    }


    return {
        editForm,
        setEditForm,
        show,
        loading,
        setShow,
        recInput,
        setRecInput,
        editIndex,
        setEditIndex,
        handleChange,
        handleSubmit,
        addRec,
        removeRec,
        editRec,
        handleRecInput,
    };
};
