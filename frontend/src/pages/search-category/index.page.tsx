import type { VFC } from "react";
import { useEffect } from "react";
import { useState } from "react"

import { useGetIngredientsFromCategory } from "../../utils/hooks/useGetIngredientsFromCategory";
import data from "./category_tree.json"

const rootIds: number[] = [];

const SearchCategoryPage: VFC = () => {
    const [parent, setParent] = useState(data.category);
    const [selecting, setSelecting] = useState(true);

    const Title = ({ message }) => {
        return (
            <div style={{ background: "#E5E5E5" }} className="pt-5 pb-2 pl-2 text-barOrange-3">{message}</div>
        )
    }

    const Back = () => {
        const back = () => {
            rootIds.pop();
            // console.log(rootIds);
            let parent = data.category;
            rootIds.forEach((rootId) => {
                parent = parent.children.find((child) => {
                    return child.id === rootId;
                });
            });
            setParent(parent);
        }
        return (
            <div style={{ background: "#E5E5E5" }} className="pt-2 pb-5 pl-2 text-barOrange-3">
                <button onClick={back}>←戻る</button>
            </div>
        )
    }


    const ShowChild = ({ child }) => {
        const { loading, error, response, getIngredientsFromCategory } = useGetIngredientsFromCategory(child.id);

        const toNext = () => {
            if (child.children.length) { //子要素を持つとき
                rootIds.push(child.id)
                setParent(child);
                return;
            }
            else { //子要素を持たないとき
                console.log("-----CLICKED---------------------");
                console.log("name: ", child.name);
                console.log("NodeId: ", child.id);

                getIngredientsFromCategory();//api呼び出し
                setSelecting(false);
            }
        }
        return (
            <button onClick={toNext} className="w-full">
                <div className="py-1 ml-3 text-left">{child.name}</div>
            </button>
        )
    }

    const ShowChildren = ({ _children }) => {
        return (
            <div>
                {_children.map((child: any, idx: number) => { return (<ShowChild key={idx} child={child} />) })}
            </div>
        )
    }

    return (
        <div>
            {selecting && (
                <div>
                    <Title message={"カテゴリを選択"} />
                    <ShowChildren _children={parent.children} />
                    <Back />
                </div>)
            }
            {!selecting && (
                <div>
                    <Title message={"商品を選択"} />
                </div>)
            }
        </div>
    )
}

export default SearchCategoryPage;