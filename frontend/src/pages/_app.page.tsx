import "src/styles/globals.css";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ContextProvider } from "src/utils/contexts/provider";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ??
    ((page) => {
      return page;
    });
  return getLayout(
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
};
export default MyApp;
