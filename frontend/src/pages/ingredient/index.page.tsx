import { useState } from "react";

/* original component */
import { Layout } from "src/components/Layout";
import { CocktailCards } from "src/components/cocktailCards";
import { IngredientCard } from "src/components/IngredientCard";
import { IngredientShowField } from "src/components/IngredientShowField";

/* type */
import type { Ingredient } from "src/utils/types/type";
import type { Cocktail } from "src/utils/types/type";

/* MUI Component */
import { Link } from "@mui/material";
import { Typography } from "@mui/material";

const IngredientPage: React.VFC = (): JSX.Element => {
  //TODO: APIを叩く
  const sample_ingredients: Ingredient[] = [
    {
      img: "/whisky.png",
      name: "whisky",
      content: "whisky content",
    },
    {
      img: "/whisky.png",
      name: "whisky",
      content: "whisky content",
    },
    {
      img: "/whisky.png",
      name: "whisky",
      content: "whisky content",
    },
  ];
  const sample_cocktails: Cocktail[] = [
    {
      id: 1,
      name: "50キャリバー",
      strength: 36,
      cockExplanation:
        "氷を入れたハイボールグラスに材料を注ぎステア、最後にソーダを加える",
      drinkMethodId: 1,
      glassTypeId: 1,
    },
    {
      id: 496,
      name: "アデレ・スペシャル",
      strength: 37.7,
      cockExplanation: "ステアして、カクテル・グラスに注ぐ",
      drinkMethodId: 4,
      glassTypeId: 3,
    },
  ];

  // おすすめの材料たち
  // const ingredients: Ingredient[] = [] // FIXME: APIどこ〜？
  // 材料を登録することによって作れるようになるカクテルたち
  // const cocktails: Cocktail[] = [];

  const [showIngredientDetails, setShowIngredientDetails] =
    useState<boolean>(false);

  return (
    <Layout>
      {!showIngredientDetails ? (
        sample_ingredients?.map((ingredient) => {
          return (
            <IngredientCard //TODO: IngredientCardの修正（旧UIのまま）
              canDelete={false}
              imgSrc={ingredient.img}
              name={ingredient.name}
              onClick={() => {
                setShowIngredientDetails(true);
              }}
            />
          );
        })
      ) : (
        <>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              setShowIngredientDetails(false);
            }}
            sx={{ mx: 2 }}
          >
            材料一覧ページへ戻る
          </Link>
          <IngredientShowField ingredient={sample_ingredients[0]} />
          <Typography
            component="div"
            variant="subtitle1"
            sx={{ fontWeight: "bold", mx: 2 }}
          >
            作れるカクテル
          </Typography>
          <CocktailCards cocktails={sample_cocktails.slice(0, 3)} />
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
