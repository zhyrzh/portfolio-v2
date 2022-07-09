import Link from "next/link";
import { useRouter } from "next/router";

import AboutIcon from "./icons/AboutIcon";
import WorksIcon from "./icons/WorksIcon";
import HomeIcon from "./icons/HomeIcon";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="navbar">
        <h3 className="nav-name">
          {router.pathname === "/" ? "Home" : router.pathname.substring(1)}
        </h3>
        <ul>
          <li
            style={{
              backgroundColor:
                router.pathname === "/about" ? "#2994F2" : "#D9D9D9",
            }}
          >
            <Link href={"/about"}>
              <a>
                <AboutIcon isActive={router.pathname === "/about"} />
              </a>
            </Link>
          </li>
          <li
            style={{
              backgroundColor:
                router.pathname === "/works" ? "#2994F2" : "#D9D9D9",
            }}
          >
            <Link href={"/works"}>
              <a>
                <WorksIcon isActive={router.pathname === "/works"} />
              </a>
            </Link>
          </li>
          <li
            style={{
              backgroundColor: router.pathname === "/" ? "#2994F2" : "#D9D9D9",
            }}
          >
            <Link href="/">
              <a>
                <HomeIcon isActive={router.pathname === "/"} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
