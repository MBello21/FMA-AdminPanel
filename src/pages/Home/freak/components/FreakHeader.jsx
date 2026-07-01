import { useLocation, useNavigate, useParams, Link } from "react-router"
import { CATEGORIES } from "../../../../constants/categories"

export const FreakHeader = ({ field }) => {
    const { cat } = useParams()
    const location = useLocation();
    const navigate = useNavigate()
    const catLabel = CATEGORIES.find(category => String(category.value) === String(cat))
    const currentIndex = CATEGORIES.findIndex(category => String(category.value) === String(cat))
    const basePath = location.pathname.split('/').slice(0, -1).join('/')

    const handleBack = () => {
        if (currentIndex > 1) {
            navigate(`${basePath}/${CATEGORIES[currentIndex - 1].value}`)
        }
    }
    const handlePost = () => {
        navigate(`${basePath}/${CATEGORIES[currentIndex + 1].value}`)
    }
    return (
        <div className=" flex gap-1 p-2 mx-3">
            <div className="flex items-center gap-1 w-1/2">
                <Link to={basePath} >
                    <button
                        className="border border-gray-300 rounded-md text-gray-300 text-sm py-1 px-3 ">
                        <i className="fa-solid fa-arrow-left me-1"></i>
                        Volver
                    </button>
                </Link>
                <span className=" text-md">|</span>
                <div className="flex gap-2 items-center text-gray-300">
                    <button
                        onClick={handleBack}
                        className="border border-gray-300 rounded-md  text-sm py-1 px-3 ">
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <span className="text-xs" >{catLabel.label} {catLabel.value} de 5</span>
                    <button
                        onClick={handlePost}
                        className="border border-gray-300 rounded-md text-sm py-1 px-3 ">
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="flex justify-end w-1/2 text-gray-300 me-4">
                <button className="border border-gray-300 rounded-md text-sm py-1 px-3 ">
                    <i className="fa-solid fa-pen-to-square"></i>
                    Editar
                </button>
            </div>
        </div>
    )
}
