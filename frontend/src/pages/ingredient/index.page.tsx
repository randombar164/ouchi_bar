import { useEffect, useState } from "react";

/* original component */
import { Layout } from "src/components/Layout";
import { CardList } from "src/components/CardList";
import { IngredientShowField } from "src/components/IngredientShowField";

/* MUI Component */
import { Link } from "@mui/material";
import { Typography } from "@mui/material";
import { useGetRecommendedIngredients } from "src/utils/hooks/v3/useGetRecommendedIngredients";
import { CocktailImg } from "src/components/CocktailImg";

const IngredientPage: React.VFC = (): JSX.Element => {
  const {
    recommendedIngredients,
    loading,
    error,
    getRecommendedIngredientsFn,
  } = useGetRecommendedIngredients();
  useEffect(() => {
    getRecommendedIngredientsFn();
  }, [getRecommendedIngredientsFn]);

  const ingredients = recommendedIngredients?.map((ingredient) => {
    return {
      id: ingredient.id,
      name: ingredient.name,
      imgTag: <img src={ingredient?.imgSrc} />,
      caption: <h2>作れるカクテルがｘ個増えます</h2>,
    };
  });

  const [currentIngredientId, setCurrentIngredientId] = useState<number | null>(
    null
  ); // この辺冗長になってるけども、CardLsitコンポーネントで統合下したあたり仕方ない？
  const currentIngredient = recommendedIngredients?.find(
    (e) => e.id == currentIngredientId
  );

  const sample_cocktails = [
    // この材料が追加したときに作れるようになるカクテル -> APIみあたらない
    {
      id: 1,
      name: "cocktail 1",
      imgTag: <CocktailImg drinkMethodId={1} height={50} width={50} />,
      caption: <h2>"すぐ作れる"</h2>,
    },
    {
      id: 2,
      name: "cocktail 2",
      imgTag: <CocktailImg drinkMethodId={2} height={50} width={50} />,
      caption: <h2>"すぐ作れる"</h2>,
    },
    {
      id: 3,
      name: "cocktail 3",
      imgTag: <CocktailImg drinkMethodId={3} height={50} width={50} />,
      caption: <h2>"すぐ作れる"</h2>,
    },
    {
      id: 4,
      name: "cocktail 4",
      imgTag: <CocktailImg drinkMethodId={4} height={50} width={50} />,
      caption: <h2>"すぐ作れる"</h2>,
    },
  ];

  return (
    <Layout>
      {!currentIngredientId ? (
        <CardList
          items={ingredients}
          onClick={setCurrentIngredientId}
          cardHeight={50}
        />
      ) : (
        <>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setCurrentIngredientId(null);
            }}
            sx={{ mx: 2 }}
          >
            材料一覧ページへ戻る
          </Link>
          <IngredientShowField
            ingredient={{
              img: currentIngredient?.imgSrc,
              name: currentIngredient?.name,
            }}
          />
          <Typography
            component="div"
            variant="subtitle1"
            sx={{ fontWeight: "bold", mx: 2 }}
          >
            作れるカクテル
          </Typography>
          <CardList
            items={sample_cocktails.slice(0, 3)}
            onClick={(id: number) => {
              console.log(id);
            }}
            cardHeight={50}
          />
          <Typography
            component="div"
            variant="subtitle1"
            sx={{ fontWeight: "bold", mx: 2, textAlign: "right" }}
          >
            もっと見る
          </Typography>
        </>
      )}
    </Layout>
  );
};

export default IngredientPage;
