import { ThemeProvider } from "next-themes";
import "../public/styles.css";
import { UiThemeSwitch } from "@algotrade/theme-switch";
import type { AppProps } from "next/app";
import Head from "next/head";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to algotrade!</title>
      </Head>
      <ThemeProvider attribute="class" enableSystem defaultTheme="light">
        <UiThemeSwitch />
        <main className="w-screen h-screen bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-300">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
