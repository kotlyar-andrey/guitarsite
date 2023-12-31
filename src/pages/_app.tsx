import "~/shared/styles/globals.css";
import "~/shared/styles/normalize.css";
import "~/shared/styles/colors.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
