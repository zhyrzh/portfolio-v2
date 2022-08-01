import type { NextPage } from "next";
import Link from "next/link";
import CustomHead from "../components/CustomHead";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead pageTitle="About" />
      <section className="home">
        <div className="home__hero"></div>
        <div className="home__content">
          <h1 className="home__content-main-text">Hello!</h1>
          <h3 className="home__content-sub-text">
            Nice meeting you! I’m Rhyz, a software developer. This is my
            portfolio website.
          </h3>
          <nav className="home__nav">
            <ul className="home__nav-item-container">
              <Link href={"/works"}>
                <li className="home__nav-item">Works</li>
              </Link>
              <Link href={"/about"}>
                <li className="home__nav-item">About</li>
              </Link>
              <li className="home__nav-item">Contact</li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Home;
