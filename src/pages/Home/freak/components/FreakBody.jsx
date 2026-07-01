export const FreakBody = ({ catLabel, recommendation }) => {
  console.log('recommendation:', recommendation);
  return (
    <div className="m-5">
      <div className="flex items-center gap-3">
        <div
          className={`${catLabel.color} leading-none px-3 py-1 rounded-full text-sm`}
        >
          {catLabel?.label}
        </div>
        <h2 className="text-gray-300 font-semibold">{recommendation.title}</h2>
      </div>
      <div className="text-gray-300 mt-4">
        <h3 className="text-amber-50">{catLabel?.generalTitle}</h3>
        <ul className=" text-gray-300 text-start mb-1  text-sm font-light">
          {recommendation?.recommendation.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between my-2"
            >
              <span>• {item?.recommendation}</span>
            </li>
          ))}
        </ul>
      </div>
      {recommendation.work_recommendation.filter((r) => r.type === 'precaucion')
        .length > 0 && (
        <div className="text-gray-300 mt-4">
          <h3 className="text-amber-50">{catLabel?.precaucionTitle}</h3>
          <ul className=" text-gray-300 text-start mb-1  text-sm font-light">
            {recommendation?.work_recommendation
              .filter((r) => r.type === 'precaucion')
              .map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between my-2"
                >
                  <span>• {item?.work_recommendation}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
      {recommendation.work_recommendation.filter(
        (r) => r.type === 'prohibicion'
      ).length > 0 && (
        <div className="text-gray-300 mt-4">
          <h3 className="text-amber-50">{catLabel?.prohibicionTitle}</h3>
          <ul className=" text-gray-300 text-start mb-1  text-sm font-light">
            {recommendation?.work_recommendation
              .filter((r) => r.type === 'prohibicion')
              .map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between my-2"
                >
                  <span>• {item?.work_recommendation}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};
