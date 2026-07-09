import { Link } from 'react-router';

export const FreakHeader = ({
  basePath,
  catLabel,
  handleBack,
  handlePost,
  onClick,
}) => {
  return (
    <div className=" flex gap-1 p-2 mx-3">
      <div className="flex items-center gap-1 w-1/2">
        <Link to={basePath}>
          <button className="border border-gray-300 rounded-md text-gray-300 text-sm py-1 px-3 ">
            <i className="fa-solid fa-arrow-left me-1"></i>
            Volver
          </button>
        </Link>
        <span className=" text-md text-gray-300">|</span>
        <div className="flex gap-2 items-center text-gray-300">
          <button
            onClick={handleBack}
            className="border border-gray-300 rounded-md  text-sm py-1 px-3 "
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <span className="text-xs">
            {catLabel.label} {catLabel.value} de 5
          </span>
          <button
            onClick={handlePost}
            className="border border-gray-300 rounded-md text-sm py-1 px-3 "
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <div className="flex justify-end w-1/2 text-gray-300 me-4">
        <button
          onClick={onClick}
          className="border border-gray-300 rounded-md text-sm py-1 px-3 "
        >
          <i className="fa-solid fa-pen-to-square"></i>
          Editar
        </button>
      </div>
    </div>
  );
};
