import "../styles/index.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loadingHandler = () => {
      setIsLoading((prevState) => !prevState);
    };
    router.events.on("routeChangeStart", loadingHandler);

    router.events.on("routeChangeComplete", loadingHandler);
    return () => {
      router.events.off("routeChangeStart", loadingHandler);

      router.events.off("routeChangeComplete", loadingHandler);
    };
  }, [router]);

  return (
    <div className="main-container">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
