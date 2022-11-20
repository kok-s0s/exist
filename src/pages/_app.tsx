import type { AppProps } from "next/app";

import "../styles/globalstyle.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
