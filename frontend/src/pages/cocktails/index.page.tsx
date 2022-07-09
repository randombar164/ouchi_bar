//mochikun用
import { useRouter } from "next/router";
import type { VFC } from "react";
import { useEffect } from "react";
import { CocktailCard } from "src/components/CocktailCard";
import { Layout } from "src/components/Layout";
import { ToRegisterModal } from "src/components/ToRegisterModal";
import { useGetCocktails } from "src/utils/hooks/useGetCocktails";
import { useGetRecipe } from "src/utils/hooks/useGetRecipe";

const CocktailPage: VFC = () => {
  const { cocktails, loading, error, getCocktailsFn } = useGetCocktails();

  useEffect(() => {
    getCocktailsFn();
  }, [getCocktailsFn]);

  const router = useRouter();
  const cocktailId = Number(router?.query.id);
  const { recipe } = useGetRecipe(cocktailId);

  return (
    <Layout>
      {loading && <p style={{ margin: "1rem" }}>ローディング中です</p>}
      {cocktails?.length == 0 && <ToRegisterModal name='作成可能なカクテル' />}
      {error && <p>エラーが発生しました</p>}
      {cocktails && (
        <div className='container'>
          <CocktailCard cocktails={cocktails} recipe={recipe} />
        </div>
      )}
    </Layout>
  );
};

export default CocktailPage;
