//mochikun用
import type { VFC } from "react";
import { useEffect, useContext } from "react";
import { Context } from "src/utils/contexts/provider";
import { CocktailCards } from "src/components/cocktailCard";
import { Layout } from "src/components/Layout";
import { ToRegisterModal } from "src/components/ToRegisterModal";
import { useGetCocktails } from "src/utils/hooks/useGetCocktails";
import { pushHome } from "src/utils/hooks/pushHome";

const CocktailPage: VFC = () => {
  const { uuid } = useContext(Context);
  if (!uuid) pushHome();
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

export default CocktailPage;
