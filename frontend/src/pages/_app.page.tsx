import "src/styles/globals.css";

import type { AppProps } from "next/app";
import { Layout } from "src/components/Layout";
import { ContextProvider } from "src/utils/contexts/provider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
};
export default MyApp;
