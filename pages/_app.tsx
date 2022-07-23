import "../styles/index.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="main-container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
