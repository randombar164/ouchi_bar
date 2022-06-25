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
// import { Container } from "@mui/material";
import { ListItemText } from "@mui/material"
import { Box } from "@mui/material";

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
      <button
        onClick={() => {
          return toNext(child);
        }}
        className="py-1 w-full border-b border-gray-100 border-solid"
      >
        <div className="py-1 ml-3 text-left">{child.name}</div>
      </button>
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
            <p className="py-4 pl-2 text-sm font-bold text-barGray-2">
              カテゴリを選択
            </p>
            <div className="overflow-scroll h-auto max-h-[70vh] bg-white">
              {current.children.map((child: NodeProps, i: number) => {
                return <CategoryButton key={i} toNext={toNext} child={child} />;
              })}
            </div>
            {routeIds.length >= 1 && (
              <button
                className="py-4 pl-2 text-base font-bold text-barGray-2 outline-none"
                onClick={back}
              >
                ←戻る
              </button>
            )}
          </Box>
        )}

        {!hasChild && response?.concreteIngredients?.length > 0 && (
          <div className="px-3">
            <p className="py-4 font-bold text-barGray-2">
              商品を選択(1つ選んでタップしてください)
            </p>
            {response?.concreteIngredients?.map((ingredient: any, i: any) => {
              return (
                <div className="my-3" key={i}>
                  <IngredientCard
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
          </div>
        )}
        {!hasChild && response?.concreteIngredients?.length == 0 && (
          <div className="py-10">
            <p className="font-bold text-center text-barGray-3">
              検索結果が0件でした
            </p>
            <button
              onClick={onReload}
              className="py-4 pl-2 text-base font-bold text-barGray-2 outline-none"
            >
              ←戻る
            </button>
          </div>
        )}
      </Box>
    </Layout>
  );
};

export default SearchCategoryPage;
