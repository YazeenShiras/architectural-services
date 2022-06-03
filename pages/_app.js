/* eslint-disable @next/next/inline-script-id */
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../src/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-N2YH78K6PR`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-N2YH78K6PR', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <Head>
        <title>Agriha | Arclif</title>
        <meta
          name="description"
          content="Online Architecture Services | Arclif"
        />
        <meta
          name="keywords"
          content="Agriha, agriha, arclif, home services, home build, dream home, online architecture services"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
