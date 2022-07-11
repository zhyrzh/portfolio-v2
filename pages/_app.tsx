import "../styles/index.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div
      className="main-container"
      style={{
        backgroundImage:
          router.pathname === "/"
            ? "linear-gradient( 0deg, rgba(238, 250, 255, 0.9), rgba(238, 250, 255, 0.9)), url(./home-background.avif)"
            : "",
      }}
    >
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
