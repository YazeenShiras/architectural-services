import "../styles/globals.css";
import { UserStateProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserStateProvider>
      <Component {...pageProps} />
    </UserStateProvider>
  );
}

export default MyApp;
