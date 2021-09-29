import { useEffect } from "react";

import { useGetApi } from "./useApi";

export const useGetRecipe = (cocktailId: number) => {
  const { loading, response, getFn } = useGetApi(`/cocktails/${cocktailId}`);
  useEffect(() => {
    getFn();
  }, [cocktailId]);

  return { loading, response };
};
