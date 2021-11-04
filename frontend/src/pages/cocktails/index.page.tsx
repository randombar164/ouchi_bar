//mochikun用
import type { VFC } from "react";
import { useEffect } from "react";
import { CocktailCards } from "src/components/cocktailCard";
import { useGetCocktails } from "src/utils/hooks/useGetCocktails";

const CocktailPage: VFC = () => {
  const { cocktails, loading, error, getCocktailsFn } = useGetCocktails();

  useEffect(() => {
    getCocktailsFn();
  }, [getCocktailsFn]);

  return (
    <>
      {loading && <p>ローディング中です</p>}
      {error && <p>エラーが発生しました</p>}
      {cocktails && (
        <div className="container">
          <CocktailCards cocktails={cocktails} />
        </div>
      )}
    </>
  );
};

export default CocktailPage;
