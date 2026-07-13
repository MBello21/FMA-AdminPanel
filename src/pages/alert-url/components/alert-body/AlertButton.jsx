import { DIC_TO_CAT } from '../../../../constants/dic-to-cat';
import { useAlertContext } from '../../../../context/alert-context/useAlertContext';

export const AlertButton = ({ field, freak, freakAlert }) => {
  const { handleTab, visited, isActive, hasAlert } = useAlertContext();
  return (
    <button
      onClick={() => handleTab(freak)}
      className={`flex-1 py-3 px-3 text-sm md:text-xl font-medium relative ${isActive === freak ? 'border-b-2 transition-all' : ''}`}
    >
      {hasAlert(freak).length > 0 && (
        <div
          className={`absolute top-0 md:top-0.5 right-0 md:right-3 ${!visited.has(freak) ? 'animate-pulse' : ''} ${DIC_TO_CAT[freakAlert?.level.toLowerCase()]?.color} mt-1 p-2 md:p-3 w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center`}
        ></div>
      )}
      {field}
    </button>
  );
};
