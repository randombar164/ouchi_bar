import { useGetApi } from "src/utils/hooks/useApi";
import { useState } from "react";

export const useGetIngredientsFromCategory = () => {
  const [nodeId, setNodeId] = useState(0)
  const { loading, error, response, getFn } = useGetApi(
    `/queries/search_concrete_ingredient_from_category?category=hogehoge`
  );

  const getIngredientsFromCategory = () => {
    if (nodeId !== 0) {
      getFn();
      console.log("---API----------------");
      console.log(`NodeId=${nodeId}でAPIがたたかれました`);
      console.log("loading: ", loading);
      console.log("error: ", error);
      console.log("response: ", response);
    }
  };

  return { loading, error, response, getIngredientsFromCategory, setNodeId };
};
