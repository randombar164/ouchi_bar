import Link from "next/link";
import { ContentWraper } from "src/components/ContentWrapper";
import { useGetRecipe } from "src/utils/hooks/useGetRecipe";

const ToCocktailsLink: React.VFC = () => {
  return (
    <Link href="/cocktails">
      <span className="text-sm text-red-600 underline">
        ＜ カクテル一覧ページへ戻る
      </span>
    </Link>
  );
};

export const CocktailRecipe: React.VFC = () => {
  const { loading, recipe } = useGetRecipe(1);

  return (
    <ContentWraper>
      <ToCocktailsLink />
      <div id="cocktailContent" className="py-3">
        {loading || !recipe ? (
          <p>ローディング中</p>
        ) : (
          <>
            <div className="flex p-2 m-4">
              <img
                src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00VPZRMAK&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
                width={49}
                height={177}
                alt="カクテルの画像"
              />
              <p className="place-self-center py-4 text-2xl font-bold">
                {recipe.name}
              </p>
            </div>
            <div id="cocktailIngredients" className="py-4">
              <p className="p-2 text-xl font-semibold">材料</p>
              <div className="mx-auto w-full max-w-[300px]">
                {recipe.ingredients.map(
                  (ingredient: any, i: number) => {
                    return (
                      <div
                        key={i}
                        className="flex justify-between items-end pt-4 border-b border-gray-300 border-solid"
                      >
                        <p>{ingredient.name}</p>
                        <p className="text-base">
                          {ingredient.amount}
                          {ingredient.unit}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div id="cocktaildrinkmethod" className="py-4">
              <p className="py-2 text-xl font-semibold">作り方</p>
              <p className="text-lg font-bold">
                {recipe.drinkMethod}
              </p>
              <div className="py-2 text-base">
                <p>{recipe.explanation}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <ToCocktailsLink />
    </ContentWraper>
  );
};
export default CocktailRecipe;
