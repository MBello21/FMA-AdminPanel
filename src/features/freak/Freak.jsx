import { useState } from 'react';
import { generatePath, useNavigate } from 'react-router';
import useGlobalReducer from '../../context/store-context/useGlobalReducer';
import { useFreak } from '../../hooks/useFreak';
import { FreakBody } from './components/FreakBody';
import { FreakHeader } from './components/FreakHeader';
import { FreakEdit } from './components/FreakEdit';

export const Freak = () => {
    const { cat, basePath, catLabel, freak, handleBack, handlePost, generalTitle, precaucionTitle, prohibicionTitle } = useFreak();
    const [isEditing, setIsEditing] = useState(false);
    const { store } = useGlobalReducer();
    const navigate = useNavigate()
    const initialData = store.recommendations.find(
        (r) => String(r.cat) === String(cat) && r.freak === freak
    );
    return !initialData ? (
        <div>Cargando...</div>
    ) : (
        <div className="w-full max-w-full flex flex-col  bg-neutral-800 min-h-screen h-auto py-4">
            <FreakHeader
                basePath={basePath}
                catLabel={catLabel}
                handleBack={handleBack}
                handlePost={handlePost}
                onClick={() => setIsEditing(true)}
            />
            {isEditing ? (
                <FreakEdit key={cat}
                    initialData={initialData}
                    catLabel={catLabel}
                    setIsEditing={setIsEditing}
                    generalTitle={generalTitle}
                    precaucionTitle={precaucionTitle}
                    prohibicionTitle={prohibicionTitle} />
            ) : (
                <FreakBody key={cat}
                    recommendation={initialData}
                    catLabel={catLabel}
                    generalTitle={generalTitle}
                    precaucionTitle={precaucionTitle}
                    prohibicionTitle={prohibicionTitle} />
            )}
        </div>
    );
};
