import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CocktailImg } from "src/components/CocktailImg";
import { ContentWrapper } from "src/components/ContentWrapper";
import { Layout } from "src/components/Layout";
import { Context } from "src/utils/contexts/provider";
import { pushHome } from "src/utils/hooks/v2/pushHome";
import { useGetRecipe } from "src/utils/hooks/v2/useGetRecipe";

const ToCocktailsLink: React.VFC = () => {
  return (
    <Link href="/cocktails">
      <Typography
        variant="body2"
        style={{ color: "#3602a6", textDecoration: "underline" }}
      >
        &lt;カクテル一覧ページへ戻る
      </Typography>
    </Link>
  );
};

export const CocktailRecipe: React.VFC = () => {
  const router = useRouter();
  const cocktailId = Number(router?.query.id);
  const { loading, recipe } = useGetRecipe(cocktailId);

  // console.log(recipe.drinkMethodId);

  return (
    <Layout>
      <ContentWrapper>
        <div id="cocktailContent" style={{ padding: "0.75rem " }}>
          <ToCocktailsLink />
          {loading || !recipe ? (
            <p>ローディング中です</p>
          ) : (
            <>
              <Box margin={"1rem"}>
                <Grid
                  container
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "2rem",
                  }}
                >
                  <Grid item xs={6}>
                    <CocktailImg
                      drinkMethodId={recipe.drinkMethodId}
                      width={100}
                      height={100}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <p style={{ fontSize: "16px" }}>{recipe.name}</p>
                  </Grid>
                </Grid>
                <div id="cocktailIngredients" style={{ paddingTop: "3rem" }}>
                  <Typography
                    variant="h6"
                    component="p"
                    style={{
                      background: "linear-gradient(transparent 90%, #e3e3e3 0)",
                    }}
                  >
                    材料
                  </Typography>
                  <div>
                    {recipe?.ingredients?.map((ingredient: any, i: number) => {
                      return (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingTop: "0.75rem",
                          }}
                        >
                          <Typography variant="body2" gutterBottom>
                            {ingredient.name}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {ingredient.amount}
                            {ingredient.unit}
                          </Typography>
                        </Box>
                      );
                    })}
                  </div>
                </div>
                <div id="cocktaildrinkmethod" style={{ paddingTop: "3rem" }}>
                  <Typography
                    variant="h6"
                    component="p"
                    style={{
                      background: "linear-gradient(transparent 90%, #e3e3e3 0)",
                    }}
                  >
                    作り方
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    component="div"
                    style={{ paddingTop: "0.5rem" }}
                  >
                    {recipe.drinkMethod}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {recipe.explanation}
                  </Typography>
                </div>
              </Box>
            </>
          )}
          <ToCocktailsLink />
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default CocktailRecipe;
