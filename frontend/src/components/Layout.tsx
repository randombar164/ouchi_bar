type Props = {
  children: React.ReactNode;
};

const Header: React.VFC = () => {
  return (
    <div className="fixed top-0 z-50 place-self-center h-12 p-2 w-full text-2xl font-semibold text-center text-red-600 bg-white">
      お家Bar
    </div>
  );
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
      <div className="pt-12">{children}</div>
    </>
  );
};
