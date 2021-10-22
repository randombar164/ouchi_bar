import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { usePostApi } from "src/utils/hooks/useApi";

//mochikun用

// 今現在、酒蔵に表示している酒のIDたち？
// GETで"/users/${uuid}/concrete_ingredients"から情報を取って、IDのみを抜き出すということ？

// 上のrequestBodyの中のconcrete_ingredient_idsに、検索した（登録したい）酒のIDを追加して投げる？
export const useRegisterIngredients = (ingredientIds: number[]) => {
  const { uuid } = useContext(Context);
  const requestBody = {
    user_uuid: uuid,
    concrete_ingredient_ids: ingredientIds,
  };

  // このあたりでrequestBodyのidsを更新する？
  const { loading, error, response, postFn } = usePostApi(
    `/users_concrete_ingredients`,
    {},
    requestBody
  );

  const registerFn = () => {
    if (!uuid) return;
    postFn();
  };

  return { loading, error, response, registerFn };
};
