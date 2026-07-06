export const getHealthy = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/health`);

    const data = await response.json();
    return data.msg === 'ok';
};

export const login = async (user) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/signin`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
};

const fetchWithAuth = async (url, options = {}) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
        ...options,
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
    if (response.status === 401 || response.status === 422) {
        return { error: 'Unauthorized' };
    }
    const data = await response.json();
    return data;
};

export const getDailyAlerts = async (date) => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/alerts/recommendation?date=${date}`)
    const data = await response.json()
    return data
}

export const getUser = () => fetchWithAuth('/user');
export const getRecommendations = () => fetchWithAuth('/recommendations');
export const postRecommendations = (data) =>
    fetchWithAuth('/recommendations', {
        method: 'POST',
        body: JSON.stringify(data),
    });
export const deleteRecommendations = (id) =>
    fetchWithAuth(`/ freak / ${id}`, {
        method: 'DELETE',
    });
export const getFreak = (id) => fetchWithAuth(`/ freak / ${id}`);
export const patchFreak = (id, data) => fetchWithAuth(`/ recommendation / ${id}`,
    {
        method: 'PATCH',
        body: JSON.stringify(data)
    })
