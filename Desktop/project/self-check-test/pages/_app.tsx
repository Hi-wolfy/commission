import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/page.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>SelfCheck</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
