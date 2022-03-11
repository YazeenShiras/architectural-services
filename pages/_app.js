import "../styles/globals.css";
import { LoginStateProvider } from "../context/LoginNumberContext";

function MyApp({ Component, pageProps }) {
  return (
    <LoginStateProvider>
      <Component {...pageProps} />
    </LoginStateProvider>
  );
}

export default MyApp;
