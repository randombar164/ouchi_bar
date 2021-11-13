import Image from "next/image";
import type { IngredientCardProps } from "src/utils/types/type";

type Props = {
  onClick: (arg: any) => void;
} & IngredientCardProps;

export const ResultCard: React.VFC<Props> = (prop) => {
  return (
    <button
      onClick={prop.onClick}
      className="w-full h-24 rounded-xl overflow-hidden border border-solid border-gray-300 flex justify-center gap-3 items-center py-3"
    >
      <img src={prop.imgSrc} alt={`${prop.name}の画像`} className="h-20" />
      <p className="w-40 text-sm font-bold overflow-hidden">{prop.name}</p>
    </button>
  );
};
