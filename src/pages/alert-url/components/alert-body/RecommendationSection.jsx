export const RecommendationSection = ({
  title,
  items,
  colorClass,
  field,
  icon,
}) => {
  return (
    <div className="text-neutral-900 mb-2">
      <h3 className="px-3 py-2 font-bold">
        <i className={`fa-solid ${icon} me-1 ${colorClass}`}></i>
        {title}
      </h3>
      <ul className="px-5 py-2">
        {items.map((item) => (
          <li className="flex gap-4" key={item.id}>
            <span className={`${colorClass} font-semibold`}>•</span>
            <p>{item[field]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
