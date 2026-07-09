import { useReducer } from "react"
import { initialStore, storeReducer } from "../../store/store"
import { StoreContext } from "./StoreContext"



export const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(storeReducer, initialStore())

    return <StoreContext.Provider value={{ store, dispatch }}>
        {children}
    </StoreContext.Provider>
}