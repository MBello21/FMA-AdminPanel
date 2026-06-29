import useGlobalReducer from '../../../../hooks/useGlobalReducer';

export const Card = ({ categories, freak }) => {
  const { store } = useGlobalReducer();
  return (
    <>
      {store.recommendations
        .filter((rec) => rec.freak === freak)
        .map((item) => {
          const catInfo = categories.find((i) => String(i.value) === item.cat);
          return (
            <div
              key={item.id}
              className="flex flex-col px-3 py-2 border border-gray-500 rounded-md"
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`${catInfo?.color} leading-none px-3 py-1 rounded-full text-sm`}
                >
                  {catInfo?.label}
                </h3>
                <div className="flex gap-2">
                  <div>
                    <button className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                  <div>
                    <button className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-gray-300 font-semibold">{item.title}</div>
              <div>
                <ul className="list-disc list-inside text-gray-300">
                  {item.recommendation.map((i) => (
                    <li key={i.id}>{i.recommendation}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
};
