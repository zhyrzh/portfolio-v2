import type { NextPage } from "next";
import Image from "next/image";
import homeBackground from "home-background.avif";

const Home: NextPage = () => {
  return (
    <div className="page-container home">
      <div className="home__rectangle-design"></div>
      <h1 className="home__primay-title">Hello World! I am Rhyz </h1>
      <p className="home__secondary-title">
        and this is my portfolio website. I am an aspiring software engineer who
        seeks professional work experience or clients to serve. Nice meeting
        You!
      </p>
      <div className="home__button-container">
        <div className="home__button">
          Get in Touch
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#23B2D8"
            className="home__button-icon"
          >
            <path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
          </svg>
        </div>
        <div className="home__button">
          Download CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#23B2D8"
            className="home__button-icon"
          >
            <path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;
