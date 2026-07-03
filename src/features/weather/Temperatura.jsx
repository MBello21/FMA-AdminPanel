import { useState } from 'react';
import { CATEGORIES } from '../../constants/categories';
import { RecommendationHeader } from './components/RecommendationHeader';
import { CardList } from './components/CardList';
import { Modal } from './components/modal/Modal';

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