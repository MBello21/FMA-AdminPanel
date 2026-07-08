import { AlertNavbar } from './AlertNavbar';

export const AlertBody = ({ alert }) => {
  if (!alert) {
    return (
      <div className="flex flex-col bg-white h-full w-full max-w-md md:max-w-2xl shadow-2xl rounded-md overflow-hidden ">
        <div className=" h-full">
          <AlertNavbar />
          <div className="h-50 flex justify-center items-center">
            <h2 className="text-base lg:text-xl font-semibold">
              No hay alertas activas para este fenómeno
            </h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col bg-white h-full w-full max-w-md md:max-w-2xl shadow-2xl rounded-md overflow-hidden ">
      <div className=" h-full">
        <AlertNavbar />
        <h2 className=" p-2 text-base font-bold text-slate-800 pb-3 border-b border-slate-200">
          Medidas ante temperaturas altas
        </h2>
        <div className="text-sm md:text-xl  py-3 px-2 ">
          Medidas preventivas
        </div>
        <div className="text-neutral-900 mb-2">
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
        {alert.recommendations.work_recommendation.filter(
          (item) => item.type === 'precaucion'
        ).length > 0 && (
          <div className="text-neutral-900 mb-2">
            <h3 className="px-3 py-2 font-bold">
              <i className="fa-solid fa-circle-check me-1 text-amber-600"></i>
              Medidas preventivas generales y revisión de EPIs
            </h3>
            <ul className="px-5 py-2">
              {alert.recommendations.work_recommendation
                .filter((item) => item.type === 'precaucion')
                .map((item) => (
                  <li className="flex gap-4" key={item.id}>
                    <span className="text-amber-600 font-semibold">•</span>
                    <p>{item.work_recommendation}</p>
                  </li>
                ))}
            </ul>
          </div>
        )}
        {alert.recommendations.work_recommendation.filter(
          (item) => item.type === 'prohibicion'
        ).length > 0 && (
          <div className="text-neutral-900 mb-2">
            <h3 className="px-3 py-2 font-bold">
              <i className="fa-solid fa-circle-check me-1 text-red-600"></i>
              Medidas preventivas generales y revisión de EPIs
            </h3>
            <ul className="px-5 py-2">
              {alert.recommendations.work_recommendation
                .filter((item) => item.type === 'prohibicion')
                .map((item) => (
                  <li className="flex gap-4" key={item.id}>
                    <span className="text-red-600 font-semibold">•</span>
                    <p>{item.work_recommendation}</p>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
