import { useEffect } from "react";
import { useGetApi } from "src/utils/hooks/useApi";

export const useGetIngredientsFromCategory = (NodeId: number) => {
  const { loading, error, response, getFn } = useGetApi(
    `/queries/search_concrete_ingredient_from_category?category=${NodeId}`
  );

  const getIngredientsFromCategory = () => {
    if (NodeId !== 0) {
      getFn();
      console.log("---API----------------");
      console.log(`NodeId=${NodeId}でAPIがたたかれました`);
      console.log("loading: ", loading);
      console.log("error: ", error);
      console.log("response: ", response);
    }
  };

  return { loading, error, response, getIngredientsFromCategory };
};
