//mochikun用
import { useRouter } from "next/router";
import { useCallback, useContext } from "react";
import { IngredientCard } from "src/components/IngredientCard";
import { Layout } from "src/components/Layout";
import { Context } from "src/utils/contexts/provider";
import { useRegisterIngredients } from "src/utils/hooks/useRegisterIngredients";
import { pushHome } from "src/utils/hooks/pushHome";
import { RegisterField } from "./RegisterField";

const RegiterPage: React.VFC = (): JSX.Element => {
  const { uuid } = useContext(Context);
  if (!uuid) pushHome();

  const { concreteIngredients, setConcreteIngredients } = useContext(Context);
  const router = useRouter();
  const { registerFn } = useRegisterIngredients();

  const handleDelete = useCallback(
    (id: number) => {
      const adjustedIngredients = concreteIngredients?.filter((value) => {
        return value.id !== id;
      });
      setConcreteIngredients(adjustedIngredients);
    },
    [concreteIngredients, setConcreteIngredients]
  );

  const handleRegister = useCallback(() => {
    const ids = concreteIngredients?.map((value) => {
      return value.id;
    });
    registerFn(ids);
    setConcreteIngredients([]);
    router.push("/sakagura");
  }, [concreteIngredients, setConcreteIngredients, registerFn, router]);

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
                  onClick={() => {
                    return handleDelete(concreteIngredient.id);
                  }}
                />
              </div>
            );
          })}
        </div>
        <button
          className={`block py-3 px-7 mx-auto text-white  rounded-3xl ${
            concreteIngredients.length > 0
              ? "bg-[#3BC808] shadow-lg"
              : "bg-barGray-2"
          }`}
          onClick={handleRegister}
          disabled={concreteIngredients.length == 0}
        >
          酒蔵に並べる
        </button>
      </div>
    </Layout>
  );
};

export default RegiterPage;
