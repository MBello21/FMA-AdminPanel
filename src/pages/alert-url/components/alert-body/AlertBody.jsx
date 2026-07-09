import { AlertNavbar } from './AlertNavbar';
import { AlertRecList } from './AlertRecList';

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
        <AlertRecList alert={alert} />
      </div>
    </div>
  );
};
