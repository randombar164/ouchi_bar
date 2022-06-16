import Box from '@mui/material/Box';
import type { VFC } from "react";
import styles from "src/styles/SingleShelf.module.css";

type Props = {
  items: any[];
};
export const SingleShelf: VFC<Props> = ({ items }) => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: "100%", alignItems: 'flex-end', height: 150}}>
      {items.map((item, i) => {
          return (
            <Box key = {i} sx={{width: 40}}>
              <img src={item.imgSrc} alt="お酒の画像" width={40} height={110} />
            </Box>
          );
        })}
      </Box>
      {/* <div className="flex justify-around items-end w-full h-[150px]">
        {items.map((item, i) => {
          return (
            <div key={i} className="w-[40px]">
              <img src={item.imgSrc} alt="お酒の画像" width={40} height={110} />
            </div>
          );
        })}
      </div> */}
      <div className={`${styles.shelf}`}></div>
    </div>
  );
};

export default SingleShelf;
