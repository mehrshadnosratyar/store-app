import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import api from "../Services/config";

const ContextData = createContext();

function ContextProvider({children}) {
    const [productsData,setProductsData] = useState([])

    useEffect(() => {
       const getData = async () => {
        try{
            setProductsData(await api.get("/products"))
        }
        catch(error) {
            console.log(error.message);
        }
       }
       getData();
    },[])
    return (
        <ContextData.Provider value={productsData}>
            {children}
        </ContextData.Provider>
    )
}



function useProducts(){
   const useProduct =  useContext(ContextData)
   return useProduct
}

export default ContextProvider;
export {useProducts}