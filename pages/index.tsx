import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="home">
      <div className="home__background"></div>
      <div className="home__content">
        <h1 className="home__title">Hello, I am Rhyz a Web Developer</h1>
        <h1 className="home__sub-title">
          I create software products such as web page and web servers. A
          pleasure to meet you!
        </h1>
        <button className="home__cta">Download CV</button>
        <button className="home__cta">Contact Me</button>
      </div>
      <div className="home__image"></div>
    </div>
  );
};

export default Home;
