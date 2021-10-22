import type { VFC } from "react";
import { useEffect } from "react";
import { SingleShelf } from "src/pages/sakagura/SingleShelf";
import { useGetIngredients } from "src/utils/hooks/useGetIngredients";

const sliceByNumber = (array: any[], number: number) => {
  if (!array) return;
  const slicedArrLength = Math.ceil(array.length / number);
  const slicedArr = new Array(slicedArrLength).fill(0).map((_, i) => {
    return array.slice(i * number, (i + 1) * number);
  });
  return slicedArr;
};

export const SakaguraPage: VFC = () => {
  const { loading, error, response, getIngredientsFn } = useGetIngredients();

  const slicedIngredients = sliceByNumber(response?.concreteIngredients, 4);

  useEffect(() => {
    getIngredientsFn();
  }, [getIngredientsFn]);

  return (
    <div>
      {loading && <p>ローディング中です</p>}

      {slicedIngredients &&
        slicedIngredients.map((ingredient: any, i: number) => {
          return <SingleShelf key={i} items={ingredient} />;
        })}

      {error && <p>エラーが発生しました</p>}
    </div>
  );
  //<div className="text-sm">{uuid}</div>;
};

export default SakaguraPage;
