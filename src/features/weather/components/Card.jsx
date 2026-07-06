import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import useGlobalReducer from '../../../context/store-context/useGlobalReducer'
import { DeleteModal } from './delete-modal/DeleteModal';
import { deleteRecommendations } from '../../../services/apiBackend';

export const Card = ({ categories, freak }) => {


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

    return (
        <>
            {deleteId !== null && (
                <DeleteModal
                    onClose={() => setDeleteId(null)}
                    onConfirm={handleDelete}
                    confirmLabel="Eliminar"
                />
            )}

            {store.recommendations?.filter(item => item.freak === freak)
                .map((item) => {
                    const catInfo = categories.find((i) => String(i.value) === item.cat);
                    const riskTitles = catInfo?.titlesByRisk?.[freak];
                    const generalTitle = riskTitles?.general
                    const precaucionTitle = riskTitles?.precaucion
                    const prohibicionTitle = riskTitles?.prohibicion
                    return (
                        <div
                            key={item.id}
                            className="flex flex-col relative px-3 py-2 border border-gray-500 rounded-md h-60 max-h-60 overflow-hidden"
                        >
                            <div className="flex justify-between items-center">
                                <h3
                                    className={`${catInfo?.color} leading-none px-3 py-1 rounded-full text-sm`}
                                >
                                    {catInfo?.label}
                                </h3>
                                <div className="flex gap-2">
                                    <Link to={`/home/${freak}/${item.cat}`}>
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
                                        {generalTitle}
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
                                            <h2 className="text-gray-300">{precaucionTitle}</h2>
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
                                                {prohibicionTitle}
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
                            <Link
                                to={`${item.cat}`}
                                className="flex justify-end absolute bottom-0 left-0 right-0 z-10 m-4"
                            >
                                <button className="text-gray-300 bg-neutral-900 px-2 py-1 rounded-md border hover:bg-neutral-700 text-xs ">
                                    Ver más
                                </button>
                            </Link>
                            <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-neutral-800 to-transparent" />
                        </div>
                    );
                })}
        </>
    );
};
