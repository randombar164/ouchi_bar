//mochikun用
import type { VFC } from "react";
import { IngredientCard } from "src/components/molecules/IngredientCard";
import { useRegisterIngredients } from "src/utils/hooks/useRegisterIngredients";

import { RegisterField } from "./RegisterFiels";

const concreteIngredientIds = [
  670, 671, 76, 587, 419, 262, 256, 189, 179, 494, 495, 496, 461,
];

const RegiterPage: VFC = () => {
  const { registerFn } = useRegisterIngredients(concreteIngredientIds);

  return (
    <>
      <div className=" py-8 px-4 md:px-10 lg:px-16 mt-0 w-full lg:w-3/4">
        <div id="registerPageTitle" className="py-6 font-bold">
          あなたが持っている材料を登録
        </div>
        <button
          className="h-[60px] text-white bg-barOrange-3"
          onClick={registerFn}
        >
          登録します
        </button>
        <RegisterField />
        <div id="cardsField" className="grid grid-cols-1 gap-4 py-6">
          {/* 検索して選択した材料を表示 -> 登録ボタンで一気に登録 */}
          <IngredientCard />
          <IngredientCard />
        </div>
      </div>
    </>
  );
};

export default RegiterPage;
