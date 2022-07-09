import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="page-container home-container">
      <div className="right-triangle"></div>
      <div className="home-main-content">
        <h1 className="banner-title-primary">Hello There!</h1>
        <h3 className="banner-title-secondary">
          I am Rhyz, an aspiring software engineer. A pleasure to meet you.
        </h3>
        <button className="call-to-action">Get in touch</button>
      </div>
      <div className="image-container"></div>
    </div>
  );
};

export default Home;
