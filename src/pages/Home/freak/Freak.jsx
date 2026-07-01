import { useState } from 'react';
import { FreakBody } from './components/FreakBody';
import { FreakHeader } from './components/FreakHeader';
import { useFreak } from './hooks/useFreak';
import { FreakEdit } from './components/FreakEdit';
import useGlobalReducer from '../../../hooks/useGlobalReducer';

export const Freak = () => {
  const { cat, basePath, catLabel, freak, handleBack, handlePost } = useFreak();
  const [isEditing, setIsEditing] = useState(false);
  const { store } = useGlobalReducer();
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
        <FreakEdit key={cat} initialData={initialData} catLabel={catLabel} />
      ) : (
        <FreakBody key={cat} recommendation={initialData} catLabel={catLabel} />
      )}
    </div>
  );
};
