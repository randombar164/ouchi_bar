import { Layout } from "src/components/Layout";
import type { VFC } from "react";

/* MUI Component */
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
// import { Box } from "@mui/material";
import { Link } from "@mui/material";
import { useRouter } from "next/router";

type IngredientProps = {
  img: string;
  name: string;
  content: string;
};

const IngredientShowCard: VFC<IngredientProps> = (ingredient) => {
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
  return (
    <Layout>
      <ToCocktailsLink />
      <IngredientShowCard
        img={sample_ingredient.img}
        name={sample_ingredient.name}
        content={sample_ingredient.content}
      />
    </Layout>
  );
};

export default IngredientPage;
