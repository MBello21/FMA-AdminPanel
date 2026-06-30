import { Link } from 'react-router';

export const RecommendationsNavbar = ({ categories, catActive, basePath }) => {
  return (
    <nav className=" flex gap-6 p-5 mt-8">
      {categories.map((item) => (
        <Link
          className={`text-sm px-2 py-1 rounded-full ${String(catActive) === String(item.value) ? 'bg-gray-300 text-neutral-900' : 'border border-gray-300 text-gray-300'} `}
          key={item.label}
          to={item.value ? `${basePath}/${item.value}` : '/home/temperatura'}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
