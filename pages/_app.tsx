import "../styles/index.scss";
import type { AppProps } from "next/app";

import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

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
