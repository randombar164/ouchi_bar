import { useState } from "react";

/* original component */
import { Layout } from "src/components/Layout";
import { CocktailCards } from "src/components/cocktailCard";
import { IngredientCard } from "src/components/IngredientCard";
import { IngredientShowField } from "src/components/IngredientShowField";

/* type */
import type { Ingredient } from "src/utils/types/type";

/* MUI Component */
import { Link } from "@mui/material";
import { Typography } from "@mui/material";

const IngredientPage: React.VFC = (): JSX.Element => {
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
  const sample_cocktails: any[] = [];

  const [showIngredientDetails, setShowIngredientDetails] =
    useState<boolean>(false);

  return (
    <Layout>
      {!showIngredientDetails ? (
        sample_ingredients?.map((ingredient) => {
          return (
            <IngredientCard //TODO: IngredientCardの修正
              canDelete={false}
              imgSrc={ingredient.img}
              name={ingredient.name}
              onClick={() => {
                console.log("clicked");
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
              console.log("clicked");
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
          {/* //TODO: CocktailCardに変更する */}
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
