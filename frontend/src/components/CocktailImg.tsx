type CocktailImgProps = {
  recipe: any;
  width: number;
  height: number | "";
};

type DrinkMethod = "Build" | "Shake" | "Blend" | "Stir";

export const CocktailImg: React.VFC<CocktailImgProps> = ({
  recipe,
  width,
  height,
}) => {
  const drinkMethod: DrinkMethod = recipe.drnkmethod;

  return (
    <div>
      {drinkMethod === "Build" ? (
        <img src='/build.png' width={width} height={height} alt='ビルド' />
      ) : drinkMethod === "Shake" ? (
        <img src='/shake.png' width={width} height={height} alt='シェイク' />
      ) : drinkMethod === "Blend" ? (
        <img src='/blend.png' width={width} height={height} alt='ブレンド' />
      ) : (
        <img src='/stir.png' width={width} height={height} alt='ステア' />
      )}
    </div>
  );
};
