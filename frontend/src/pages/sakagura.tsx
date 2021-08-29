import type { VFC } from "react";
import { useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { useGetUser } from "src/utils/hooks/useGetUser";

const responseObj = {
  concrete_ingredients: [
    {
      id: 670,
      base_ingredient_id: 1,
      name: "サントリー ウイスキー",
      tag: "略",
      created_at: "2021-08-28T13:08:32.365Z",
      updated_at: "2021-08-28T13:08:32.365Z",
    },
    {
      id: 671,
      base_ingredient_id: 1,
      name: "バーボンウイスキー ジムビーム",
      tag: "略",
      created_at: "2021-08-28T13:08:32.365Z",
      updated_at: "2021-08-28T13:08:32.365Z",
    },
    {
      id: 76,
      base_ingredient_id: 2,
      name: "サントリー ビーフィーター ジン",
      tag: "略",
      created_at: "2021-08-28T13:08:32.365Z",
      updated_at: "2021-08-28T13:08:32.365Z",
    },
    {
      id: 587,
      base_ingredient_id: 3,
      name: "ギルビーウォッカ",
      tag: "略",
      created_at: "2021-08-28T13:08:32.365Z",
      updated_at: "2021-08-28T13:08:32.365Z",
    },
    {
      id: 419,
      base_ingredient_id: 4,
      name: "スプライト",
      tag: "略",
      created_at: "2021-08-28T13:08:32.365Z",
      updated_at: "2021-08-28T13:08:32.365Z",
    },
    {
      id: 262,
      base_ingredient_id: 5,
      name: "ロンリコ 151",
      tag: "略",
      created_at: "2021-08-28T13:08:32.365Z",
      updated_at: "2021-08-28T13:08:32.365Z",
    },
  ],
};

const SakaguraPage: VFC = () => {
  const { uuid } = useContext(Context);
  useGetUser();
  return <div className="text-sm">{uuid}</div>;
};

export default SakaguraPage;
