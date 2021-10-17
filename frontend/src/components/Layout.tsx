type Props = {
  children: React.ReactNode;
};

const Header: React.VFC = () => {
  return <div>ヘッダーです</div>;
};

const Footer: React.VFC = () => {
  return <div>フッターです</div>;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
