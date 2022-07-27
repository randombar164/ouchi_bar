import { useCallback } from "react";

import { useGetApi } from "../useApi";

type RecipeResponseType = {
  cocktail: {
    id: number;
    name: string;
    strength: number;
    cookExplanation: string;
    drinkMethod: {
      id: number;
      name: string;
    };
    glassType: {
      id: number;
      name: string;
    };
    cocktailsIngredients: {
      id: number;
      amount: string;
      additionalExplanation: string | null | undefined;
      ingredient: {
        id: number;
        name: string;
        imgSrc: string;
        detailPageUrl: string;
        categoryId: number;
      };
      unit: {
        id: number;
        name: string;
      };
    }[];
  };
};
export const useGetRecipe = (cocktailId: number) => {
  const { loading, response, getFn } = useGetApi<RecipeResponseType>(
    `/v3/queries/show_cocktail?id=${cocktailId}`
  );
  const getRecipeFn = useCallback(() => {
    getFn();
  }, [cocktailId]);

  const cocktail = response?.cocktail;
  const ingredients = cocktail?.cocktailsIngredients;
  const recipe = {
    id: cocktail?.id,
    name: cocktail?.name,
    strength: cocktail?.strength,
    cookExplanation: cocktail?.cookExplanation,
    drinkMethod: cocktail?.drinkMethod,
    glassType: cocktail?.glassType,
    cocktailsIngredients: ingredients,
  };

  return { recipe, loading, getRecipeFn };
};
