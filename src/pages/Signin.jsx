import { Link, useNavigate } from 'react-router';
import useGlobalReducer from '../hooks/useGlobalReducer';
import { login } from '../services/apiBackend';
import { useState } from 'react';

export const Signin = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event, user) => {
    event.preventDefault();
    try {
      const data = await login(user);
      if (data.error) {
        setError(data.error);
        return;
      }
      dispatch({ type: 'set_token', payload: data.token });
      navigate('/home');
    } catch {
      setError('Error de conexión');
      return;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  min-h-screen bg-neutral-900">
      <div>{error}</div>
      <div className="flex flex-col justify-center  bg-neutral-500 w-96 p-5 rounded-md border border-neutral-300 gap-3">
        <div className=" flex items-center mx-4 mb-5 pb-4 border-b">
          <div className="mx-2 bg-sky-100 rounded-lg p-1.5 flex items-center ">
            <i className="fa-solid fa-cloud-bolt text-neutral-600 self-center"></i>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white leading-none">
              MeteoAdmin
            </h1>
            <p className="m-0 p-0 text-xs text-gray-300">
              Módulo de recomendaciones
            </p>
          </div>
        </div>
        <form onSubmit={(event) => handleSubmit(event, user)}>
          <div className="flex flex-col mx-7 gap-1 mb-4">
            <label htmlFor="" className="my-1  text-sm text-gray-300">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                className="w-full pr-10 py-1 bg-neutral-900 text-white px-2 rounded-md"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <i className="fa-solid fa-envelope absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div className="flex flex-col mx-7 gap-1 mb-4">
            <label htmlFor="" className="my-1  text-sm text-gray-300">
              Contraseña
            </label>
            <div className="relative">
              <input
                className="w-full pr-10 py-1 bg-neutral-900 text-white px-2 rounded-md"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <i className="fa-solid fa-eye absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div className="flex justify-end">
            <Link to="/home" className="text-sm mx-7 text-end">
              ¿Olvidate tu contraseña?
            </Link>
          </div>
          <div className="mx-7 my-4 flex justify-center">
            <button
              className="bg-neutral-900 w-full border border-neutral-100 rounded-md p-1 text-gray-100 mt-3 hover:bg-neutral-700"
              type="submit"
            >
              <i className="fa-solid fa-right-to-bracket mx-2"></i>
              Iniciar sesión
            </button>
          </div>
        </form>
        <div className="flex justify-center">
          <p className="text-sm">
            <i
              className={`fa-solid fa-circle mx-2 ${store.apiConnect ? 'text-green-500' : 'text-red-600'}`}
            ></i>
            Api conectada
          </p>
        </div>
      </div>
    </div>
  );
};
