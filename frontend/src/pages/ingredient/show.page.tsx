import { useRouter } from "next/router";
import type { VFC } from "react";

/* original component */
import { Layout } from "src/components/Layout";
import { CocktailCards } from "src/components/cocktailCard";
import { IngredientShowField } from "src/components/IngredientShowField";

/* MUI Component */
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
// import { Box } from "@mui/material";

/* type */
import type { Ingredient } from "src/utils/types/type";

const ToCocktailsLink: React.VFC = () => {
  const router = useRouter();
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        router.push("/ingredient");
      }}
      sx={{ mx: 2 }}
    >
      材料一覧ページへ戻る
    </Link>
  );
};

const IngredientShowPage: React.VFC = (): JSX.Element => {
  const sample_ingredient: Ingredient = {
    img: "/whisky.png",
    name: "whisky",
    content: "whisky content",
  };
  const sample_cocktails: any[] = [];

  return (
    <Layout>
      <ToCocktailsLink />
      <IngredientShowField ingredient={sample_ingredient} />
      <Typography
        component="div"
        variant="subtitle1"
        sx={{ fontWeight: "bold", mx: 2 }}
      >
        作れるカクテル
      </Typography>
      <CocktailCards cocktails={sample_cocktails.slice(0, 3)}></CocktailCards>
    </Layout>
  );
};

export default IngredientShowPage;
