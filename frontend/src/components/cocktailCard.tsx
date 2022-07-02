import { Card, Grid } from '@mui/material';
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
            <Card variant="outlined">
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <CocktailImg recipe={recipe} />
              </Grid>
              <Grid item xs={9}>
                <h1 className="py-2 font-bold text-left">{cocktail.name}</h1>
                <h2 className="text-xs text-left text-blue-500">
                  {'すぐ作れる！'}
                </h2>
              </Grid>
            </Grid>
            </Card>
           
          </Link>
        );
      })}
    </>
  );
};