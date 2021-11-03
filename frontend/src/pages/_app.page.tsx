import "src/styles/globals.css";

import type { AppProps } from "next/app";
import { ContextProvider } from "src/utils/contexts/provider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextProvider>
        <Component {...pageProps} />
    </ContextProvider>
  );
};
export default MyApp;
