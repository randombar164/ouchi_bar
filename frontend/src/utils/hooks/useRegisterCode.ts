import { useCallback } from "react";
import { usePostApi } from "src/utils/hooks/useApi";
export const useRegisterCode = () => {
    const { loading, response, postFn} = usePostApi(" /commands/register_concrete_ingredient_by_amazon_product");

    const registerCode = useCallback((requestBody: any) => {
        postFn(requestBody);
    },[postFn])
    return { loading, response, registerCode }
}