import { useState } from 'react';
import useGlobalReducer from '../../../../hooks/useGlobalReducer';
import { DeleteModal } from './delete-modal/DeleteModal';
import { deleteRecommendations } from '../../../../services/apiBackend';
import { Link } from 'react-router';

export const Card = ({ categories, freak, catActive }) => {
  const { store, dispatch } = useGlobalReducer();
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = async () => {
    const data = await deleteRecommendations(deleteId);

    if (!data.error) {
      dispatch({
        type: 'set_recommendations',
        payload: store.recommendations.filter((rec) => rec.id !== deleteId),
      });
      setDeleteId(null);
    }
  };
  console.log(store.recommendation);

  return (
    <>
      {deleteId !== null && (
        <DeleteModal
          onClose={() => setDeleteId(null)}
          onConfirm={handleDelete}
          confirmLabel="Eliminar"
        />
      )}

      {store.recommendations
        .filter(
          (rec) =>
            rec.freak === freak &&
            (catActive === null || String(rec.cat) === String(catActive))
        )
        .map((item) => {
          const catInfo = categories.find((i) => String(i.value) === item.cat);
          return (
            <div
              key={item.id}
              className={`flex flex-col relative px-3 py-2 border border-gray-500 rounded-md ${
                catActive === null ? 'max-h-60 overflow-hidden' : ''
              }`}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`${catInfo?.color} leading-none px-3 py-1 rounded-full text-sm`}
                >
                  {catInfo?.label}
                </h3>
                <div className="flex gap-2">
                  <Link to={`/home/temperatura/edit/${item.id}`}>
                    <button className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </Link>
                  <div>
                    <button
                      onClick={() => setDeleteId(item.id)}
                      className="px-2 py-1 border border-gray-500 text-gray-300 rounded-md"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-gray-300 font-semibold">{item.title}</div>
              <div className="px-2 py-4">
                <div>
                  <h2 className="text-gray-300 mb-1">
                    {Number(item.cat) === 4 || Number(item.cat) === 5
                      ? 'Recomendaciones concretas:'
                      : 'Medidas Preventivas'}
                  </h2>
                  <ul className="list-disc list-inside text-gray-300">
                    {item.recommendation.map((i) => (
                      <li key={i.id}>{i.recommendation}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {item.work_recommendation.filter((w) => w.type === 'precaucion')
                .length > 0 && (
                <div className="px-2 py-4">
                  <div>
                    <h2 className="text-gray-300">Precaución con:</h2>
                    <ul className="list-disc list-inside text-gray-300">
                      {item.work_recommendation
                        .filter((w) => w.type === 'precaucion')
                        .map((i) => (
                          <li key={i.id}>{i.work_recommendation}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
              {item.work_recommendation.filter((w) => w.type === 'prohibicion')
                .length > 0 && (
                <div className="px-2 py-4">
                  <div>
                    <h2 className="text-gray-300">
                      Prohibición de las siguientes labores:
                    </h2>
                    <ul className="list-disc list-inside text-gray-300">
                      {item.work_recommendation
                        .filter((w) => w.type === 'prohibicion')
                        .map((i) => (
                          <li key={i.id}>{i.work_recommendation}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}

              {catActive === null && (
                <Link
                  to={`${item.cat}`}
                  className="flex justify-end absolute bottom-0 left-0 right-0 z-10 m-4"
                >
                  <button className="text-gray-300 bg-neutral-900 px-2 py-1 rounded-md border hover:bg-neutral-700 text-xs ">
                    Ver más
                  </button>
                </Link>
              )}

              {catActive === null && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-neutral-800 to-transparent" />
              )}
            </div>
          );
        })}
    </>
  );
};
