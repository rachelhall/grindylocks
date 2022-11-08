import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type AppProps } from "next/app";

import Layout from "components/Layout";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
