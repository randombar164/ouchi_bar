import { useEffect } from "react";

import { useGetApi } from "../useApi";

export const useGetRecipe = (cocktailId: number) => {
  const { loading, response, getFn } = useGetApi(
    `/v2/queries/show_cocktail?id=${cocktailId}`
  );
  useEffect(() => {
    getFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cocktailId]);

  const cocktail = response?.cocktail;
  const ingredients = cocktail?.ingredients?.map((ingredient: any) => {
    return {
      id: ingredient?.concreteIngredient?.id,
      name: ingredient?.concreteIngredient?.name,
      tag: ingredient?.concreteIngredient?.tag,
      amount: ingredient?.amount,
      unit: ingredient?.unit?.name,
    };
  });
  const recipe = {
    id: cocktail?.id,
    name: cocktail?.name,
    strength: cocktail?.strength,
    explanation: cocktail?.cookExplanation,
    drinkMethod: cocktail?.drinkMethod?.name,
    glassType: cocktail?.glassType?.name,
    ingredients: ingredients,
  };

  return { recipe, loading };
};
