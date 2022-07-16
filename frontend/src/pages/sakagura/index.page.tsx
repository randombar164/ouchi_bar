import type { VFC } from "react";
import { useContext, useEffect } from "react";
import { Layout } from "src/components/Layout";
import { ToRegisterModal } from "src/components/ToRegisterModal";
import { SingleShelf } from "src/pages/sakagura/SingleShelf";
import { Context } from "src/utils/contexts/provider";
import { pushHome } from "src/utils/hooks/v2/pushHome";
import { useGetIngredients } from "src/utils/hooks/v2/useGetIngredients";

const sliceByNumber = (array: any[], number: number) => {
  if (!array) return;
  const slicedArrLength = Math.ceil(array.length / number);
  const slicedArr = new Array(slicedArrLength).fill(0).map((_, i) => {
    return array.slice(i * number, (i + 1) * number);
  });
  return slicedArr;
};

export const SakaguraPage: VFC = () => {
  const { sakaguraIngredients, loading, error, getIngredientsFn } =
    useGetIngredients();

  const slicedIngredients = sliceByNumber(sakaguraIngredients, 4);

  useEffect(() => {
    getIngredientsFn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getIngredientsFn]);

  return (
    <Layout>
      {loading && <p>ローディング中です</p>}
      {sakaguraIngredients?.length == 0 && (
        <ToRegisterModal name="酒蔵のお酒" />
      )}

      {slicedIngredients &&
        slicedIngredients.map((ingredient: any, i: number) => {
          return <SingleShelf key={i} items={ingredient} />;
        })}

      {error && <p>エラーが発生しました</p>}
    </Layout>
  );
};

export default SakaguraPage;
