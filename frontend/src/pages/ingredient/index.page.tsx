import { useRouter } from "next/router";
import type { VFC } from "react";

/* original component */
import { Layout } from "src/components/Layout";
import { CocktailCards } from "src/components/cocktailCard";

/* MUI Component */
import { Card, CardMedia, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
// import { Box } from "@mui/material";

type IngredientProps = {
  img: string;
  name: string;
  content: string;
};

const IngredientShowCard: VFC<IngredientProps> = (ingredient) => {
  // TODO: Cardの枠線を消す（Boxを使う？）
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
  // TODO: 材料一覧ページへのリンクになおす
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        router.push("/cocktails");
      }}
    >
      ＜ カクテル一覧ページへ戻る
    </Link>
  );
};

const IngredientPage: React.VFC = (): JSX.Element => {
  const sample_ingredient: IngredientProps = {
    img: "/whisky.png",
    name: "whisky",
    content: "whisky content",
  };
  const sample_cocktails: any[] = [];

  return (
    <Layout>
      <ToCocktailsLink />
      <IngredientShowCard
        img={sample_ingredient.img}
        name={sample_ingredient.name}
        content={sample_ingredient.content}
      />

      <Typography
        component="div"
        variant="subtitle1"
        sx={{ fontWeight: "bold", mx: 2 }}
      >
        作れるカクテル
      </Typography>
      {sample_cocktails.length === 0 && (
        <CocktailCards cocktails={sample_cocktails.slice(0, 3)}></CocktailCards>
      )}
    </Layout>
  );
};

export default IngredientPage;
