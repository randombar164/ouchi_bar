import type { VFC } from "react";
import styles from "src/styles/SingleShelf.module.css";

type Props = {
  items: any[];
};
export const SingleShelf: VFC<Props> = ({ items }) => {
  return (
    <div>
      <div className="flex justify-around items-end w-full h-[150px]">
        {items.map((item, i) => {
          return (
            <div key={i} className="w-[40px]">
              <img src={item.imgSrc} alt="お酒の画像" width={40} height={110} />
            </div>
          );
        })}
      </div>
      <div className={`${styles.shelf}`}></div>
    </div>
  );
};

export default SingleShelf;
