/* MUI Component */
import { Card, CardMedia, CardContent } from "@mui/material";
import { Typography } from "@mui/material";

/* type */
import type { Ingredient } from "src/utils/types/type";

/* componentごとにPropsの型を宣言 */
type IngredientShowFieldProps = {
  ingredient: Ingredient;
};

export const IngredientShowField: React.VFC<IngredientShowFieldProps> = (
  props
) => {
  return (
    <Card sx={{ display: "flex", mx: 2, my: 1, px: 2, py: 1 }}>
      <CardMedia
        component="img"
        image={props.ingredient.img}
        alt={`${props.ingredient.name}の画像`}
        sx={{ flexBasis: "40%" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "60%",
          textAlign: "center",
        }}
      >
        <Typography component="div" variant="h5" sx={{ flexBasis: "50%" }}>
          {props.ingredient.name}
        </Typography>
        <Typography
          component="div"
          variant="subtitle1"
          sx={{ flexBasis: "50%" }}
        >
          {props.ingredient.content}
        </Typography>
      </CardContent>
    </Card>
  );
};
