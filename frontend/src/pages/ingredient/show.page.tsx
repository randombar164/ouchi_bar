import { useRouter } from "next/router";
import type { VFC } from "react";

/* original component */
import { Layout } from "src/components/Layout";
import { CocktailCards } from "src/components/cocktailCard";

/* MUI Component */
import { Card, CardMedia, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
// import { Box } from "@mui/material";

// frontendのデータの持ち方にどうしよう
type Ingredient = {
  img: string;
  name: string;
  content: string;
};

/* componentごとにPropsの型を宣言 */
type IngredientShowCardProps = {
  ingredient: Ingredient;
};

const IngredientShowCard: VFC<IngredientShowCardProps> = ({ ingredient }) => {
  // HACK: margin, paddingをどこでつけるべきか
  return (
    <Card sx={{ display: "flex", mx: 2, my: 1, px: 2, py: 1 }}>
      <CardMedia
        component="img"
        image={ingredient.img}
        alt={`${ingredient.name}の画像`}
        sx={{ flexBasis: "40%" }}
      />

      <CardContent
        sx={{ display: "flex", flexDirection: "column", flexBasis: "60%" }}
      >
        <Typography
          component="div"
          variant="h5"
          align="center"
          sx={{ flexBasis: "50%" }}
        >
          {ingredient.name}
        </Typography>
        <Typography
          component="div"
          variant="subtitle1"
          align="center"
          sx={{ flexBasis: "50%" }}
        >
          {ingredient.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

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
      <IngredientShowCard ingredient={sample_ingredient} />
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
