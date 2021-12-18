import { useCallback, useContext } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

import { Context } from "../contexts/provider";

export const useGetCocktails = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getFn } = useGetApi(
    `/queries/get_cocktails?uuid=${uuid}`
  );

  const getCocktailsFn = useCallback(() => {
    if (!uuid) return;
    getFn();
  }, [uuid, getFn]);

  const cocktails = response?.cocktails?.map((cocktail: any) => {
    return {
      id: cocktail?.id,
      name: cocktail?.name,
      strength: cocktail?.strength,
      explanation: cocktail?.cookExplanation,
    };
  });

  return { cocktails, loading, error, getCocktailsFn };
};
