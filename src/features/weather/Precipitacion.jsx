import { useState } from 'react';
import { CATEGORIES } from '../../constants/categories';
import { RecommendationHeader } from './components/RecommendationHeader';
import { CardList } from './components/CardList';
import { Modal } from './components/modal/Modal';

const Precipitacion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-full flex flex-col  bg-neutral-800 max-h-screen min-h-full py-2">
      <RecommendationHeader
        freak={'Precipitacion'}
        onNew={() => setIsOpen(true)}
      />
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} freak="precipitacion" />
      )}
      <CardList categories={CATEGORIES} freak={'precipitacion'} />
    </div>
  );
};
export default Precipitacion;
