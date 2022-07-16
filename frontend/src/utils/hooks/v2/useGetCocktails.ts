import { useCallback, useContext } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

import { Context } from "../../contexts/provider";

type CocktailsResponseType = {
  cocktails: {
    id: number;
    name: string;
    strength: number;
    drinkMethodId: number;
    glassTypeId: number;
    cookExplanation: string;
    createdAt: string;
    updatedAt: string;
  }[];
};
export const useGetCocktails = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getFn } = useGetApi<CocktailsResponseType>(
    `/v2/queries/get_cocktails?uuid=${uuid}`
  );

  const getCocktailsFn = useCallback(() => {
    if (!uuid) return;
    getFn();
  }, [uuid, getFn]);

  const cocktails = response?.cocktails;
  return { cocktails, loading, error, getCocktailsFn };
};
