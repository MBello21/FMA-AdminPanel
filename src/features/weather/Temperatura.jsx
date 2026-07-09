import { useState } from 'react';
import { CATEGORIES } from '../../constants/categories';
import { RecommendationHeader } from './components/RecommendationHeader';
import { CardList } from './components/CardList';
import { Modal } from './components/modal/Modal';

const Temperatura = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-full flex flex-col  bg-neutral-800 max-h-screen min-h-full py-2">
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
