import Link from "next/link";
import { useRouter } from "next/router";

import AboutIcon from "./icons/AboutIcon";
import WorksIcon from "./icons/WorksIcon";
import HomeIcon from "./icons/HomeIcon";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
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
    </>
  );
};

export default Navbar;
