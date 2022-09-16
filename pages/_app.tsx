import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { type AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "../lib/fetchJson";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    // <SWRConfig
    //   value={{
    //     fetcher: fetchJson,
    //     onError: (err) => {
    //       console.error(err);
    //     },
    //   }}
    // >
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}

      <Component {...pageProps} />
      {/* </Hydrate> */}
    </QueryClientProvider>
    // </SWRConfig>
  );
};

export default App;
