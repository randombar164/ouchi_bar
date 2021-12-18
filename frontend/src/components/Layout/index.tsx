import { Footer } from "src/components/Layout/Footer";
import { Header } from "src/components/Layout/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-12 pb-16 h-screen">{children}</div>
      <Footer />
    </>
  );
};
