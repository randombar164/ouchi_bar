import Box from "@mui/material/Box";
import type { VFC } from "react";

type Ingredients = {
  items: {
    id: number;
    name: string;
    imgSrc: string | undefined;
  }[];
};
export const SingleShelf: VFC<Ingredients> = ({ items }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          alignItems: "flex-end",
          height: 150,
        }}
      >
        {items?.map((item, i) => {
          return (
            <Box key={i} sx={{ width: 40 }}>
              <img src={item.imgSrc} alt="お酒の画像" width={40} height={110} />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          boxShadow: 3,
          width: "100%",
          height: 11,
          bgcolor: (theme) => {
            return theme.palette.mode === "dark" ? "#101010" : "#fff";
          },
          color: (theme) => {
            return theme.palette.mode === "dark" ? "grey.300" : "grey.800";
          },
        }}
      ></Box>
    </div>
  );
};

export default SingleShelf;
