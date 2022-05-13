import Link from 'next/link';
import { useRouter } from 'next/router';
import type { VFC } from 'react';
import { useGetRecipe } from 'src/utils/hooks/useGetRecipe';
import CocktailImg from './CocktailImg';

type CocktailProps = {
  cocktails: any[];
};

export const CocktailCards: VFC<CocktailProps> = ({ cocktails }) => {
  const router = useRouter();
  const cocktailId = Number(router?.query.id);
  const { recipe } = useGetRecipe(cocktailId);
  return (
    <>
      {cocktails.map((cocktail) => {
        return (
          <Link href={`/cocktail-recipe/${cocktail.id}`} key={cocktail.id}>
            <div className="box-content flex p-2 w-auto h-20 border-b-2 border-barGray-1">
              <CocktailImg recipe={recipe} />
              <div className="m-2 w-16 h-16 bg-gray-300 rounded-lg"></div>
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
