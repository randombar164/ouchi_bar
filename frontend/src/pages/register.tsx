//mochikun用
import type { VFC } from "react";
import { IngredientCard, RegisterField } from "src/components/molecules/IngredientCard";

const RegiterPage: VFC = () => {
  return (
  <>
    <div className=" w-full lg:w-3/4 py-8 px-4 md:px-10 lg:px-16 xl:32 mt-0">
      <div id="registerPageTitle" className="py-6 font-bold">あなたが持っている材料を登録</div>
      <RegisterField/>
      <div id="cardsField" className="py-6 grid grid-cols-1 gap-4">
        {/* 検索して選択した材料を表示 -> 登録ボタンで一気に登録 */}
        <IngredientCard/>
        <IngredientCard/>
      </div>
    </div>
  </>
  );
};

export default RegiterPage;
