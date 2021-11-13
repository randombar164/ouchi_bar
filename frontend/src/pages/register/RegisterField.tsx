import Link from "next/link";
import { useState } from "react";

export const RegisterField = () => {
  const [isLeft, setIsLeft] = useState(true); //left -> true, right -> false
  const handleClickLeft = () => {
    return setIsLeft(true);
  };
  const handleClickRight = () => {
    return setIsLeft(false);
  };

  return (
    <div id="registerField">
      <div className="flex items-center">
        <button
          onClick={handleClickLeft}
          className={`w-1/2 py-3 text-center ${
            isLeft
              ? "bg-gradient-to-br from-barOrange-3 to-barOrange-4 text-white"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          バーコードから登録
        </button>
        <button
          onClick={handleClickRight}
          className={`w-1/2 py-3 text-center ${
            !isLeft
              ? "bg-gradient-to-br from-barOrange-2 to-barOrange-3 text-white"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          材料名から登録
        </button>
      </div>
      <div className="flex items-center py-6 px-4 bg-gradient-to-br from-barOrange-2 to-barOrange-4">
        {isLeft ? (
          <Link href="/scan">
            <div className="flex justify-between items-center py-3 px-3 w-full text-barGray-2 bg-white rounded-lg">
              <p className="text-sm font-semibold">
                カメラを起動してバーコードを読み込む
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </Link>
        ) : (
          <Link href="/search-category">
            <div className="flex justify-between items-center py-3 px-3 w-full text-barGray-2 bg-white rounded-lg">
              <p className="text-sm font-semibold">カテゴリを選択する</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
