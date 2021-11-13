import { useContext } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

import { Context } from "../contexts/provider";

export const useGetIngredients = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getFn } = useGetApi(
    `/queries/get_users_concrete_ingredients?uuid=${uuid}`
  );

  const getIngredientsFn = () => {
    if (!uuid) return;
    getFn();
  };

  const ingredients = response?.concreteIngredients;

  const sakaguraIngredients = ingredients?.map((ingredient: any) => ({
    id: ingredient.id,
    name: ingredient.name,
    tag: ingredient.tag
  }))

  return { sakaguraIngredients, loading, error, getIngredientsFn };
};
