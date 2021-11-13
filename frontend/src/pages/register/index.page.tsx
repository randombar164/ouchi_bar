//mochikun用
import { IngredientCard } from "src/components/IngredientCard";
import { useRegisterIngredients } from "src/utils/hooks/useRegisterIngredients";

import { RegisterField } from "./RegisterField";
import { Layout } from "src/components/Layout";
import { Context } from "src/utils/contexts/provider";
import { useCallback, useContext } from "react";

const RegiterPage: React.VFC = (): JSX.Element => {
  const { concreteIngredients, setConcreteIngredients } = useContext(Context);
  const { registerFn } = useRegisterIngredients();

  const handleDelete = useCallback(
    (id: number) => {
      const adjustedIngredients = concreteIngredients?.filter((value) => {
        return value.id !== id;
      });
      setConcreteIngredients(adjustedIngredients);
    },
    [concreteIngredients]
  );

  const handleClick = useCallback(() => {
    const ids = concreteIngredients?.map((value) => value.id);
    registerFn(ids);
  }, [concreteIngredients]);

  return (
    <Layout>
      <div className=" py-8 px-4 md:px-10 lg:px-16 mt-0 w-full lg:w-3/4">
        <div id="registerPageTitle" className="py-6 font-bold">
          あなたが持っている材料を登録
        </div>
        <RegisterField />
        <div id="cardsField" className="grid grid-cols-1 gap-4 py-6">
          {/* 検索して選択した材料を表示 -> 登録ボタンで一気に登録 */}
        </div>
        <div>
          {concreteIngredients?.map((concreteIngredient, i) => {
            return (
              <div className="mb-6" key={i}>
                <IngredientCard
                  canDelete={true}
                  imgSrc={concreteIngredient.imgSrc}
                  name={concreteIngredient.name}
                  onClick={() => handleDelete(concreteIngredient.id)}
                />
              </div>
            );
          })}
        </div>
        <button
          className="py-3 text-white bg-[#3BC808] rounded-3xl px-7 mx-auto block"
          onClick={handleClick}
        >
          登録します
        </button>
      </div>
    </Layout>
  );
};

export default RegiterPage;
