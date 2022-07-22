import "src/style/index.css";
import type { AppProps } from "next/app";
import { defaultTheme, Provider, SSRProvider } from "@adobe/react-spectrum";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Provider theme={defaultTheme} colorScheme="light">
        <Component {...pageProps} />
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
