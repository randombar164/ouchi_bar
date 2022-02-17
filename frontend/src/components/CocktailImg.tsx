type CocktailImgProps = {
  recipe: any;
};

const CocktailImg: React.VFC<CocktailImgProps> = ({ recipe }) => {
  return (
    <div className="">
      if ({recipe.drinkMethod}="Build")
      {<img src="/build.png" width={49} height={177} alt="ビルド" />}
      else if ({recipe.drinkMethod}="Shake")
      {<img src="/stir.png" width={49} height={177} alt="シェイク" />}
      else if ({recipe.drinkMethod}="Blend")
      {<img src="/blend.png" width={49} height={177} alt="ブレンド" />}else
      {<img src="/shake.png" width={49} height={177} alt="ステア" />}
    </div>
  );
};

export default CocktailImg;
