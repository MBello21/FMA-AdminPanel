import { useState } from 'react';

export const useEdit = (initialData) => {
  const [show, setShow] = useState(true);
  const [recInput, setRecInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    freak: initialData.freak,
    cat: initialData.cat,
    title: initialData.title,
    recommendation_list: initialData.recommendation.map(
      (r) => r.recommendation
    ),
    work_recommendation_list: initialData.work_recommendation_list,
    prohibition_list: initialData.prohibition_list,
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
  return {
    editForm,
    setEditForm,
    show,
    setShow,
    recInput,
    setRecInput,
    editIndex,
    setEditIndex,
    handleChange,
    addRec,
    removeRec,
    editRec,
    handleRecInput,
  };
};
