import { useRouter } from "next/router";
import type { VFC } from "react";
import { useEffect } from "react";

import { useGetCocktails } from "src/utils/hooks/v3/useGetCocktails";
// orignal component
import { CardList } from "src/components/CardList";
import { Layout } from "src/components/Layout";
import { ToRegisterModal } from "src/components/ToRegisterModal";
import { CocktailImg } from "src/components/CocktailImg";

const CocktailPage: VFC = () => {
  const { cocktails, loading, error, getCocktailsFn } = useGetCocktails();
  useEffect(() => {
    getCocktailsFn();
  }, [getCocktailsFn]);
  // console.log(cocktails);

  const items = cocktails?.map((cocktail) => {
    return {
      id: cocktail.id,
      name: cocktail.name,
      imgTag: (
        <CocktailImg
          drinkMethodId={cocktail.drinkMethodId}
          height={50}
          width={50}
        />
      ),
      caption: <h2>"すぐ作れる"</h2>,
    };
  });

  const router = useRouter();
  const toCocktailRecipePage = (id: number) => {
    router.push(`/cocktail-recipe/${id}`);
  };

  return (
    <Layout>
      {loading && <p style={{ margin: "1rem" }}>ローディング中です</p>}
      {cocktails?.length == 0 && <ToRegisterModal name="作成可能なカクテル" />}
      {error && <p>エラーが発生しました</p>}
      {items && (
        <div className="container">
          <CardList
            items={items}
            onClick={toCocktailRecipePage}
            cardHeight={50}
          ></CardList>
        </div>
      )}
    </Layout>
  );
};

export default CocktailPage;
