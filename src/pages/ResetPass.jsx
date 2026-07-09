import { useResetPass } from '../hooks/useResetPass';

export const ResetPass = () => {
  const {
    loading,
    showPass,
    setShowPass,
    showConfirmPass,
    setShowConfirmPass,
    pass,
    handleSubmit,
    handleChange,
  } = useResetPass();

  return (
    <div className="flex flex-col justify-center items-center   min-h-screen bg-neutral-900">
      <div className="flex flex-col justify-center  bg-neutral-500  p-6 rounded-md border border-neutral-300 gap-3 w-full max-w-lg">
        <div className=" flex items-center mx-4 mb-3 pb-4 border-b">
          <div className="mx-2 bg-sky-100 rounded-lg p-1.5 flex items-center ">
            <i className="fa-solid fa-cloud-bolt text-neutral-600 self-center"></i>
          </div>

          <div>
            <h1 className="text-lg font-semibold text-white leading-none">
              FMA Admin Panel
            </h1>
            <p className="m-0 p-0 text-xs text-gray-300">
              Módulo de recomendaciones
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-neutral-100 text-2xl text-center font-semibold leading-relaxed">
            Actualice la contraseña
          </h2>
          <p className="text-center text-base text-neutral-300 w-[80%]">
            Por favor, introduzca la contraseña y su confirmacion para poder
            acceder a su cuenta.
          </p>
        </div>
        <form
          action="submit"
          className="flex flex-col items-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col px-7 gap-1 mb-4 w-[85%]">
            <label htmlFor="password" className="my-1  text-md text-gray-300">
              Contraseña
            </label>
            <div className="relative">
              <input
                className="w-full pr-10 py-1 bg-neutral-900 text-white px-2 rounded-md border border-neutral-300"
                id="password"
                type={showPass ? 'text' : 'password'}
                name="password"
                value={pass.password}
                onChange={handleChange}
              />
              <i
                className={`${showPass ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'} absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                onClick={() => setShowPass(!showPass)}
              ></i>
            </div>
          </div>
          <div className="flex flex-col px-7 gap-1 mb-4 w-[85%]">
            <label
              htmlFor="confirmPass"
              className="my-1  text-md text-gray-300"
            >
              Confirmar contraseña
            </label>
            <div className="relative">
              <input
                className="w-full pr-10 py-1 bg-neutral-900 text-white px-2 rounded-md border border-neutral-300"
                id="confirmPass"
                type={showConfirmPass ? 'text' : 'password'}
                name="confirmPass"
                value={pass.confirmPass}
                onChange={handleChange}
              />
              <i
                className={`${showConfirmPass ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye'} absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer`}
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              ></i>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className={` hover:bg-neutral-900 mt-5 py-2 px-3 rounded-md border border-neutral-800 text-neutral-300 ${loading ? 'bg-neutral-900' : ''}`}
              disabled={loading}
            >
              {loading && (
                <i className="fa-solid fa-spinner mx-2 animate-spin"></i>
              )}
              Guardar y acceder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
