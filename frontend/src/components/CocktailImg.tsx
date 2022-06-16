type CocktailImgProps = {
  recipe: any;
};

type DrinkMethod = "Build" | "Shake" | "Blend" | "Stir";

const CocktailImg: React.VFC<CocktailImgProps> = ({ recipe }) => {
  const drinkMethod: DrinkMethod = recipe.drnkmethod;

  return (
    <div>
      {drinkMethod === "Build" ? (
        <img src="/build.png" alt="ビルド" />
      ) : drinkMethod === "Shake" ? (
        <img src="/shake.png" alt="シェイク" />
      ) : drinkMethod === "Blend" ? (
        <img src="/blend.png" alt="ブレンド" />
      ) : (
        <img src="/stir.png" width={100} alt="ステア" />
      )}
    </div>
  );
};

export default CocktailImg;
