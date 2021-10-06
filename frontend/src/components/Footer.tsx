// import type { React.VFC } from "react";

type Props = {
    tab:number;
};

export const Footer: React.VFC<Props> = ({ tab }) => {
  if (tab==0){
    return (
      <div className="place-self-center fixed bottom-0 grid grid-cols-2 w-full divide-x rounded-t-2xl divide-gray-400 p-2 border-t-4 border-r-0 border-b-0 border-l-0 border-gray-400 border-opacity-20 bg-red-100 bg-opacity-20">
        <a href="#" className="text-base text-center text-red-600 font-semibold">My酒蔵</a>
        <a href="#" className="text-base text-center text-red-400 font-semibold">作れるカクテル一覧</a>
      </div>
    );
 }else if (tab==1){
    return (
      <div className="place-self-center fixed bottom-0 grid grid-cols-2 w-full divide-x rounded-t-2xl divide-gray-400 p-2 border-t-4 border-r-0 border-b-0 border-l-0 border-gray-400 border-opacity-20 bg-red-100 bg-opacity-20">
        <a href="#" className="text-base text-center text-currently font-semibold">My酒蔵</a>
        <a href="#" className="text-base text-center text-red-600 font-semibold">作れるカクテル一覧</a>
      </div>
    );
  }else{
    return (
      <div className="place-self-center fixed bottom-0 grid grid-cols-2 w-full divide-x rounded-t-2xl divide-gray-400 p-2 border-t-4 border-r-0 border-b-0 border-l-0 border-gray-400 border-opacity-20 bg-red-100 bg-opacity-20">
        <a href="#" className="text-base text-center text-currently font-semibold">My酒蔵</a>
        <a href="#" className="text-base text-center text-red-400 font-semibold">作れるカクテル一覧</a>
      </div>
    );
  }
};

export default Footer;
