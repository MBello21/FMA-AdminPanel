import { Link, useLocation } from 'react-router';

const links = [
    {
        path: '/home/temperatura',
        label: 'Temperatura',
        icon: 'fa-temperature-half',
    },
    {
        path: '/home/viento',
        label: 'Viento',
        icon: 'fa-wind',
    },
    {
        path: '/home/precipitacion',
        label: 'Precipitación',
        icon: 'fa-cloud-rain',
    },
];

export const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <aside className="h-screen overflow-hidden bg-neutral-900 w-full text-gray-300 pe-5">
            <div className="mt-3 px-4">
                <h2 className="text-sm  text-neutral-500 uppercase tracking-normal">
                    Fenómenos
                </h2>
                <div className="flex flex-col mt-3">
                    {links.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-2 px-3 py-2 mt-3 rounded-md text-sm ${pathname.includes(item.path) ? 'bg-neutral-700 text-white border border-neutral-500 ' : 'text-gray-300 hover:bg-neutral-600'}`}
                        >
                            <i className={`fa-solid ${item.icon}`}></i>
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
};
