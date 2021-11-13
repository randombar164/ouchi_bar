import { useCallback, useEffect, useState } from "react";

import { useGetApi } from "./useApi";

export const useSearchByCode = () => {
    const [ barcode, setBarcode ] = useState("")
    const { loading, error, response, getFn } = useGetApi(
        `/queries/search_concrete_ingredient_from_jan_code?jan_code=${barcode}`
      );
    
    const searchByCode = useCallback((code: string) => {
        setBarcode(code)
    }, [barcode]);

    useEffect(() => {
        if( barcode.length < 1){
            return;
        }
        getFn();
    },[barcode])
    return { loading, response, searchByCode};
}