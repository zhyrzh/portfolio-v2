import "../styles/index.scss";
import type { AppProps } from "next/app";

import AboutIcon from "../components/icons/AboutIcon";
import WorksIcon from "../components/icons/WorksIcon";
import HomeIcon from "../components/icons/HomeIcon";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="main-container">
      <h3 className="nav-name">Home</h3>
      <div className="navbar">
        <ul>
          <li
            style={{
              backgroundColor:
                router.pathname === "/about" ? "#2994F2" : "#D9D9D9",
            }}
          >
            <Link href={"/about"}>
              <AboutIcon isActive={router.pathname === "/about"} />
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                router.pathname === "/works" ? "#2994F2" : "#D9D9D9",
            }}
          >
            <WorksIcon isActive={router.pathname === "/works"} />
          </li>
          <li
            style={{
              backgroundColor: router.pathname === "/" ? "#2994F2" : "#D9D9D9",
            }}
          >
            <HomeIcon isActive={router.pathname === "/"} />
          </li>
        </ul>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
