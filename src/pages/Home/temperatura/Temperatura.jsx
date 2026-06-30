import { useParams } from 'react-router';
import { RecommendationHeader } from '../recommendations/components/RecommendationHeader';
import { RecommendationsNavbar } from '../recommendations/components/RecommendationsNavbar';
import { CardList } from '../recommendations/components/CardList';
import { CATEGORIES } from '../../../constants/categories';
import { Modal } from '../recommendations/components/modal/Modal';
import { useState } from 'react';

const Temperatura = () => {
  const { cat } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const catActive = cat ?? null;

  return (
    <div className="w-full max-w-full flex flex-col  bg-neutral-800 min-h-screen h-auto py-4">
      <RecommendationHeader
        freak={'Temperatura'}
        onNew={() => setIsOpen(true)}
      />
      {isOpen && <Modal onClose={() => setIsOpen(false)} freak="temperatura" />}
      <RecommendationsNavbar
        categories={CATEGORIES}
        catActive={catActive}
        basePath={'/home/temperatura'}
      />
      <CardList
        categories={CATEGORIES}
        freak={'temperatura'}
        catActive={catActive}
      />
    </div>
  );
};
export default Temperatura;
