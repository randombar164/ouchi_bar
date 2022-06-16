//mochikun用
import { useContext, useEffect } from "react";
import { CocktailCards } from "src/components/cocktailCard";
import { Layout } from "src/components/Layout";
import { ToRegisterModal } from "src/components/ToRegisterModal";
import { Context } from "src/utils/contexts/provider";
import { useGetCocktails } from "src/utils/hooks/useGetCocktails";

const CocktailPage = () => {
  const { cocktails, loading, error, getCocktailsFn } = useGetCocktails();

  useEffect(() => {
    getCocktailsFn();
  }, [getCocktailsFn]);

  return (
    <Layout>
      {loading && <p>ローディング中です</p>}
      {cocktails?.length == 0 && <ToRegisterModal name="作成可能なカクテル" />}
      {error && <p>エラーが発生しました</p>}
      {cocktails && (
        <div className="container">
          <CocktailCards cocktails={cocktails} />
        </div>
      )}
    </Layout>
  );
};

CocktailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default CocktailPage;
