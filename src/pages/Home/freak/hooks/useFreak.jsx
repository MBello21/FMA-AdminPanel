import { useLocation, useNavigate, useParams } from 'react-router';
import { CATEGORIES } from '../../../../constants/categories';

export const useFreak = () => {
  const { cat } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const catLabel = CATEGORIES.find(
    (category) => String(category.value) === String(cat)
  );
  const currentIndex = CATEGORIES.findIndex(
    (category) => String(category.value) === String(cat)
  );
  const basePath = location.pathname.split('/').slice(0, -1).join('/');

  const freak = location.pathname.split('/')[2];
  const handleBack = () => {
    if (currentIndex > 1) {
      navigate(`${basePath}/${CATEGORIES[currentIndex - 1].value}`);
    }
  };
  const handlePost = () => {
    navigate(`${basePath}/${CATEGORIES[currentIndex + 1].value}`);
  };
  return {
    cat,
    location,
    navigate,
    catLabel,
    currentIndex,
    basePath,
    freak,
    handleBack,
    handlePost,
  };
};
