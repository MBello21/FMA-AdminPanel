import logo from '../../../assets/react.svg';
import useGlobalReducer from '../../../hooks/useGlobalReducer';
import { UserDropDown } from './components/UserDropDown';

const Navbar = () => {
  const { store } = useGlobalReducer();

  return (
    <nav className="w-full bg-neutral-800 h-12.5 border-b border-gray-400">
      <div className="flex items-center justify-between h-full">
        <div className=" flex items-center mx-4 text-blue-400">
          <div className="mx-2 bg-sky-100 rounded-lg p-1.5 flex items-center ">
            <i className="fa-solid fa-cloud-bolt text-neutral-600 self-center"></i>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold text-white leading-none">
              MeteoAdmin
            </h1>
            <p className="m-0 p-0 text-xs text-gray-300">
              Módulo de recomendaciones
            </p>
          </div>
        </div>
        <div className="mx-4 text-end flex items-center h-full">
          <div className="mx-6">
            <p
              className={`leading-none 
              ${store.apiConnect ? 'text-green-300' : 'text-red-400'} text-xs`}
            >
              {store.apiConnect ? 'API conectada' : 'API desconectada'}
            </p>
          </div>
          <div className="border border-neutral-300 rounded-md px-2 text-center flex items-center relative">
            <img src={logo} alt="user" className="m-1" />
            <div className="mx-2">
              <h2 className="text-sm text-white">{store.user?.firstname}</h2>
              <p className="text-xs text-gray-300">{store.user?.category}</p>
            </div>
            <UserDropDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
