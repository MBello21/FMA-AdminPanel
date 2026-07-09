import { useState } from 'react';
import useGlobalReducer from '../../context/store-context/useGlobalReducer';
import { useFreak } from '../../hooks/useFreak';
import { FreakBody } from './components/FreakBody';
import { FreakHeader } from './components/FreakHeader';
import { FreakEdit } from './components/freak-edit/FreakEdit';

export const Freak = () => {
  const {
    cat,
    basePath,
    catLabel,
    freak,
    handleBack,
    handlePost,
    generalTitle,
    precaucionTitle,
    prohibicionTitle,
  } = useFreak();
  const [isEditing, setIsEditing] = useState(false);
  const { store } = useGlobalReducer();
  const initialData = store.recommendations.find(
    (r) => String(r.cat) === String(cat) && r.freak === freak
  );
  return !initialData ? (
    <div className="flex flex-col justify-center items-center  min-h-screen bg-neutral-800">
      <h1 className="text-neutral-300 font-semibold text-4xl">
        Cargando datos
      </h1>
      <i className="fa-solid fa-spinner m-7 text-neutral-300 font-semibold text-4xl animate-spin"></i>
    </div>
  ) : (
    <div className="w-full max-w-full flex flex-col  bg-neutral-800 max-h-screen min-h-full py-2">
      <FreakHeader
        basePath={basePath}
        catLabel={catLabel}
        handleBack={handleBack}
        handlePost={handlePost}
        onClick={() => setIsEditing(true)}
      />
      {isEditing ? (
        <FreakEdit
          key={cat}
          initialData={initialData}
          catLabel={catLabel}
          setIsEditing={setIsEditing}
          generalTitle={generalTitle}
          precaucionTitle={precaucionTitle}
          prohibicionTitle={prohibicionTitle}
        />
      ) : (
        <FreakBody
          key={cat}
          recommendation={initialData}
          catLabel={catLabel}
          generalTitle={generalTitle}
          precaucionTitle={precaucionTitle}
          prohibicionTitle={prohibicionTitle}
        />
      )}
    </div>
  );
};
