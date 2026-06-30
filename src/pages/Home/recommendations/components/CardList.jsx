import { Card } from './Card';

export const CardList = ({ categories, freak, catActive }) => {
  return (
    <div
      className={`${catActive === null ? 'grid grid-cols-2 gap-4 px-8 items-start' : 'flex flex-col gap-4 px-8'}`}
    >
      <Card categories={categories} freak={freak} catActive={catActive} />
    </div>
  );
};
