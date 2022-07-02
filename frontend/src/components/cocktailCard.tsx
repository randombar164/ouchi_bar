import Link from 'next/link';
import type { VFC } from 'react';

import CocktailImg from './CocktailImg';

type RecipeProps = {
  id: any;
  name: any;
  strength: any;
  explanation: any;
  drinkMethod: any;
  glassType: any;
  ingredients: any;
}

type CocktailProps = {
  cocktails: any[];
  recipe: RecipeProps;
};


export const CocktailCard: VFC<CocktailProps> = ({ cocktails }) => {
  return (
    <>
      {cocktails.map((cocktail, recipe) => {
        return (
          <Link href={`/cocktail-recipe/${cocktail.id}`} key={cocktail.id}>
            <div className="box-content flex p-2 w-auto h-20 border-b-2 border-barGray-1">
              <CocktailImg recipe={recipe} />
              <div className="m-2 w-56">
                <h1 className="py-2 font-bold text-left">{cocktail.name}</h1>
                <h2 className="text-xs text-left text-blue-500">
                  {'すぐ作れる！'}
                </h2>
              </div>
              <div className="px-2 my-auto h-16 text-xl">{'>'}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
};