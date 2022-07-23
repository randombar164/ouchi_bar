import { useContext } from "react";
import { useCallback } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

import { Context } from "../../contexts/provider";

type RecommendedIngredientsResponseType = {
  ingredients: {
    id: number;
    name: string;
    imgSrc: string | undefined;
    janCode: number | undefined;
    asin: string | undefined;
    detailPageUrl: string | undefined;
    categoryId: number;
  }[];
};

export const useGetRecommendedIngredients = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getFn } =
    useGetApi<RecommendedIngredientsResponseType>(
      `/v3/queries/get_users_recommended_ingredients?uuid=${uuid}`
    );

  const getRecommendedIngredientsFn = useCallback(() => {
    if (!uuid) return;
    getFn();
  }, [uuid]);

  const recommendedIngredients = response?.ingredients;

  return {
    recommendedIngredients,
    loading,
    error,
    getRecommendedIngredientsFn,
  };
};
