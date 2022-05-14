import type { IngredientCardProps } from 'src/utils/types/type';

type Props = {
  canDelete: boolean;
  onClick?: () => void;
} & IngredientCardProps;

export const IngredientCard: React.VFC<Props> = (prop) => {
  return (
    <div
      id="card"
      className="flex justify-between items-center py-3 px-8 w-full bg-white rounded-lg shadow-xl drop-shadow-md"
    >
      <div
        className="flex gap-1 justify-center items-center"
        onClick={prop.onClick}
      >
        <div className="mr-8 h-24">
          <img
            src={prop.imgSrc}
            alt={`${prop.name}の写真`}
            className="h-full"
          />
        </div>
        <div>
          <h1 className="text-sm font-bold text-gray-700">{prop.name}</h1>
        </div>
      </div>
      {prop.canDelete && (
        <svg
          onClick={prop.onClick}
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 text-barOrange-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </div>
  );
};
//問題点
/*
  ×印以外の所を押しても、選択したものが消えてしまう
*/
//理由
/*
  onClickの場所が違う
*/
//解決策
/*
  まず、buttonのクラスをつける場所が違うんじゃないの？
  svgのクラスに、onClickをつけることが出来ないかな？
*/
