import { Card, Grid } from "@mui/material";
import Link from "next/link";
import type { VFC } from "react";

import { CocktailImg } from "./CocktailImg";

type RecipeProps = {
  id: any;
  name: any;
  strength: any;
  explanation: any;
  drinkMethod: any;
  glassType: any;
  ingredients: any;
};

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
            <Card style={{ padding: "0.5rem", margin: "0.25rem" }}>
              <Grid
                container
                spacing={3}
                sx={{ display: "flex", alignItems: "center" }}>
                <Grid item xs={3}>
                  <CocktailImg recipe={recipe} width={50} height={50} />
                </Grid>
                <Grid item xs={9}>
                  <h1 style={{ padding: "0.5em 0", fontWeight: "bold" }}>
                    {cocktail.name}
                  </h1>
                  <h2
                    style={{
                      fontSize: "0.75rem",
                      lineHeight: "1rem",
                      color: "#2196f3",
                    }}>
                    {"すぐ作れる！"}
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
