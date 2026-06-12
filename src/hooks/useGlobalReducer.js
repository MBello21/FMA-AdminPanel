import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext)
    return { dispatch, store }
}