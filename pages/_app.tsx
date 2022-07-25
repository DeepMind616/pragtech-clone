import { FC, ReactNode } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const Noop: FC<{ children: ReactNode }> = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps & { 
  Component: { Layout: FC<{ children: ReactNode }> } }) {
  const Layout = Component.Layout ?? Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
