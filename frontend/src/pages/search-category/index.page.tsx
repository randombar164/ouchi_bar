import React, { useCallback } from "react";
import { useState } from "react";

import { useGetIngredientsFromCategory } from "../../utils/hooks/useGetIngredientsFromCategory";
import data from "src/static/category_tree.json";
import { Layout } from "src/components/Layout";

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
        onClick={() => toNext(child)}
        className="w-full py-1 border-b border-solid border-gray-100"
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

  const { loading, error, response, getIngredientsFromCategory, setNodeId } =
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
        setNodeId(child.id);
        getIngredientsFromCategory(); //api呼び出し
      }
    },
    [current, hasChild, routeIds]
  );
  console.log(response);
  return (
    <Layout>
      {hasChild && (
        <div className="bg-barGray-1 h-screen">
          <p className="text-barGray-2 pl-2 py-4 font-bold test-sm">
            カテゴリを選択
          </p>
          <div className="h-4/5 overflow-scroll bg-white">
            {current.children.map((child: NodeProps, i: number) => {
              return <CategoryButton key={i} toNext={toNext} child={child} />;
            })}
          </div>
          <button
            className="pl-2 py-4 outline-none text-barGray-2 font-bold text-base"
            onClick={back}
          >
            ←戻る
          </button>
        </div>
      )}
      {!hasChild && (
        <div>
          <p className="text-barGray-2 pl-2 py-4 font-bold test-sm">
            商品を選択
          </p>
        </div>
      )}
    </Layout>
  );
};

export default SearchCategoryPage;
