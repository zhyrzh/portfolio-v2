import type { NextPage } from "next";
import Featured from "../components/icons/Featured";

const Home: NextPage = () => {
  return (
    <>
      <header className="header">
        <div className="header__circle"></div>
        <h3 className="header__title">
          Rhyz Arong | <span className="header__sub-title">Home</span>
        </h3>
      </header>

      <footer className="footer">
        <h3 className="footer__text">
          <span>&copy;</span> Rhyz Arong 2022
        </h3>
      </footer>
    </>
  );
};

export default Home;
