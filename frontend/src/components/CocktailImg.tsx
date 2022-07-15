type CocktailImgProps = {
  drinkMethodId: number;
  width: number;
  height: number | "";
};

// type DrinkMethod = "Build" | "Shake" | "Blend" | "Stir";

export const CocktailImg: React.VFC<CocktailImgProps> = ({
  drinkMethodId,
  width,
  height,
}) => {
  return (
    <div>
      {drinkMethodId === 1 ? (
        <img src="/build.png" width={width} height={height} alt="ビルド" />
      ) : drinkMethodId === 2 ? (
        <img src="/shake.png" width={width} height={height} alt="シェイク" />
      ) : drinkMethodId === 3 ? (
        <img src="/blend.png" width={width} height={height} alt="ブレンド" />
      ) : (
        <img src="/stir.png" width={width} height={height} alt="ステア" />
      )}
    </div>
  );
};
