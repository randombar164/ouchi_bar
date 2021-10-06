import { Footer } from "src/components/footer";


type Props = {
  children: React.ReactNode;
};

const Header: React.VFC = () => {
  return <div className="place-self-center fixed top-0 w-full text-2xl text-center text-red-600 font-semibold p-2">お家Bar</div>;
};

// const Footer: React.VFC = () => {
//   return (
//     <div className="place-self-center fixed bottom-0 grid grid-cols-2 w-full divide-x rounded-t-2xl divide-gray-400 p-2 bg-yellow-200">
//       <a href="#" className="text-lg text-center text-current font-medium">My酒蔵</a>
//       <a href="#" className="text-lg text-center text-red-400 font-medium">作れるカクテル一覧</a>
//     </div>
//   );
// };

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer tab={0}/>
    </>
  );
};
