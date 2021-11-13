import type { IngredientCardProps } from "src/utils/types/type";

type Props = {
  onClick: (arg: any) => void;
} & IngredientCardProps;

export const ResultCard: React.VFC<Props> = (prop) => {
  return (
    <button
      onClick={prop.onClick}
      className="flex overflow-hidden gap-3 justify-center items-center py-3 w-full h-24 rounded-xl border border-gray-300 border-solid"
    >
      <img src={prop.imgSrc} alt={`${prop.name}の画像`} className="h-20" />
      <p className="overflow-hidden w-40 text-sm font-bold">{prop.name}</p>
    </button>
  );
};
