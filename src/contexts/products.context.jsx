import { createContext, useState } from "react";

import PRODUCTS from '../assets/data/shop.data.json';

export const ProductsContext = createContext({
    Products: []
})

export const ProductsProvider = ({ children }) => {
    const [Products, setProducts] = useState(PRODUCTS);
    const value = {Products, setProducts};

    return <ProductsContext.Provider value={value}>{ children }</ProductsContext.Provider>
}