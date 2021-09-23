import type { VFC } from "react";

type CocktailProps = {
  cocktails: any[];
};

export const CocktailCards: VFC<CocktailProps> = ({ cocktails }) => {
    return (
      <>
        {cocktails.map(cocktail => {
          return (
          <li key={cocktail.id} className="box-content flex p-2 w-auto h-20 border-b-2 border-gray-500">
            {/* <img className="ml-2 mr-4" src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP" alt="" />
            */}
            <div className="m-2 w-16 h-16 bg-gray-300 rounded-lg"></div>
            <div className="flex-auto m-2">
              <h1 className="py-2 font-bold">{cocktail.name}</h1>
              <h2 className="text-xs text-blue-500">{"すぐ作れる！"}</h2>
            </div>
            <button className="px-2 my-auto w-16 h-16 text-5xl">{">"}</button>
          </li>
          );
        })}
      </>
    );
  };