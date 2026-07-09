import { useEffect, useRef, useState } from 'react';
import useGlobalReducer from '../../context/store-context/useGlobalReducer';
import { useNavigate } from 'react-router';

export const UserDropDown = () => {
  const { store } = useGlobalReducer();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <div ref={ref}>
      <i
        className="text-white fa-solid fa-ellipsis-vertical"
        onClick={() => setShow(!show)}
      ></i>
      {show && (
        <div className="absolute z-10 top-full right-0 flex flex-col items-center justify-center  bg-neutral-600 border border-neutral-300 rounded-md p-2 mt-2 w-full">
          <p className="text-sm text-white p-2 border-b w-full">
            {store.user?.email}
          </p>
          <button
            className="text-sm text-red-400 hover:text-red-500 flex justify-center items-center mt-3"
            onClick={logOut}
          >
            <i className="fa-solid fa-right-from-bracket mx-2"></i>
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};
