import { useParams } from 'react-router';
import { RecommendationHeader } from '../recommendations/components/RecommendationHeader';
import { RecommendationsNavbar } from '../recommendations/components/RecommendationsNavbar';
import { CardList } from '../recommendations/components/CardList';
import { CATEGORIES } from '../../../constants/categories';
import { Modal } from '../recommendations/components/modal/Modal';
import { useState } from 'react';

const Viento = () => {
  const { cat } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const catActive = cat ?? null;
  return (
    <div className="w-full max-w-full flex flex-col  bg-neutral-800 h-210">
      <RecommendationHeader freak={'Viento'} onNew={() => setIsOpen(true)} />
      {isOpen && <Modal onClose={() => setIsOpen(false)} freak="viento" />}
      <RecommendationsNavbar
        categories={CATEGORIES}
        catActive={catActive}
        basePath={'/home/viento'}
      />
      <CardList categories={CATEGORIES} freak={'viento'} />
    </div>
  );
};

export default Viento;
