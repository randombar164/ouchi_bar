import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { IngredientCardProps } from "src/utils/types/type";

type Props = {
  onClick: (arg: any) => void;
} & IngredientCardProps;

export const ResultCard: React.VFC<Props> = (prop) => {
  return (
    <Card>
      <CardActionArea
        sx={{ display: "flex", height: 80 }}
        onClick={prop.onClick}
      >
        <CardMedia
          component="img"
          sx={{ width: 160, objectFit: "contain" }}
          image={prop.imgSrc}
          alt={`${prop.name}の画像`}
        />
        <Typography variant="body1" sx={{ overflow: "hidden" }}>
          {prop.name}
        </Typography>
      </CardActionArea>
    </Card>
  );
};
