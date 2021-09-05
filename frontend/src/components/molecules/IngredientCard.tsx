import type { VFC } from "react";
import { useState } from "react";

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

export const RegisterField = () => {
  const [current, setCurrent] = useState(true); //left -> true, right -> false
  const handleClick_left = () => {
    return setCurrent(true);
  };
  const handleClick_right = () => {
    return setCurrent(false);
  };
  return (
    <div id="registerField">
      <div className="flex items-center">
        <div
          onClick={handleClick_left}
          className={`w-1/2 py-4 text-center ${
            current ? "bg-red-400 text-white" : "bg-gray-200 text-gray-400"
          }`}
        >
          材料名から登録
        </div>
        <div
          onClick={handleClick_right}
          className={`w-1/2 py-4 text-center ${
            !current ? "bg-red-400 text-white" : "bg-gray-200 text-gray-400"
          }`}
        >
          バーコードから登録
        </div>
      </div>
      <div className="flex items-center py-8 px-4 bg-red-400">
        <input
          className="py-3 px-3 w-full rounded-lg"
          type="text"
          placeholder="材料の名前から登録"
        />
      </div>
    </div>
  );
};
