type CocktailImgProps = {
  drinkMethodId: number | undefined;
  width: number | string;
  height: number | string;
};

import { Box } from "@mui/material";

export const CocktailImg: React.VFC<CocktailImgProps> = (props) => {
  return (
    <Box sx={{ width: props.width, height: props.height }}>
      {props.drinkMethodId === 1 ? (
        <img
          src="/build.png"
          style={{ height: "100%", width: "auto", margin: "0 auto" }}
          alt="ビルド"
        />
      ) : props.drinkMethodId === 2 ? (
        <img
          src="/shake.png"
          style={{ height: "100%", width: "auto", margin: "0 auto" }}
          alt="シェイク"
        />
      ) : props.drinkMethodId === 3 ? (
        <img
          src="/blend.png"
          style={{ height: "100%", width: "auto", margin: "0 auto" }}
          alt="ブレンド"
        />
      ) : (
        <img
          src="/stir.png"
          style={{ height: "100%", width: "auto", margin: "0 auto" }}
          alt="ステア"
        />
      )}
    </Box>
  );
};
