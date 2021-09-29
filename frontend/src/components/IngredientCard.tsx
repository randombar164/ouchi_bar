import type { VFC } from "react";

export const IngredientCard: VFC = () => {
  return (
    <div
      id="card"
      className="flex justify-between items-center py-6 px-8 bg-white rounded-lg shadow-lg"
    >
      <div className="flex">
        <div className="mr-8">
          <img
            className="h-14 sm:h-12 rounded-full"
            src="https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01CXSRJHI&Format=_SL160_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=c6tower-22&language=ja_JP"
            alt="drink_img"
          />
        </div>
        <div>
          <h1 className="text-lg font-medium text-gray-700">商品名</h1>
          <p className="text-gray-600">商品の説明を書く？</p>
        </div>
      </div>
    </div>
  );
};
