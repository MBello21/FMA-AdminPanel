import { CATEGORIES } from '../../../../constants/categories';
import { DIC_TO_CAT } from '../../../../constants/dic-to-cat';
import { useAlertContext } from '../../../../context/alert-context/useAlertContext';
import { RecommendationSection } from './RecommendationSection';

export const AlertRecList = ({ alert }) => {
  const { isActive } = useAlertContext();
  const catValue = DIC_TO_CAT[alert?.level.toLowerCase()]?.cat;
  const category = CATEGORIES.find((c) => c.value === catValue);
  const titles = category?.titlesByRisk?.[isActive];
  return (
    <>
      <h2 className=" p-2 text-base font-bold text-slate-800 pb-3 border-b border-slate-200">
        {alert.recommendations.title}
      </h2>
      <RecommendationSection
        icon="fa-circle-check"
        colorClass="text-green-600"
        title={titles.general}
        items={alert.recommendations.recommendation}
        field="recommendation"
      />
      {alert.recommendations.work_recommendation.filter(
        (item) => item.type === 'precaucion'
      ).length > 0 && (
        <RecommendationSection
          icon="fa-circle-exclamation"
          colorClass="text-amber-600"
          title={titles.precaucion}
          items={alert.recommendations.work_recommendation.filter(
            (r) => r.type === 'precaucion'
          )}
          field="work_recommendation"
        />
      )}
      {alert.recommendations.work_recommendation.filter(
        (item) => item.type === 'prohibicion'
      ).length > 0 && (
        <RecommendationSection
          icon="fa-circle-xmark"
          colorClass="text-red-600"
          title={titles.prohibicion}
          items={alert.recommendations.work_recommendation.filter(
            (r) => r.type === 'prohibicion'
          )}
          field="work_recommendation"
        />
      )}
    </>
  );
};
