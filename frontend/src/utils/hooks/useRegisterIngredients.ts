import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { usePostApi } from "src/utils/hooks/useApi";

//mochikun用

// 今現在、酒蔵に表示している酒のIDたち？
// GETで"/users/${uuid}/concrete_ingredients"から情報を取って、IDのみを抜き出すということ？
const requestBody = {
  concrete_ingredient_ids: [
    670, 671, 76, 587, 419, 262, 256, 189, 179, 494, 495, 496, 461,
  ],
};

// 上のrequestBodyの中のconcrete_ingredient_idsに、検索した（登録したい）酒のIDを追加して投げる？
export const useRegisterIngredients = (/* 何か引数持つ気がする */) => {
  const uuid = "7f63a994-b630-4170-aa5a-655ad5e8d349";
  // このあたりでrequestBodyのidsを更新する？
  const { response, error } = usePostApi(
    `/users/${uuid}/concrete_ingredients`,
    {},
    requestBody,
    true
  );
  return { response };
};
