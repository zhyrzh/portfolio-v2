import Link from "next/link";
import { useRouter } from "next/router";

import AboutIcon from "./icons/AboutIcon";
import WorksIcon from "./icons/WorksIcon";
import HomeIcon from "./icons/HomeIcon";
import Logo from "./icons/Logo";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className="navbar">
        <Logo />
        <h3 className="nav-name">
          {router.pathname === "/" ? "Home" : router.pathname.substring(1)}
        </h3>
        <ul>
          <Link href={"/about"}>
            <li
              style={{
                backgroundColor:
                  router.pathname === "/about" ? "#23b2d8" : "#eefaff",
                border:
                  router.pathname === "/about"
                    ? "3px solid #eefaff"
                    : "3px solid #23b2d8",
              }}
            >
              <a>
                <AboutIcon isActive={router.pathname === "/about"} />
              </a>
            </li>
          </Link>
          <Link href={"/works"}>
            <li
              style={{
                backgroundColor:
                  router.pathname === "/works" ? "#23b2d8" : "#eefaff",
                border:
                  router.pathname === "/works"
                    ? "3px solid #eefaff"
                    : "3px solid #23b2d8",
              }}
            >
              <a>
                <WorksIcon isActive={router.pathname === "/works"} />
              </a>
            </li>
          </Link>
          <Link href="/">
            <li
              style={{
                backgroundColor:
                  router.pathname === "/" ? "#23b2d8" : "#eefaff",
                border:
                  router.pathname === "/"
                    ? "3px solid #eefaff"
                    : "3px solid #23b2d8",
              }}
            >
              <a>
                <HomeIcon isActive={router.pathname === "/"} />
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
