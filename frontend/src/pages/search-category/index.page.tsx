import React, { useCallback } from "react";
import { useState } from "react";
import { Layout } from "src/components/Layout";
import data from "src/static/category_tree.json";
import { IngredientCard } from "src/components/IngredientCard";

import { useGetIngredientsFromCategory } from "../../utils/hooks/useGetIngredientsFromCategory";

type NodeProps = {
  id: number;
  name: string;
  children: any[];
};

type CategoryButtonProps = {
  toNext: (child: NodeProps) => void;
  child: NodeProps;
};

const CategoryButton: React.VFC<CategoryButtonProps> = React.memo(
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

const SearchCategoryPage: React.VFC = (): JSX.Element => {
  const [routeIds, setRouteIds] = useState<number[]>([data.category.id]);
  const [current, setCurrent] = useState<NodeProps>(data.category);
  const [hasChild, setHasChild] = useState(true);

  const { loading, error, response, getIngredientsFromCategory } =
    useGetIngredientsFromCategory();

  const back = useCallback(() => {
    const parentId = routeIds[routeIds.length - 2];
    const parent = data.category.children.find((child) => {
      return child.id === parentId;
    });
    if (parent != undefined) {
      setCurrent(parent);
    }
  }, [current]);

  const toNext = useCallback(
    (child: NodeProps) => {
      if (child.children.length > 0) {
        //子要素を持つとき
        setRouteIds([...routeIds, child.id]);
        setCurrent(child);
        return;
      } else {
        setHasChild(false);
        //子要素を持たないとき
        console.log("-----CLICKED---------------------");
        console.log("name: ", child.name);
        console.log("NodeId: ", child.id);
        getIngredientsFromCategory(child.id); //api呼び出し
      }
    },
    [current, hasChild, routeIds]
  );
  console.log(response);
  return (
    <Layout>
      {hasChild && (
        <div className="h-screen bg-barGray-1">
          <p className="py-4 pl-2 font-bold text-barGray-2 test-sm">
            カテゴリを選択
          </p>
          <div className="overflow-scroll h-auto max-h-4/5 bg-white">
            {current.children.map((child: NodeProps, i: number) => {
              return <CategoryButton key={i} toNext={toNext} child={child} />;
            })}
          </div>
          <button
            className="py-4 pl-2 text-base font-bold outline-none text-barGray-2"
            onClick={back}
          >
            ←戻る
          </button>
        </div>
      )}
      {!hasChild && (
        <div className="px-3">
          <p className="py-4 font-bold text-barGray-2 test-sm">
            商品を選択(1つ選んでタップしてください)
          </p>
          {response?.concreteIngredients?.map((ingredient: any, i: any) => {
            return (
              <div className="my-3" key={i}>
                <IngredientCard
                  canDelete={false}
                  imgSrc={ingredient.imgSrc}
                  name={ingredient.name}
                />
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default SearchCategoryPage;
