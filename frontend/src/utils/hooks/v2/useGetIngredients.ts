import { useContext } from "react";
import { useCallback } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

import { Context } from "../../contexts/provider";

export const useGetIngredients = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getFn } = useGetApi(
    `/v2/queries/get_users_concrete_ingredients?uuid=${uuid}`
  );

  const getIngredientsFn = useCallback(() => {
    if (!uuid) return;
    getFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uuid]);

  const ingredients = response?.concreteIngredients;

  const sakaguraIngredients = ingredients?.map((ingredient: any) => {
    return {
      id: ingredient.id,
      name: ingredient.name,
      imgSrc: ingredient.imgSrc,
    };
  });

  return { sakaguraIngredients, loading, error, getIngredientsFn };
};
