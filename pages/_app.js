/* eslint-disable @next/next/inline-script-id */
import "../styles/globals.css";
import Script from "next/script";

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

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
