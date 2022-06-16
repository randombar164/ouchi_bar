type CocktailImgProps = {
  recipe: any;
};

type DrinkMethod = 'Build' | 'Shake' | 'Blend' | 'Stir';

const CocktailImg: React.VFC<CocktailImgProps> = ({ recipe }) => {
  const drinkMethod: DrinkMethod = recipe.drnkmethod;

  return (
    <>
      {drinkMethod === 'Build' ? (
        <img src="/build.png" width={49} height={177} alt="ビルド" />
      ) : drinkMethod === 'Shake' ? (
        <img src="/shake.png" width={49} height={177} alt="シェイク" />
      ) : drinkMethod === 'Blend' ? (
        <img src="/blend.png" width={49} height={177} alt="ブレンド" />
      ) : (
        <img src="/stir.png" width={49} height={177} alt="ステア" />
      )}
    </>
  );
};

export default CocktailImg;
