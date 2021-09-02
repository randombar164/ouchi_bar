import Image from "next/link";
import type { VFC } from "react";

type Props = {
  items: any[];
  columnNumber: number;
};
export const SingleShelf: VFC<Props> = ({ items, columnNumber }) => {
  const itemWidth = window.innerWidth / columnNumber;
  return (
    <div className="w-full">
      {items.map((item, i) => {
        return (
          <div key={i} className={`w-[${itemWidth}]`}>
            <Image
              src="/whisky.png"
              alt="適当なaltタグを設置してください"
              width={80}
              height={110}
              layout={"responsive"}
            />
          </div>
        );
      })}
    </div>
  );
};
