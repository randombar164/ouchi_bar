import { useEffect, useState } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

type IngredientsResponseType = {
  userIngredients: {
    id: number;
    baseIngredientId: number;
    categoryId: number;
    name: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
    imgSrc: string;
  }[];
};

export const useGetIngredientsFromCategory = () => {
  const [nodeId, setNodeId] = useState(0);
  const { loading, error, response, getFn } =
    useGetApi<IngredientsResponseType>(
      `/v3/queries/search_ingredient_from_category?id=${nodeId}`
    );

  const getIngredientsFromCategory = (id: number) => {
    setNodeId(id);
  };

  useEffect(() => {
    if (nodeId !== 0) {
      getFn();
    }
  }, [nodeId]);
  return { loading, error, response, getIngredientsFromCategory };
};
