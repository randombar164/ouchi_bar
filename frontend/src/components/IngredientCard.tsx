import type { IngredientCardProps } from 'src/utils/types/type';


/* MUI */
import { Card, CardMedia } from "@mui/material"
import { Box } from "@mui/material"

type Props = {
  canDelete: boolean;
  onClick?: () => void;
  onDelete?: () => void;
} & IngredientCardProps;

export const IngredientCard: React.VFC<Props> = (prop) => {
  return (
    <Card
      onClick={prop.onClick}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 2,
        px: 4,
        width: "100%",
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))"
      }}
    >
      <Box
        sx={{
          marginRight: "2rem",
          height: "6rem"
        }}
      >
        <CardMedia
          component="img"
          image={prop.imgSrc}
          alt={`${prop.name}の写真`}
          sx={{
            height: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          fontWeight: "bold",
          color: "rgb(55 65 81)"
        }}>
        {prop.name}
      </Box>
      {prop.canDelete && (
        <svg
          onClick={prop.onDelete}
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 text-barOrange-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </Card>
  );
};
