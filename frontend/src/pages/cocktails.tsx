//mochikun用
import type { VFC } from "react";
import { useEffect } from "react";
import { CocktailCards } from "src/components/cocktailCard";
import { sampleCocktailsRes } from "src/utils/hooks/useGetCocktails";
import { useGetCocktails } from "src/utils/hooks/useGetCocktails";

const CocktailPage: VFC = () => {
  const { getCocktailsFn } = useGetCocktails();

  useEffect(() => {
    getCocktailsFn();
  }, [getCocktailsFn]);

  return (
    <div className="container">
      <CocktailCards cocktails={sampleCocktailsRes.cocktails} />
    </div>
  );
};

export default CocktailPage;
