import { useContext } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

import { Context } from "../contexts/provider";

export const useGetIngredients = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getFn } = useGetApi(
    `/users/${uuid}/concrete_ingredients`
  );

  const getIngredientsFn = () => {
    if (!uuid) return;
    getFn();
  };

  return { loading, error, response, getIngredientsFn };
};
