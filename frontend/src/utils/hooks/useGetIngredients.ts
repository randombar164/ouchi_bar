import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { useGetApi } from "src/utils/hooks/useApi";

export const useGetIngredients = () => {
  const { uuid } = useContext(Context);
};
