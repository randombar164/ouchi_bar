//mochikun用
import type { VFC } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { CocktailCards } from "src/components/cocktailCard";
import { Context } from "src/utils/contexts/provider";
import { sampleCocktailsRes } from "src/utils/hooks/useGetCocktails";
import { useGetCocktails } from "src/utils/hooks/useGetCocktails";

const CocktailPage: VFC = () => {
  const { uuid } = useContext(Context);
  const { loading, error, response, getCocktailsFn } = useGetCocktails();

  useEffect(() => {
    getCocktailsFn();
  }, [uuid]);

  console.log("loading:", loading);
  console.log("error:", error);
  console.log("response:", response);
  console.log("uuid:", uuid);

  return (
    <div className="container">
      <CocktailCards cocktails={sampleCocktailsRes.cocktails} />
    </div>
  );
};

export default CocktailPage;
