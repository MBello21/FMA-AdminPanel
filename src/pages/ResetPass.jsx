import { useResetPass } from '../hooks/useResetPass';

function getStrength(passed) {
  if (passed <= 1) return { label: 'Débil', color: '#ef4444', width: '20%' };
  if (passed <= 2) return { label: 'Débil', color: '#f97316', width: '40%' };
  if (passed <= 3) return { label: 'Media', color: '#eab308', width: '60%' };
  if (passed <= 4) return { label: 'Buena', color: '#22d3ee', width: '80%' };
  return { label: 'Fuerte', color: '#22c55e', width: '100%' };
}

export const ResetPass = () => {
  const {
    loading,
    showPass,
    setShowPass,
    showConfirmPass,
    setShowConfirmPass,
    pass,
    touched,
    error,
    passedCount,
    validation,
    handleSubmit,
    handleChange,
  } = useResetPass();
  const strength = getStrength(pass.password ? passedCount : 0);
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
          {touched.password && pass.password && (
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  height: 4,
                  borderRadius: 2,
                  background: 'var(--border, #252525)',
                  overflow: 'hidden',
                  marginBottom: 6,
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: strength.width,
                    background: strength.color,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>
              <span
                style={{ fontSize: 12, color: strength.color, fontWeight: 500 }}
              >
                {strength.label}
              </span>
            </div>
          )}
          {touched.password && (
            <ul className="list-none p-0 m-0 mb-4 flex flex-col gap-1 w-[85%] px-7">
              {validation.map((rule) => (
                <li
                  key={rule.id}
                  className={`text-xs flex items-center gap-2 ${
                    rule.passed ? 'text-green-400' : 'text-neutral-300'
                  }`}
                >
                  <span>{rule.passed ? '✓' : '·'}</span>
                  {rule.label}
                </li>
              ))}
            </ul>
          )}
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

          {error && (
            <span className="text-red-900 bg-red-300 px-2 py-1 rounded-md text-md">
              {error}
            </span>
          )}
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
