import { useEffect } from "react"
import { useSearchParams } from "react-router"
import { getDailyAlerts } from "../services/apiBackend"
import useGlobalReducer from "../context/store-context/useGlobalReducer"

const PARAM_FILTER = {
    temperatura: ["temperatura"],
    viento: ["viento", "rachas"],
    precipitacion: ["precipitación", "lluvia", "tormenta"],
}


export const AlertRec = () => {
    const { store, dispatch } = useGlobalReducer()
    const [searchParams] = useSearchParams()
    const date = searchParams.get('date') || new Date().toISOString().split("T")[0]
    useEffect(() => {
        const dailyAlerts = async () => {
            const data = await getDailyAlerts(date)
            dispatch({ type: 'set_alerts', payload: data })
            console.log(data);
        }
        dailyAlerts()
    }, [date])
    const filtered = store.alerts.filter(i => PARAM_FILTER.viento.some(key => i.description.toLowerCase().includes(key)))
    console.log({ filtered });


    return (
        <div className="flex justify-center bg-neutral-100 h-screen p-3">
            <div className="flex flex-col bg-white h-full w-80 lg:w-[90%] shadow-2xl rounded-md overflow-hidden text-amber-950 ">
                <div className="flex flex-col justify-center items-center bg-amber-200 h-[40%] rounded-t-md">
                    <h3 className="text-sm m-2">
                        Coex CA03
                        <span> · </span>
                        Puentes de Cádiz
                    </h3>
                    <div>
                        <i
                            class="fa-solid fa-triangle-exclamation text-4xl animate-pulse m-2"
                        ></i>
                    </div>
                    <div className="m-2">
                        <h1>CAT.III - ALERTA AMARILLA</h1>
                    </div>
                    <div className="m-2">
                        <p className="text-xs">Alerta por altas temperaturas</p>
                    </div>
                </div>
                <div className=" h-full">
                    <nav className="flex border-b border-slate-200 bg-slate-50">
                        <button className="flex-1 py-3 px-3 text-xs font-medium border-b-2 transition-all">
                            Temperatura
                        </button>
                        <button className="flex-1 py-3 px-3 text-xs font-medium ">
                            Viento
                        </button>
                        <button className="flex-1 py-3 px-3 text-xs font-medium ">
                            Precipitación
                        </button>
                    </nav>
                    <h2 className="py-5 px-2 text-base  font-semibold leading-0 border-b border-slate-200 bg-slate-50">
                        Medidas ante temperaturas altas
                    </h2>
                    <div className="text-sm  py-5 px-2 ">
                        Medidas preventivas
                    </div>
                </div>
            </div>
        </div >
    )
}
