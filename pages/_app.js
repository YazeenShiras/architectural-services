import "../styles/globals.css";
import { UserStateProvider } from "../context/UserContext";
import { LoginNumberStateProvider } from "../context/LoginNumberContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserStateProvider>
      <LoginNumberStateProvider>
        <Component {...pageProps} />
      </LoginNumberStateProvider>
    </UserStateProvider>
  );
}

export default MyApp;
