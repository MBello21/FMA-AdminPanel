export const getHealthy = async () => {
  const response = await fetch('http://127.0.0.1:5000/api/health');

  const data = await response.json();
  return data.msg === 'ok';
};

export const login = async (user) => {
  const response = await fetch('http://127.0.0.1:5000/api/signin', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
};

export const getUser = async () => {
  const response = await fetch('http://127.0.0.1:5000/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')} `,
    },
  }); 
  const data = await response.json();
  return data;
};
