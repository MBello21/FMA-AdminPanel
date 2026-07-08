import { DIC_TO_CAT } from '../../../constants/dic-to-cat';

export const AlertHeader = ({ alert }) => {
  const catInfo = alert ? DIC_TO_CAT[alert.level] : null;

  return (
    <div
      className={`flex flex-col justify-center w-full max-w-md md:max-w-2xl items-center ${catInfo?.color || 'bg-sky-200'} ${catInfo?.textColor || 'text-sky-900'} h-[40%] rounded-t-md`}
    >
      <h3 className="text-md md:text-2xl m-2">
        Coex CA03 <span> · </span> Puentes de Cádiz
      </h3>
      <div>
        <i className="fa-solid fa-circle-exclamation text-5xl md:text-6xl animate-pulse m-2"></i>
      </div>
      <div className="m-2">
        <h1>{catInfo?.title || 'No hay alertas activas'}</h1>
      </div>
      <div className="m-2">
        <p className="text-xs">{alert?.description || 'Sin alertas'}</p>
      </div>
    </div>
  );
};
