import { useContext, createContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
}

const FilterProvider = ({children}) => {
    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: "SET_FILTER_PRODUCTS", payload: products})
    }, [products]);

    return <FilterContext.Provider value={{...state}}>{children}</FilterContext.Provider>
};

const useFilterContext = () => {
    return useContext(FilterContext);
}

export {FilterProvider, useFilterContext};