import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { getDailyAlerts } from '../services/apiBackend';
import useGlobalReducer from '../context/store-context/useGlobalReducer';

const PARAM_FILTER = {
  temperatura: ['temperatura'],
  viento: ['viento', 'rachas'],
  precipitacion: ['precipitación', 'lluvia', 'tormenta'],
};

const DIC_TO_CAT = {
  amarillo: 'CAT. III - Alerta amarilla',
  'precaución (riesgo muy bajo)': 'CAT I. - RIEGO MUY BAJO',
};

export const AlertRec = () => {
  const { store, dispatch } = useGlobalReducer();
  const [searchParams] = useSearchParams();
  const date =
    searchParams.get('date') || new Date().toISOString().split('T')[0];
  const [isActive, setIsActive] = useState('temperatura');
  useEffect(() => {
    const dailyAlerts = async () => {
      const data = await getDailyAlerts(date);
      dispatch({ type: 'set_alerts', payload: data });
      console.log(data);
    };
    dailyAlerts();
  }, [date, dispatch]);
  const filtered = store.alerts.filter((i) =>
    PARAM_FILTER[isActive].some((key) =>
      i.description.toLowerCase().includes(key)
    )
  );
  const hasAlert = (freak) =>
    store.alerts.filter((i) =>
      PARAM_FILTER[freak].some((key) =>
        i.description.toLowerCase().includes(key)
      )
    );
  console.log(hasAlert('precipitacion').length);

  return (
    <>
      {filtered.map((alert) => (
        <div
          className="flex justify-center bg-neutral-100 h-screen p-3"
          key={alert.id}
        >
          <div className="flex flex-col bg-white h-full w-full max-w-md md:max-w-2xl shadow-2xl rounded-md overflow-hidden text-amber-950 ">
            <div className="flex flex-col justify-center items-center bg-green-200 h-[40%] rounded-t-md">
              <h3 className="text-md md:text-2xl m-2">
                Coex CA03
                <span> · </span>
                Puentes de Cádiz
              </h3>
              <div>
                <i className="fa-solid fa-circle-exclamation text-5xl md:text-6xl animate-pulse m-2"></i>
              </div>
              <div className="m-2">
                <h1>{DIC_TO_CAT[alert.level]}</h1>
              </div>
              <div className="m-2">
                <p className="text-xs">{alert.description}</p>
              </div>
            </div>
            <div className=" h-full">
              <nav className="flex border-b border-slate-200 bg-slate-50">
                <button
                  onClick={() => setIsActive('temperatura')}
                  type="button"
                  className="flex-1 py-3 px-3 text-sm md:text-xl font-medium relative"
                >
                  {hasAlert('temperatura') && (
                    <div className="absolute top-0 md:top-0.5 right-0 md:right-3 bg-neutral-500 mt-1 p-2 md:p-3 w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                      <p className="">!</p>
                    </div>
                  )}
                  Temperatura
                </button>
                <button
                  onClick={() => setIsActive('viento')}
                  className="flex-1 py-3 px-3 text-sm md:text-xl font-medium border-b-2 transition-all relative"
                >
                  {hasAlert('viento').length > 0 && (
                    <div className="absolute top-0 md:top-0.5 right-0 md:right-3 bg-neutral-500 mt-1 p-2 md:p-3 w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                      <p className="">!</p>
                    </div>
                  )}
                  Viento
                </button>
                <button className="flex-1 py-3 px-3 text-sm md:text-xl font-medium relative">
                  {hasAlert('precipitacion').length > 0 && (
                    <div className="absolute top-0 md:top-0.5 right-0 md:right-3 bg-neutral-500 p-2 md:p-3 w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center">
                      <p className="">!</p>
                    </div>
                  )}
                  Precipitación
                </button>
              </nav>
              <h2 className=" p-2 text-base font-bold text-slate-800 pb-3 border-b border-slate-200">
                Medidas ante temperaturas altas
              </h2>
              <div className="text-sm md:text-xl  py-3 px-2 ">
                Medidas preventivas
              </div>
              <div className="text-neutral-900">
                <h3 className="px-3 py-2 font-bold">
                  <i className="fa-solid fa-circle-check me-1 text-green-600"></i>
                  Medidas preventivas generales y revisión de EPIs
                </h3>
                <ul className="px-5 py-2">
                  {alert.recommendations.recommendation.map((item) => (
                    <li className="flex gap-4" key={item.id}>
                      <span className="text-green-600 font-semibold">•</span>
                      <p>{item.recommendation}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
