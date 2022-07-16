import { useRouter } from "next/router";
import type { VFC } from "react";
import { useEffect } from "react";
import { CocktailCards } from "src/components/cocktailCards";
import { Layout } from "src/components/Layout";
import { ToRegisterModal } from "src/components/ToRegisterModal";

import { useGetCocktails } from "src/utils/hooks/v2/useGetCocktails";
import { useGetRecipe } from "src/utils/hooks/v2/useGetRecipe";

// import type { VFC } from "react";
// import { useContext,useEffect } from "react";
// import { CocktailCards } from "src/components/cocktailCard";
// import { Layout } from "src/components/Layout";
// import { ToRegisterModal } from "src/components/ToRegisterModal";
// import { Context } from "src/utils/contexts/provider";
// import { pushHome } from "src/utils/hooks/v2/pushHome";
// import { useGetCocktails } from "src/utils/hooks/v2/useGetCocktails";

const CocktailPage: VFC = () => {
  const { cocktails, loading, error, getCocktailsFn } = useGetCocktails();

  useEffect(() => {
    getCocktailsFn();
  }, [getCocktailsFn]);

  return (
    <Layout>
      {loading && <p style={{ margin: "1rem" }}>ローディング中です</p>}
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
