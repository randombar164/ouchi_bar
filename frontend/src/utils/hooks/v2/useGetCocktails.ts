import { useCallback, useContext } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

import type { Cocktail } from "src/utils/types/type";
import { Context } from "../../contexts/provider";

export const useGetCocktails = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getFn } = useGetApi(
    `/v2/queries/get_cocktails?uuid=${uuid}`
  );

  const getCocktailsFn = useCallback(() => {
    if (!uuid) return;
    getFn();
  }, [uuid, getFn]);

  const cocktails: Cocktail[] = response?.cocktails?.map(
    (cocktail: Cocktail) => {
      return {
        id: cocktail?.id,
        name: cocktail?.name,
        strength: cocktail?.strength,
        cockExplanation: cocktail?.cockExplanation,
        drinkMethodId: cocktail?.drinkMethodId,
        glassTypeId: cocktail?.glassTypeId,
      };
    }
  );
  return { cocktails, loading, error, getCocktailsFn };
};
