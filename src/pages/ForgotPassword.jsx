import { useState } from 'react';
import { forgotPass } from '../services/apiBackend';
import { useNavigate } from 'react-router';

export const ForgotPassword = () => {
  const [email, setEmail] = useState({
    email: '',
  });
  const [, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e, userData) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await forgotPass(userData);
      if (data.error) {
        setError(data);
        return;
      }
      setShow(true);
    } catch {
      setError('Error en la web');
    } finally {
      setLoading(false);
    }
  };
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
        {show ? (
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center py-4">
              <h2 className="text-neutral-100 text-2xl text-center font-semibold leading-relaxed">
                ¡Correo enviado!
              </h2>
              <p className="text-center text-base text-neutral-300  py-2">
                Un enlace para restablecer la contraseña ha sido enviado a la
                bandeja de entrada de su correo electrónico. Recuerde revisar la
                carpeta de spam.
              </p>
            </div>
            <div className="flex flex-col">
              <p className="p-3 font-bold text-neutral-300 text-start">
                Este enlace expirará en 15 minutos
              </p>
              <p className="p-3 font-semibold text-neutral-300 text-start">
                ¿No ha recibido nada?
              </p>
              <ul className="px-3 text-neutral-300 text-start">
                <li>
                  <span>• Revise la carpeta de spam.</span>
                </li>
                <li>
                  <span>• Espere unos minutos.</span>
                </li>
                <li>
                  <span>
                    • Compruebe que la dirección de correo es correcta.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="mt-5 py-2 px-3 rounded-md border hover:bg-neutral-900  border-neutral-800 text-neutral-300"
              >
                Volver a inicio de sesión
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <h2 className="text-neutral-100 text-2xl text-center font-semibold leading-relaxed">
                Restablecer contraseña
              </h2>
              <p className="text-center text-base text-neutral-300 w-[80%]">
                Ingrese su correo electrónico asociado para enviarle el enlace
                de recuperación
              </p>
            </div>

            <form
              action="submit"
              className="flex flex-col items-center"
              onSubmit={(e) => handleSubmit(e, email)}
            >
              <div className="w-[85%]">
                <label
                  htmlFor="email"
                  className="text-neutral-200 font-semibold"
                >
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  name="email"
                  value={email.email}
                  onChange={handleChange}
                  id="email"
                  className="w-full pr-10 py-1 mt-2 bg-neutral-900 text-neutral-300 px-2 rounded-md border"
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className={` ${loading ? 'bg-neutral-900' : ''} hover:bg-neutral-900 mt-5 py-2 px-3 rounded-md border border-neutral-800 text-neutral-300`}
                  disabled={loading}
                >
                  <i
                    class={`fa-solid ${loading ? 'fa-spinner animate-spin ' : ''} mx-2`}
                  ></i>
                  {loading ? 'Enviando...' : 'Enviar enlace de recuperación'}
                </button>
              </div>
            </form>
          </>
        )}

        <p className="text-xs text-center text-neutral-300 mt-2">
          © {new Date().getFullYear()}{' '}
          <a href="http://mgbdevops.es ">mgbdevops.es </a>· Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};
