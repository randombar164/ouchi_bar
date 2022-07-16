import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { usePostApi } from "src/utils/hooks/useApi";

//mochikun用

// 今現在、酒蔵に表示している酒のIDたち？
// GETで"/users/${uuid}/concrete_ingredients"から情報を取って、IDのみを抜き出すということ？

// 上のrequestBodyの中のconcrete_ingredient_idsに、検索した（登録したい）酒のIDを追加して投げる？
export const useRegisterIngredients = () => {
  const { uuid } = useContext(Context);

  // このあたりでrequestBodyのidsを更新する？
  const { loading, error, response, postFn } = usePostApi(
    `/v2/commands/add_users_concrete_ingredients`
  );

  const registerFn = (ingredientIds: number[]) => {
    if (!uuid) return;
    const requestBody = {
      user_uuid: uuid,
      concrete_ingredient_ids: ingredientIds,
    };
    postFn(requestBody);
  };

  return { loading, error, response, registerFn };
};
