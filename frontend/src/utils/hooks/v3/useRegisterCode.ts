import { useCallback } from "react";
import { usePostApi } from "src/utils/hooks/useApi";

type CategoryType = {
  categories: {
    id: number;
    name: string;
    amazonBrowseNodeId: number;
    fullPath: string;
    createdAt: string;
    updatedAt: string;
  }[];
};
export const useRegisterCode = () => {
  const { loading, response, postFn } = usePostApi<CategoryType>(
    " /v3/commands/register_ingredient_by_amazon_product"
  );

  const registerCode = useCallback(
    (requestBody: any) => {
      postFn(requestBody);
    },
    [postFn]
  );
  return { loading, response, registerCode };
};
