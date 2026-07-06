import { useLocation, useNavigate, useParams } from 'react-router';
import { CATEGORIES } from '../constants/categories';

export const useFreak = () => {
    const { cat } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const freak = location.pathname.split('/')[2];
    const basePath = location.pathname.split('/').slice(0, -1).join('/');
    const catLabel = CATEGORIES.find(
        (category) => String(category.value) === String(cat)
    );
    const currentIndex = CATEGORIES.findIndex(
        (category) => String(category.value) === String(cat)
    );

    const riskTitles = catLabel?.titlesByRisk?.[freak]

    const generalTitle = riskTitles?.general || 'Medidas preventivas';
    const precaucionTitle = riskTitles?.precaucion || 'Precaución en relación a las siguientes labores';
    const prohibicionTitle = riskTitles?.prohibicion || 'Prohibición en relación a las siguientes labores';

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
        freak,
        basePath,
        catLabel,
        currentIndex,
        generalTitle,
        precaucionTitle,
        prohibicionTitle,
        handleBack,
        handlePost,
    };
};
