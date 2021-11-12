import { useState } from "react";

export const RegisterField = () => {
  const [current, setCurrent] = useState(true); //left -> true, right -> false
  const handleClickLeft = () => {
    return setCurrent(false);
  };
  const handleClickRight = () => {
    return setCurrent(true);
  };
  return (
    <div id="registerField">
      <div className="flex items-center">
        <button
          onClick={handleClickLeft}
          className={`w-1/2 py-4 text-center ${
            !current
              ? "bg-gradient-to-br from-barOrange-2 to-barOrange-3 text-white"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          材料名から登録
        </button>
        <button
          onClick={handleClickRight}
          className={`w-1/2 py-4 text-center ${
            current
              ? "bg-gradient-to-br from-barOrange-3 to-barOrange-4 text-white"
              : "bg-gray-200 text-gray-400"
          }`}
        >
          バーコードから登録
        </button>
      </div>
      <div className="flex items-center py-8 px-4 bg-gradient-to-br from-barOrange-2 to-barOrange-4">
        <input
          className="py-3 px-3 w-full rounded-lg"
          type="text"
          placeholder="材料の名前から登録"
        />
      </div>
    </div>
  );
};
