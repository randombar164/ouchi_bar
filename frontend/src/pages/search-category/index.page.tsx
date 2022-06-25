import { useRouter } from 'next/router';
import { memo, useCallback, useContext } from 'react';
import { useState } from 'react';
import { IngredientCard } from 'src/components/IngredientCard';
import { Layout } from 'src/components/Layout';
import data from 'src/static/category_tree.json';
import { Context } from 'src/utils/contexts/provider';
import type { concreteIngredientType } from 'src/utils/types/type';

import { useGetIngredientsFromCategory } from '../../utils/hooks/useGetIngredientsFromCategory';

/* MUI */
import { Box } from "@mui/material";
import { List } from "@mui/material";
import { Button } from "@mui/material";

type NodeProps = {
  id: number;
  name: string;
  children: any[];
};

type CategoryButtonProps = {
  toNext: (child: NodeProps) => void;
  child: NodeProps;
};

const CategoryButton: React.VFC<CategoryButtonProps> = memo(
  ({ toNext, child }) => {
    return (
      <Button
        variant="text"
        onClick={() => {toNext(child)}}
        sx={{
          width: "100%",
          borderBottomWidth: "1px",
          borderColor: "rgb(243,244,246)",
          borderStyle: "solid",
          textAlign: "left",
          color: "#505050",
        }}>{child.name}
      </Button>
    );
  }
);
CategoryButton.displayName = 'CategoryButton';

const SearchCategoryPage: React.VFC = (): JSX.Element => {
  const [routeIds, setRouteIds] = useState<number[]>([data.category.id]);
  const [current, setCurrent] = useState<NodeProps>(data.category);
  const [hasChild, setHasChild] = useState(true);

  const { concreteIngredients, setConcreteIngredients } = useContext(Context);
  const router = useRouter();
  const handleClick = useCallback(
    (ingredient: concreteIngredientType) => {
      setConcreteIngredients([...concreteIngredients, ingredient]);
      router.push('/register');
    },
    [concreteIngredients, router, setConcreteIngredients]
  );

  const { response, getIngredientsFromCategory } =
    useGetIngredientsFromCategory();

  const back = useCallback(() => {
    setRouteIds([...routeIds.slice(0, -1)]); //pop_back
    let parent: NodeProps = data.category;
    if (routeIds.length) {
      routeIds.slice(0, -1).forEach((id) => {
        parent = parent.children.find((child) => {
          return child.id === id;
        });
      });
    }
    setCurrent(parent);
  }, [routeIds]);

  const toNext = useCallback(
    (child: NodeProps) => {
      if (child.children.length > 0) {
        //子要素を持つとき
        setRouteIds([...routeIds, child.id]); //push_back
        setCurrent(child);
        return;
      } else {
        setHasChild(false);
        //子要素を持たないとき
        getIngredientsFromCategory(child.id); //api呼び出し
      }
    },
    [routeIds, getIngredientsFromCategory]
  );

  const onReload = useCallback(() => {
    router.reload();
  }, [router]);


  return (
    <Layout>
      <Box sx={{ background: "#EEEEEE" }}>
        {hasChild && (
          <Box>
            <Box sx={{ 
              fontWeight: "bold", 
              fontSize: "14px", 
              color: "#A7B6C8", 
              py: 2, 
              px: 1 
              }}>カテゴリを選択</Box>
            <List sx={{
              width: "100%",
              overflowY: "scroll",
              backgroundColor: "white",
            }}>
              {current.children.map((child: NodeProps, i: number) => {
                return <CategoryButton key={i} toNext={toNext} child={child} />;
              })}
            </List>
            {routeIds.length >= 1 && (
              <Button
                onClick={() => {back()}}
                sx={{
                  py: 2,
                  px: 1,
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#A7B6C8",
                  outline: "2px solid transparent",
                  outlineOffset: "2px"
                }}>←戻る</Button>
            )}
          </Box>
        )}

        {!hasChild && response?.concreteIngredients?.length > 0 && (
          <Box sx={{ px: 2 }}>
            <Box sx={{ 
              fontWeight: "bold", 
              fontSize: "14px", 
              color: "#A7B6C8", 
              py: 2, 
              px: 1 
              }}>商品を選択（１つ選んでタップしてください）</Box>
            {response?.concreteIngredients?.map((ingredient: any, i: any) => {
              return (
                <div className="my-3" key={i}>
                  <IngredientCard //FIXME
                    canDelete={false}
                    imgSrc={ingredient.imgSrc}
                    name={ingredient.name}
                    onClick={() => {
                      return handleClick(ingredient);
                    }}
                  />
                </div>
              );
            })}
          </Box>
        )}
        {!hasChild && response?.concreteIngredients?.length == 0 && (
          <Box sx={{ py: 10 }}>
            <Box sx={{
              fontWeight: "bold",
              color: "#505050",
              textAlign: "center",
            }}>検索結果が０件でした</Box>
            <Button
              variant="text"
              onClick={() => {onReload()}}
              sx={{
                py: 2,
                px: 1,
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: "bold",
                color: "#A7B6C8",
                outline: "2px solid transparent",
                outlineOffset: "2px"
              }}>←戻る</Button>
          </Box>)}
      </Box>
    </Layout>
  );
};

export default SearchCategoryPage;
