import { Card, Grid } from "@mui/material";
import type { VFC } from "react";
import { Link } from "@mui/material";
import { CocktailImg } from "./CocktailImg";
import type { Cocktail } from "src/utils/types/type";

type CardListProps = {
  items:
    | {
        id: number;
        name: string;
        imgTag: JSX.Element;
        caption: JSX.Element;
      }[]
    | undefined;
  onClick: (id: number) => void; // 各Cardに割り当てられるonclickを受け取る
  cardHeight: number | string;
};

export const CardList: VFC<CardListProps> = (props) => {
  // console.log(props);
  return (
    <>
      {props.items?.map((item) => {
        return (
          <Link
            underline="none"
            onClick={() => props.onClick(item.id)}
            key={item.id}
            sx={{ height: props.cardHeight }}
          >
            <Card style={{ padding: "0.5rem", margin: "0.25rem" }}>
              <Grid
                container
                spacing={3}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid item xs={3}>
                  {item.imgTag}
                </Grid>
                <Grid item xs={9}>
                  <h1 style={{ padding: "0.5em 0", fontWeight: "bold" }}>
                    {item.name}
                  </h1>
                  <h2
                    style={{
                      fontSize: "0.75rem",
                      lineHeight: "1rem",
                      color: "#2196f3",
                    }}
                  >
                    {item.caption}
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
