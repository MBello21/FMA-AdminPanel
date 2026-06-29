import { Card } from './Card';

export const CardList = ({ categories, freak }) => {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-4 px-8">
      <Card
        categories={categories}
        freak={freak}
      />
    </div>
  );
};
