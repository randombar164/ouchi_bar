/* MUI Component */
import { Card, CardMedia, CardContent, Box, Button } from "@mui/material";
import { Typography } from "@mui/material";

/* type */
import type { Ingredient } from "src/utils/types/type";

/* componentごとにPropsの型を宣言 */
type IngredientShowFieldProps = {
  ingredient: {
    img: string | undefined;
    name: string | undefined;
  };
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
        sx={{ flexBasis: "40%", height: 100, width: 100, margin: "auto" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "60%",
          textAlign: "center",
        }}
      >
        <Typography component="div" variant="inherit" sx={{ flexBasis: "50%" }}>
          {props.ingredient.name}
        </Typography>
        <Box sx={{ flexBasis: "50%" }}>
          <Button
            sx={{
              backgroundColor: "#DDDDDD",
              color: "black",
              borderRadius: 3,
            }}
          >
            お家に登録する
          </Button>
        </Box>
        {/* <Typography
          component="div"
          variant="subtitle1"
          sx={{ flexBasis: "50%" }}
        >
          {props.ingredient.content}
        </Typography> */}
      </CardContent>
    </Card>
  );
};
