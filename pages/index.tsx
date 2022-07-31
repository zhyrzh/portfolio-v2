import type { NextPage } from "next";
import Link from "next/link";
import CustomHead from "../components/CustomHead";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead pageTitle="About" />
      <header className="header">
        <div className="header__circle"></div>
        <h3 className="header__title">
          Rhyz Arong | <span className="header__sub-title">Home</span>
        </h3>
      </header>
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
      <footer className="footer">
        <h3 className="footer__text">
          <span>&copy;</span> Rhyz Arong 2022
        </h3>
      </footer>
    </>
  );
};

export default Home;
