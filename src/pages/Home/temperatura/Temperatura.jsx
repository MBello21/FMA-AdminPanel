import { RecommendationHeader } from './recommendations/components/RecommendationHeader';
import { CardList } from './recommendations/components/CardList';
import { CATEGORIES } from '../../../constants/categories';
import { Modal } from './recommendations/components/modal/Modal';
import { useState } from 'react';

const Temperatura = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-full flex flex-col  bg-neutral-800 min-h-screen h-auto py-4">
      <RecommendationHeader
        freak={'Temperatura'}
        onNew={() => setIsOpen(true)}
      />
      {isOpen && <Modal onClose={() => setIsOpen(false)} freak="temperatura" />}
      <CardList categories={CATEGORIES} freak={'temperatura'} />
    </div>
  );
};
export default Temperatura;
